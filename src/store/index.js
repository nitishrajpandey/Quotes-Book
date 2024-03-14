import { configureStore } from "@reduxjs/toolkit";
import randomQuotesReducer from "./randomQuotesSlice";
import tagsReducer from "./tagsSlice";
import tagsCardReducer from "./tagsCardSlice";
export const myStore = configureStore({
    reducer: {
        randomQuotes: randomQuotesReducer,
        tags: tagsReducer,
        tagsCard: tagsCardReducer

    }
})

export default myStore