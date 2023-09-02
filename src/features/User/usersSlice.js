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
  usersData: [],
  loggedInUserData: {},
  userLoggedIn: false,
  isLoading: false,
  errMsg: ''
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    setLoggedUserData: (state, action) => {
      state.loggedInUserData = action.payload
    },
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload
    },
    clearLoggedUserData: (state, action) => {
      state.loggedInUserData = action.payload
    }
  },
  extraReducers: {
    [fetchUsersData.pending]: (state) => {
      state.isLoading = true;

    },
    [fetchUsersData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.usersData = action.payload || [];
    },
    [fetchUsersData.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch Failed";
    }
  }
});

export const { setLoggedUserData, clearLoggedUserData, setUsersData, setUserLoggedIn } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;


export const selectUserByUserName = (userName) => (state) => {
  return state.users.usersData.filter(
    (user) => user.username === userName
  );
}



export const selectCurrentUser = (state) => {
  return state.users.loggedInUserData
}

export const validateUserLoginInfo = ({ userName, passWord }) => (state) => {
  const result = state.users.usersData.find((user) => user.username === userName)
  console.log(result)
  if (result == []) {
    return false
  }
  return true
}

export const allExistingUsers = (state) => {
  return state.users.usersData
}