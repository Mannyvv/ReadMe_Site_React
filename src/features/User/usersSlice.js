import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersData = createAsyncThunk(
  'users/fetchUsersData',
  async () => {
    const response = await fetch(`http://localhost:3010/users/`);
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status: ' + response.status)
    }
    const data = await response.json();
    return data;
  }
);

const initialState = {
  usersData: {},
  loggedUserData: {},
  isLoading: false,
  errMsg: ''
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
        state.usersData= action.payload;
    },
    setLoggedUserData: (state, action) => {
        state.loggedUserData = action.payload
    }
  },
  extraReducers: {
    [fetchUsersData.pending]: (state) => {
      state.isLoading = true;
      
    },
    [fetchUsersData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.usersDataD = action.payload || [];
    },
    [fetchUsersData.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error? action.error.message : "Fetch Failed";
    }
  }
});

export const { setUsersData } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;


export const selectUserByUserName = (userName) =>  (state) => {
    return state.users.userData.filter(
        (user) => user.username === userName
    );
}