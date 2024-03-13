import { configureStore } from "@reduxjs/toolkit";
import randomQuotesReducer from "./randomQuotesSlice";
import tagsReducer from "./tagsSlice";
export const myStore = configureStore({
    reducer: {
        randomQuotes: randomQuotesReducer,
        tags: tagsReducer
    }
})

export default myStore