import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosDefault from "../../utilities/api";

const initialState = {
  orderDetails: {},
  loading: false,
};

export const handleFetchData = createAsyncThunk(
  "shipment/handleFetchData",
  async (trackingNumber, { rejectWithValue }) => {
    return await axiosDefault
      .get(`${trackingNumber}`)
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleFetchData.fulfilled, (state, action) => {
        state.orderDetails = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

// export const {} = shipmentSlice.actions;

export default shipmentSlice.reducer;
