import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalType: null, // purchase, exchange, cancel
  purchaseInfo: {},
  exchangeInfo: {},
  selectedExchangeInfo: {}, // 교환 취소 정보
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
    openCancelModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "cancel";
      state.selectedExchangeInfo = { ...action.payload };
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.purchaseInfo = {};
      state.exchangeInfo = {};
      state.selectedExchangeInfo = {};
    },
  },
});

export const {
  openPurchaseModal,
  openExchangeModal,
  openCancelModal,
  closeModal,
} = buyerModalSlice.actions;
export default buyerModalSlice;
