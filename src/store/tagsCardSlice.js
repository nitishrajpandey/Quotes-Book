import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTagsCardsApi } from "../Api";



export const fetchTagsCards = createAsyncThunk("fetchTagsCards", async (inputdata) => {
    console.log(inputdata);
    const data = await fetchTagsCardsApi(inputdata)
    console.log(data);
    return data
})






export const tagsCardSlice = createSlice({
    name: "tagsCard",
    initialState: {
        tagsCardStore: [],
        cardname: null
    },
    reducers: {
        addcardName: (state, action) => {
            state.cardname = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagsCards.fulfilled, (state, action) => {
                state.tagsCardStore = action.payload
            })
    }
})

export const { addcardName } = tagsCardSlice.actions


export default tagsCardSlice.reducer