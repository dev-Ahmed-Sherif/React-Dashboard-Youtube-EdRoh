import { combineReducers,configureStore } from "@reduxjs/toolkit";

/** call reducers */
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer
  });
  
  /** create store with reducer */
  export default configureStore({ reducer: rootReducer });

