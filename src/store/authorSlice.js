// authorSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuthorCollectionApi } from "../Api";

export const fetchAuthorCollection = createAsyncThunk(
    "fetchAuthorCollection",
    async (pageNo) => {
        const data = await fetchAuthorCollectionApi(pageNo);
        return data;
    }
);

export const authorSlice = createSlice({
    name: "authors",
    initialState: {
        authorCollection: [],
        pageNo: null,
        totalPage: null,
        loading: false,
    },
    reducers: {
        addPageNo: (state, action) => {
            state.pageNo = action.payload;
        },
        addTotalPageNo: (state, action) => {
            state.totalPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthorCollection.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAuthorCollection.fulfilled, (state, action) => {

                state.loading = false;
                const newResults = action.payload.results.filter(newAuthor => {
                    return !state.authorCollection.some(existingAuthor => existingAuthor._id === newAuthor._id);
                });
                state.authorCollection = [...state.authorCollection, ...newResults];
                state.pageNo = action.payload.page;
                state.totalPage = action.payload.totalPages;
            })
            .addCase(fetchAuthorCollection.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { addPageNo, addTotalPageNo } = authorSlice.actions;

export default authorSlice.reducer;
