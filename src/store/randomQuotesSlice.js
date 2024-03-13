import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRandomQuotesApi } from "../Api";


export const fetchRandomQuotes = createAsyncThunk("fetchRandomQuotes", async () => {
    const data = await fetchRandomQuotesApi()
    return data
})





export const randomQuotesSlice = createSlice({
    name: "randomQuotes",
    initialState: {
        quotesData: [],
        lodingStatus: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomQuotes.fulfilled, (state, action) => {
                state.quotesData = action.payload,
                    state.lodingStatus = false
            })
            .addCase(fetchRandomQuotes.pending, (state, action) => {
                state.lodingStatus = true
            })
    }
})

export default randomQuotesSlice.reducer