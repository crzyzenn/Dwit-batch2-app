import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Check to see if the product already exists in the cart
      const checkIfProductExists = state.items.findIndex(
        (item) => item.name === action.payload.name
      ); // 0
      // If product exists, add the quantity
      if (checkIfProductExists !== -1) {
        const newQuantity = state.items[checkIfProductExists].quantity + 1;
        state.items[checkIfProductExists] = {
          ...state.items[checkIfProductExists],
          quantity: newQuantity,
          totalPrice:
            newQuantity * state.items[checkIfProductExists].pricePerItem,
        };
      } else {
        state.items = [action.payload, ...state.items];
      }
    },
    increaseQuantity: (state, action) => {
      // Check to see if the product already exists in the cart
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const newQuantity = state.items[productIndex].quantity + 1;

      state.items[productIndex] = {
        ...state.items[productIndex],
        quantity: newQuantity,
        totalPrice: newQuantity * state.items[productIndex].pricePerItem,
      };
    },
    decreaseQuantity: (state, action) => {
      // Check to see if the product already exists in the cart
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      const newQuantity = state.items[productIndex].quantity - 1;

      state.items[productIndex] = {
        ...state.items[productIndex],
        quantity: newQuantity,
        totalPrice: newQuantity * state.items[productIndex].pricePerItem,
      };
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;
