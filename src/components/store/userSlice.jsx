import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const LoginApi = createAsyncThunk(
  "user/login",
  async function ({ login, password }) {
    try {
      const response = await fetch(`http://127.0.0.1:8090/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          email: `${login}`,
          password: `${password}`,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("RESPONsE", response);
      const data = await response.json();
      console.log("DATA", data);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    login: "",
    password: "",
    refreshToken: null,
    accessToken: null,
    status: null,
    error: null,
    loading: false,
  },
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
    },
    setLogin(state, action) {
      state.login = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload.access;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginApi.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = "pending";
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.loading = false;
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.error = null;
        state.status = "fulfilled";
      })
      .addCase(LoginApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
        state.status = "rejected";
      });
  },
});

export const {
  setPassword,
  setLogin,
  setAccessToken,
  setRefreshToken,
  setIsActiveToken,
  setStatus,
  setError,
} = userSlice.actions;

export default userSlice.reducer;
