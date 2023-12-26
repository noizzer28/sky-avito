import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetPostsApi = createAsyncThunk("getPosts", async function () {
  try {
    const response = await fetch("http://127.0.0.1:8090/ads", {
      method: "GET",
    });

    if (!response.ok) {
      const data = await response.json();
      console.log(response, data);
      throw new Error(data.message);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
});

const PostSlice = createSlice({
  name: "ads",
  initialState: {
    posts: [],
    error: null,
    loading: false,
  },
  reducers: {
    setAllPosts(state, action) {
      state.ads = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetPostsApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetPostsApi.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = null;
      })
      .addCase(GetPostsApi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export const { setAllAds } = PostSlice.actions;

export default PostSlice.reducer;
