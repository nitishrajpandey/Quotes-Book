import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTagsCollectionApi } from "../Api";



export const fetchTagsCollection = createAsyncThunk("fetchTagsCollection", async () => {
    const data = await fetchTagsCollectionApi()
    return data
})






export const tagsSlice = createSlice({
    name: "tags",
    initialState: {
        tagsCollection: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagsCollection.fulfilled, (state, action) => {
                state.tagsCollection = action.payload
            })
    }

})

export default tagsSlice.reducer