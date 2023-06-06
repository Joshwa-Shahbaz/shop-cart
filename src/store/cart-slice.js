import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQunatity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const NewItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === NewItem.id);

      state.totalQunatity++;
      if (!exisitingItem) {
        state.items.push({
          id: NewItem.id,
          price: NewItem.price,
          quantity: 1,
          totalPrice: NewItem.price,
          name: NewItem.title,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + NewItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalQunatity--;
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
