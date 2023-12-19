import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAccessToken, setRefreshToken } from "./userSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8090/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access_Token;
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
    // api.dispatch(setInitialState())
    localStorage.clear();
    api.dispatch(setRefreshToken(null));
    window.location.href = "/login";
  };

  const auth = api.getState().user;

  console.debug("Данные пользователя в сторе", auth);
  if (!auth.refresh_Token) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: "/auth/login",
      method: "POST",
      body: {
        email: "email",
        password: "password",
      },
    },
    api,
    extraOptions
  );

  // console.debug("Результат запроса на обновление токена", { refreshResult });

  if (!refreshResult?.data?.access) {
    return forceLogout();
  } else {
    api.dispatch(
      setAccessToken({ ...auth, access: refreshResult.data.access })
    );

    const retryResult = await baseQuery(args, api, extraOptions);
    if (retryResult?.error?.status === 401) {
      return forceLogout();
    }

    // console.debug(`Повторный запрос завершился успешно `);

    return retryResult;
  }
};

export const PostsApi = createApi({
  reducerPath: "adsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({
        url: "ads",
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

export const { useGetPosts, useAddPost, useDeletePost } = PostsApi;
