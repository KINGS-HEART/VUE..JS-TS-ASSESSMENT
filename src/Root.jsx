// src/Root.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";

export default function Root() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/settings" element={<div>Settings page</div>} />
      </Routes>
    </BrowserRouter>
  );
}
