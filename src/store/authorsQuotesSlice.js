import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAuthorQuotesApi } from "../Api";


export const fetchAuthorsQuotes = createAsyncThunk(
    "fetchAuthorsQuotes",
    async ({ authorName, pageno }) => { // Accept authorName and pageno
        const data = await fetchAuthorQuotesApi(authorName, pageno); // Remove the assignment of pageno
        console.log("this is data ", data);
        return data;
    }
);






export const authorsQuotesSlice = createSlice({
    name: "authorQuotes",
    initialState: {
        authorsQuotesStore: [],
        page: null,
        authorName: null,
        totalPage: null,
        loding: false
    },
    reducers: {
        addpage: (state, action) => {
            console.log(action);
            state.page = action.payload
        },
        authorName: (state, action) => {
            state.authorName = action.payload
            state.authorsQuotesStore = []
        },
        totalPageNo: (state, action) => {
            console.log(action);
            state.totalPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthorsQuotes.fulfilled, (state, action) => {
                console.log("this is fuilfiled", action);
                state.loding = false
                const newResults = action.payload.results.filter(newAuthor => {
                    return !state.authorsQuotesStore.some(existingAuthor => existingAuthor._id === newAuthor._id);
                });
                state.authorsQuotesStore = [...state.authorsQuotesStore, ...newResults]
                state.page = action.payload.page;
                state.totalPage = action.payload.totalPages;

            })
            .addCase(fetchAuthorsQuotes.pending, (state, action) => {
                state.loding = true
            })
    }
})

export const { addpage, authorName, totalPageNo } = authorsQuotesSlice.actions

export default authorsQuotesSlice.reducer