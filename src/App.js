import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/reset.css";

import Test from "./test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
