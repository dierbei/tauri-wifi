import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splashscreen from "./Splashscreen"; // 你要创建的页面

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/splashscreen" element={<Splashscreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);