import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAccessToken, setInitialState, setRefreshToken } from './userSlice'

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.refreshToken
      console.debug('Использую токен из стора', { token })

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  })

  const result = await baseQuery(args, api, extraOptions)

  console.debug('Результат первого запроса', { result })
  if (result?.error?.status !== 401) {
    return result
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!')
    localStorage.clear()
    api.dispatch(setInitialState())
    window.location.href = '/login'
  }

  const auth = api.getState().user
  console.debug('Данные пользователя в сторе', auth)
  if (!auth.email || !auth.password) {
    console.log('force logout')
    return forceLogout()
  }

  const refreshResult = await baseQuery(
    {
      url: '/auth/login',
      method: 'POST',
      body: {
        email: auth.email,
        password: auth.password,
      },
    },
    api,
    extraOptions,
  )

  console.debug('Результат запроса на обновление токена', { refreshResult })

  if (!refreshResult?.data) {
    console.log('REFRESHRESULT UNSUCCESSFUL')
    return forceLogout()
  } else {
    api.dispatch(setAccessToken(refreshResult.data.access_token))
    api.dispatch(setRefreshToken(refreshResult.data.refresh_token))

    const retryResult = await baseQuery(args, api, extraOptions)
    console.log('retryresult', retryResult)
    if (retryResult?.error?.status === 401) {
      console.log('again force logout')
      // return forceLogout();
    }

    // console.debug(`Повторный запрос завершился успешно `);

    return retryResult
  }
}

const USER_TAG = 'USER'
const REVIEW_TAG = 'REVIEW'
const POSTS_TAG = 'POSTS'
const POST_TAG = 'POST'
export const PostsApi = createApi({
  reducerPath: 'adsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    }),
    getUserPost: build.query({
      query: () => ({
        url: '/ads/me',
        method: 'GET',
      }),
      providesTags: () => [POST_TAG],
    }),
    changeUser: build.mutation({
      query: (data) => ({
        url: '/user',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: () => [USER_TAG],
    }),
    getPost: build.query({
      query: (body) => ({
        url: `/ads/${body}`,
        method: 'GET',
      }),
      providesTags: () => [POST_TAG],
    }),
    getFeedbacks: build.query({
      query: (body) => ({
        url: `/ads/${body}/comments`,
        method: 'GET',
      }),
      providesTags: () => [REVIEW_TAG],
    }),
    addFeedback: build.mutation({
      query: ({ postId, text }) => ({
        url: `/ads/${postId}/comments`,
        method: 'POST',
        body: text,
      }),
      invalidatesTags: () => [REVIEW_TAG],
    }),
    getAllPosts: build.query({
      query: () => 'ads',
      providesTags: () => [POSTS_TAG],
    }),
    getAllUsers: build.query({
      query: () => 'user/all',
    }),
    addNewPost: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: `adstext`,
        body,
      }),
      invalidatesTags: () => [POSTS_TAG],
    }),
    deletePost: build.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `ads/${id}`,
      }),
      invalidatesTags: () => [POSTS_TAG],
    }),
    addPostPicture: build.mutation({
      query: ({ postId, image }) => {
        const fD = new FormData()
        fD.append('file', image)
        return {
          url: `ads/${postId}/image`,
          method: 'POST',
          body: fD,
        }
      },
      invalidatesTags: () => [POSTS_TAG],
    }),
    deletePostPicture: build.mutation({
      query: ({ postId, file_url }) => {
        console.log(file_url)
        return {
          method: 'DELETE',
          url: `/ads/${postId}/image?file_url=${file_url}`,
        }
      },
      invalidatesTags: () => [POST_TAG],
    }),
    editPost: build.mutation({
      query: ({ postId, body }) => {
        return {
          method: 'PATCH',
          url: `/ads/${postId}`,
          body,
        }
      },
      invalidatesTags: () => [POST_TAG],
    }),
    addUserAvatar: build.mutation({
      query: ({ image }) => {
        const fD = new FormData()
        fD.append('file', image)
        console.log('img before send', image)
        return {
          url: `user/avatar`,
          method: 'POST',
          body: fD,
        }
      },
      invalidatesTags: () => [USER_TAG],
    }),
  }),
})

export const {
  useGetPostQuery,
  useAddFeedbackMutation,
  useGetFeedbacksQuery,
  useGetUserPostQuery,
  useGetUserQuery,
  useChangeUserMutation,
  useAddNewPostMutation,
  useAddPostPictureMutation,
  useGetAllPostsQuery,
  useAddUserAvatarMutation,
  useGetAllUsersQuery,
  useDeletePostPictureMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = PostsApi
