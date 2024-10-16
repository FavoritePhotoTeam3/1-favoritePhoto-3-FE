import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import "./styles/reset.css";

// import Test from "./temp/test_page/Test";
import PhotoMarket from "./pages/photo_market";
import MyGallery from "./pages/my_gallery";
import MyMarket from "./pages/my_market";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<MyGallery />} />
        <Route path="/1" element={<PhotoMarket />} />
        <Route path="/2" element={<MyMarket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;