import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTagsCollectionApi } from "../Api";



export const fetchTagsCollection = createAsyncThunk("fetchTagsCollection", async () => {
    const data = await fetchTagsCollectionApi()
    return data
})






export const tagsSlice = createSlice({
    name: "tags",
    initialState: {
        tagsCollection: [],
        lodingStatus: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagsCollection.fulfilled, (state, action) => {
                state.tagsCollection = action.payload,
                    state.lodingStatus = false
            }).addCase(fetchTagsCollection.pending, (state, action) => {
                state.tagsCollection = action.payload,
                    state.lodingStatus = true
            })
    }

})

export default tagsSlice.reducer