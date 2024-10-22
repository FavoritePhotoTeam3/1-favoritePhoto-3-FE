import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [], // 불러온 제품 데이터
  loading: false, // 로딩 상태
  error: null, // 에러 상태
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = [...state.cards, ...action.payload];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCards, setLoading, setError } = shopSlice.actions;