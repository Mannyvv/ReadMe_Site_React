import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    'search/fetchBooks',
    async (searchTerm) => {
    
        const response = await fetch(`http://localhost:3005/search?q=${searchTerm}`);
        if (!response.ok) {
          return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    
      }
    
  );

//states to store in redux
const initialState = {
    searchTerm: '',
    searchData: null,
    isLoading: true,
    errMsg:''
}

//Search slice with reducers to set search term and data, 
//with api call status(pending,fulfilled,rejected)
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchData: (state, action) => {
        state.searchData = action.payload;
    } 
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
      
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.searchData = action.payload.items || [];
    },
    [fetchBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error? action.error.message : "Fetch Failed";
    }
  }
});

//Export the actions for access in SearchPage.js
export const { setSearchTerm, setSearchData } = searchSlice.actions;

//Reducer to register in Redux store
export const searchReducer = searchSlice.reducer;

