import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { searchReducer } from '../features/Search/searchSlice';
import { usersReducer } from '../features/User/usersSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    counter: counterReducer,
    users: usersReducer
  },
});
