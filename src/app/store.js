import { configureStore } from "@reduxjs/toolkit";
import  ProductData from "../features/productSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
    reducer: {
        app: ProductData,
        cart: cartReducer,
    },
});

