import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTagsCardsApi } from "../Api";



export const fetchTagsCards = createAsyncThunk("fetchTagsCards", async ({ inputdata, pageno }) => {

    console.log(inputdata);
    console.log(pageno);
    const data = await fetchTagsCardsApi(inputdata, pageno)
    console.log(data);
    return data
})






export const tagsCardSlice = createSlice({
    name: "tagsCard",
    initialState: {
        tagsCardStore: [],
        cardname: null,
        page: null,
        totalPage: null,
        lodingStaus: false
    },
    reducers: {
        addcardName: (state, action) => {
            state.cardname = action.payload
            state.tagsCardStore = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTagsCards.fulfilled, (state, action) => {
                console.log("this is action : ", action);
                state.lodingStaus = false,
                    state.page = action.payload.page,
                    state.totalPage = action.payload.totalPages
                const newResults = action.payload.results.filter(newTag => {
                    return !state.tagsCardStore.some(existingTag => existingTag._id === newTag._id)
                })
                state.tagsCardStore = [...state.tagsCardStore, ...newResults]
            })
            .addCase(fetchTagsCards.pending, (state, action) => {
                state.lodingStaus = true
            })
    }
})

export const { addcardName } = tagsCardSlice.actions


export default tagsCardSlice.reducer