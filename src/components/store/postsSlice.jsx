import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "ads",
  initialState: {
    posts: [],
  },
  reducers: {
    setAllPosts(state, action) {
      state.ads = action.payload;
    },
  },
});

export const { setAllAds } = PostSlice.actions;

export default PostSlice.reducer;
