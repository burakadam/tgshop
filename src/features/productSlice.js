import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    filter: "Popüler Ürünler",
    price: "0,00",
    productList: [],
    selectedCards: [],
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload.list;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    changePrice: (state, action) => {
      let totalPrice = parseFloat(state.price.replaceAll(",", "."));
      let result = totalPrice + action.payload.price;
      state.price = result.toFixed(2).replaceAll(".", ",");
    },
    toggleSelectedCard: (state, action) => {
      console.log(state.selectedCards);
      if (action.payload.isAdd) {
        state.selectedCards = [...state.selectedCards, action.payload.id];
      } else {
        const index = state.selectedCards.findIndex(
          (item) => item === action.payload.id
        );
        state.selectedCards.splice(index, 1);
      }
    },
  },
});

export const {
  setProductList,
  changeFilter,
  changePrice,
  toggleSelectedCard,
} = productSlice.actions;
export default productSlice.reducer;
