import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import shipmentSlice from "./slices/shipmentSlice";

export const store = configureStore({
  reducer: {
    language: languageSlice,
    shipment: shipmentSlice,
  },
});
