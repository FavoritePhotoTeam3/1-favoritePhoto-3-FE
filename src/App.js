import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./styles/reset.css";
import LoginPage from "./page/login";
import JoinPage from "./page/join";
import CompleteTradePage from "./page/completeTrade";
import SellerDetailPage from "./page/seller_detail";
import BuyerDetailPage from "./page/buyer_detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<span>언젠가 만나 네게 할 말이 많아.</span>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/completeTrade" element={<CompleteTradePage />} />
        <Route path="/seller-detail/:id" element={<SellerDetailPage />} />
        <Route path="/buyer-detail/:id" element={<BuyerDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
