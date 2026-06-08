from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import resend

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
CONTACT_RECIPIENT_EMAIL = os.environ.get('CONTACT_RECIPIENT_EMAIL', 'apoorvapandey0202@gmail.com')
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

app = FastAPI(title="Apoorva Portfolio API")
api_router = APIRouter(prefix="/api")

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=5, max_length=4000)

@api_router.get("/")
async def root():
    return {"message": "Apoorva Pandey Portfolio API", "status": "online"}

def _build_html(name, email, message):
    safe_msg = (message or "").replace("\n", "<br/>")
    return f"""
    <table width="100%" style="font-family:Helvetica,Arial,sans-serif;background:#050505;padding:24px;color:#E5E7EB;">
      <tr><td>
        <table width="600" align="center" style="background:#0b0b0b;border:1px solid #1f1f1f;border-radius:4px;">
          <tr><td style="padding:24px;">
            <p style="font-family:'Courier New',monospace;color:#00F0FF;margin:0 0 8px;font-size:12px;letter-spacing:2px;">// NEW_CONTACT_FORM_SUBMISSION</p>
            <h2 style="color:#E5E7EB;margin:0 0 16px;">New message from your portfolio</h2>
            <p><strong style="color:#C4F135;">Name:</strong> {name}</p>
            <p><strong style="color:#C4F135;">Email:</strong> {email}</p>
            <hr style="border:none;border-top:1px solid #1f1f1f;margin:16px 0;"/>
            <p style="color:#E5E7EB;line-height:1.6;">{safe_msg}</p>
          </td></tr>
        </table>
      </td></tr>
    </table>"""

@api_router.post("/contact", response_model=ContactMessage)
async def submit_contact(payload: ContactCreate):
    msg = ContactMessage(name=payload.name, email=payload.email, message=payload.message)
    doc = msg.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    if RESEND_API_KEY and not RESEND_API_KEY.startswith("re_placeholder"):
        try:
            params = {
                "from": SENDER_EMAIL,
                "to": [CONTACT_RECIPIENT_EMAIL],
                "subject": f"[Portfolio] New message from {payload.name}",
                "html": _build_html(payload.name, payload.email, payload.message),
                "reply_to": payload.email,
            }
            await asyncio.to_thread(resend.Emails.send, params)
            doc['email_sent'] = True
            msg.email_sent = True
        except Exception as e:
            logger.error(f"Resend send failed: {e}")
    await db.contact_messages.insert_one(doc)
    return msg

@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contact_messages(limit: int = 50):
    rows = await db.contact_messages.find({}, {"_id": 0}).sort("timestamp", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get('timestamp'), str):
            r['timestamp'] = datetime.fromisoformat(r['timestamp'])
    return rows

app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()