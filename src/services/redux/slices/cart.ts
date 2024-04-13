import { Movie } from './../../../types/ProductTypes';
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
    addProduct: (state, action: PayloadAction<Movie>) => {
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
    },
    removeProduct:(state, action: PayloadAction<Product>) => {
      if(state.productsInCart.find((item) => item.id == action.payload.id)){
        return {
          productsInCart: [...state.productsInCart].filter((item) => item.id !== action.payload.id)
        }
      }
    },
    removeQtProduct: (state, action: PayloadAction<Product>) => {
      if(state.productsInCart.find((item) => item.id == action.payload.id)){
        state.productsInCart.map((item)=> {
          if(item.id == action.payload.id) {
              item.qt = item.qt - 1
          }
          return item
      })
      }
    },
    purchaseProducts: (state, action: PayloadAction<void>) => {
        return {
          productsInCart: []
        }
      }
    },
});

export const { addProduct, removeProduct, removeQtProduct, purchaseProducts } = cart.actions;
