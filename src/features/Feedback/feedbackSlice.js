

import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const postFeedbackForm = createAsyncThunk(
    'newsletter/postnewsletterIfno',
    async (feedbackFormInfo) => {

        const response = await fetch(`http://localhost:3010/feedback`,
            {
                method: 'POST',
                headers: { 
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'},
                body: JSON.stringify(feedbackFormInfo)
            });
        if (!response.ok) {
            return Promise.reject('Unable to post, status: ' + response.status);
        }
    }
);


const initialState = {
    feedbackFormInfo:{},
    isLoading: true,
    errMsg:''
}

const feedbackFormSlice = createSlice({
    name: "feedbackform",
    initialState,
    reducers: {},
    extraReducers: {
      [postFeedbackForm.pending]: (state) => {
        state.isLoading = true;
        
      },
      [postFeedbackForm.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.feedbackFormInfo = action.payload || [];
      },
      [postFeedbackForm.rejected]: (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error? action.error.message : "Post Failed";
      }
    }
  });

  export const {} = feedbackFormSlice.actions;
  export const feedbackFormReducer = feedbackFormSlice.reducer;