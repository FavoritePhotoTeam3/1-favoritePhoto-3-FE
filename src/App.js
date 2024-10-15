import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/reset.css";

import Test from "./temp/test_page/Test";
import PhotoMarket from "./pages/PhotoMarket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<PhotoMarket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;