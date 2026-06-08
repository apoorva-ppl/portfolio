import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App grain">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0b0b0b",
            border: "1px solid #1a1a1a",
            color: "#E5E7EB",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}

export default App;
