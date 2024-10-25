import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  modalType: null, // modify, cancelSelling, reject, approve
  sellInfo: {},
  selectedExchangeInfo: {},
};

const sellerModalSlice = createSlice({
  name: "sellerModal",
  initialState,
  reducers: {
    openModifyModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "modify";
      state.sellInfo = { ...action.payload };
    },
    openCancelSellingModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "cancelSelling";
      state.sellInfo = { ...action.payload };
    },
    openRejectModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "reject";
      state.selectedExchangeInfo = { ...action.payload };
    },
    openApproveModal: (state, action) => {
      state.isModalOpen = true;
      state.modalType = "approve";
      state.selectedExchangeInfo = { ...action.payload };
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalType = null;
      state.sellInfo = {};
      state.selectedExchangeInfo = {};
    },
  },
});

export const {
  openModifyModal,
  openCancelSellingModal,
  openRejectModal,
  openApproveModal,
  closeModal,
} = sellerModalSlice.actions;
export default sellerModalSlice;
