import { configureStore } from "@reduxjs/toolkit";
import CratesReducer from "../app/crate/crateSlice/crateSlice";
const store = configureStore({
  reducer: {
    crates: CratesReducer,
  },
});

export default store;
