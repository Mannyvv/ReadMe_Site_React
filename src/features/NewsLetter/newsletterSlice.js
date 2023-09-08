

import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const postNewsletterSignUp = createAsyncThunk(
    'newsletter/postnewsletterIfno',
    async (newsletterSignUpInfo) => {

        const response = await fetch(`http://localhost:3010/newsletter`,
            {
                method: 'POST',
                headers: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'},
                body: JSON.stringify(newsletterSignUpInfo)
            });
        if (!response.ok) {
            return Promise.reject('Unable to post, status: ' + response.status);
        }
    }
);


const initialState = {
    newsletterInfo:{},
    isLoading: true,
    errMsg:''
}

const newsletterSlice = createSlice({
    name: "newsletter",
    initialState,
    reducers: {},
    extraReducers: {
      [postNewsletterSignUp.pending]: (state) => {
        state.isLoading = true;
        
      },
      [postNewsletterSignUp.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.newsletterInfo = action.payload || [];
      },
      [postNewsletterSignUp.rejected]: (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error? action.error.message : "Fetch Failed";
      }
    }
  });

  export const {} = newsletterSlice.actions;
  export const newsletterReducer = newsletterSlice.reducer;