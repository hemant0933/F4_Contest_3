import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk("Product", async () => {
  const response = await fetch("https://dummyjson.com/products");
  try{
    const result = await response.json();
    return result;
  } catch(error) {
    return isRejectedWithValue("Opps Found an error: " + error.message);
  }
});

export const ProductData = createSlice({
  name: "Product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  // extraReducers: {
  //   [getAllProducts.pending]: (state) => {
  //     state.loading = true;
  //   },
  //   [getAllProducts.fulfilled]: (state, action) => {
  //       console.log(action.payload);
  //     state.loading = false;
  //     state.products = action.payload;
  //   },
  //   [getAllProducts.rejected]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductData.reducer;