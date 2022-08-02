import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore(
  {
    reducer: {
      user: userReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
