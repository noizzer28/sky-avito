import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import PostSlice from "./postsSlice";
import { PostsApi } from "./postsApi";

export const store = configureStore({
  reducer: {
    user: userSlice,
    post: PostSlice,
    [PostsApi.reducerPath]: PostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostsApi.middleware),
});
