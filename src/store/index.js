import { configureStore } from "@reduxjs/toolkit";
import randomQuotesReducer from "./randomQuotesSlice";
import tagsReducer from "./tagsSlice";
import tagsCardReducer from "./tagsCardSlice";
import authorReducer from "./authorSlice";
import authorsQuotesReducer from "./authorsQuotesSlice";
export const myStore = configureStore({
    reducer: {
        randomQuotes: randomQuotesReducer,
        tags: tagsReducer,
        tagsCard: tagsCardReducer,
        authors: authorReducer,
        authorQuotes: authorsQuotesReducer

    }
})

export default myStore