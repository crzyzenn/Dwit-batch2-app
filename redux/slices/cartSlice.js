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
    // We should get "id" in action.payload
    increaseQuantity: (state, action) => {
      // 1. Find the product with that id in store...
      // 2. Modify the quantity -> +1
      // 3. Update total price -> newQuantity * pricePerItem

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
      // 1. Find the product with that id in store...
      // 2. Modify the quantity -> -1
      // 3. Update total price -> newQuantity * pricePerItem
      const productIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const newQuantity = state.items[productIndex].quantity - 1;
      if (newQuantity >= 1) {
        state.items[productIndex] = {
          ...state.items[productIndex],
          quantity: newQuantity,
          totalPrice: newQuantity * state.items[productIndex].pricePerItem,
        };
      }
    },
    // Action.payload => id
    deleteItem: (state, action) => {
      // const item = state.items.filter((item) => item.id !== action.payload);
      // console.log(item);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
