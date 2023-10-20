import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import languageSlice from "./slices/languageSlice";
import shipmentSlice from "./slices/shipmentSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    language: languageSlice,
    shipment: shipmentSlice,
  },
});
