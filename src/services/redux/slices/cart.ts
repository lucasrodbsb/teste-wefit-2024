import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductInCart } from "../../../types/ProductTypes";

interface InitialState {
  productsInCart: ProductInCart[];
}

const initialState: InitialState = {
  productsInCart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      if(state.productsInCart.find((item)=> item.id == action.payload.id)) {
        state.productsInCart.map((item)=> {
            if(item.id == action.payload.id) {
                item.qt = item.qt + 1
            }
            return item
        })
      } else{
        return {
            productsInCart: [...state.productsInCart, {...action.payload, qt: 1}]
        }
      }
    }
  },
});

export const { addProduct } = cart.actions;
