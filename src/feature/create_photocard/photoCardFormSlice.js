import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  grade: "",
  genre: "",
  price: "",
  totalCount: "",
  description: "",
  image: null,
};

const photoCardFormSlice = createSlice({
  name: "photoCardForm",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGrade: (state, action) => {
      state.grade = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    resetForm: (state) => {
      Object.assign(state, initialState); // 폼 초기화
    },
  },
});

export const {
  setName,
  setGrade,
  setGenre,
  setPrice,
  setTotalCount,
  setDescription,
  setImage,
  resetForm,
} = photoCardFormSlice.actions;

export default photoCardFormSlice;
