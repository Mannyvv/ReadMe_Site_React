import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { searchReducer } from '../features/Search/searchSlice';
import { usersReducer } from '../features/User/usersSlice';
import { newsletterReducer } from '../features/NewsLetter/newsletterSlice';
import { feedbackFormReducer } from '../features/Feedback/feedbackSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    counter: counterReducer,
    users: usersReducer,
    newsletter: newsletterReducer,
    feedbackform: feedbackFormReducer
  },
});
