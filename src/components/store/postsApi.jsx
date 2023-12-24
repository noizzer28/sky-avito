import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAccessToken, setInitialState, setRefreshToken } from "./userSlice";
import { clearConfigCache } from "prettier";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.refreshToken;
      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  console.debug("Результат первого запроса", { result });
  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    localStorage.clear();
    api.dispatch(setInitialState());
    window.location.href = "/login";
  };

  const auth = api.getState().user;
  console.debug("Данные пользователя в сторе", auth);
  if (!auth.email || !auth.password) {
    console.log("force logout");
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/auth/login",
      method: "POST",
      body: {
        email: auth.email,
        password: auth.password,
      },
    },
    api,
    extraOptions
  );

  console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult?.data) {
    console.log("REFRESHRESULT UNSUCCESSFUL");
    return forceLogout();
  } else {
    api.dispatch(setAccessToken(refreshResult.data.access_token));
    api.dispatch(setRefreshToken(refreshResult.data.refresh_token));

    const retryResult = await baseQuery(args, api, extraOptions);
    console.log("retryresult", retryResult);
    if (retryResult?.error?.status === 401) {
      console.log("again force logout");
      // return forceLogout();
    }

    // console.debug(`Повторный запрос завершился успешно `);

    return retryResult;
  }
};

const USER_TAG = "USER";
export const PostsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    changeUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: () => [USER_TAG],
    }),
    getPosts: build.query({
      query: () => ({
        url: "/ads",
        method: "GET",
      }),
    }),
    addPost: build.mutation({
      query: (body) => ({
        method: "POST",
        url: `ads`,
        body,
      }),
    }),

    deletePost: build.mutation({
      query: (body) => ({
        url: `ads/me`,
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostQuery,
  useDeletePostQuery,
  useGetUserQuery,
  useChangeUserMutation,
} = PostsApi;
