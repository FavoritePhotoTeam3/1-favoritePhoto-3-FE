import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalType: null, // purchase 또는 exchange
  purchaseInfo: {},
  exchangeInfo: {},
};

const buyerModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openPurchaseModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "purchase";
      state.purchaseInfo = { ...action.payload };
    },
    openExchangeModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "exchange";
      state.exchangeInfo = { ...action.payload };
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.purchaseInfo = {};
      state.exchangeInfo = {};
    },
  },
});

export const { openPurchaseModal, openExchangeModal, closeModal } =
  buyerModalSlice.actions;
export default buyerModalSlice;
