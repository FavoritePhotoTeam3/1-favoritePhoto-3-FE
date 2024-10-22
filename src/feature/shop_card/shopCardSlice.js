import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCards: (state, action) => {
      const newCards = action.payload.filter(
        (newCard) =>
          !state.cards.some((existingCard) => existingCard.id === newCard.id)
      );
      console.log("기존 카드:", state.cards);
      console.log("새 카드:", newCards);
      
      state.cards = [...state.cards, ...newCards];
    },
  },
});

export const { setCards, addNextPageCards, setLoading, setError } =
  shopSlice.actions;
