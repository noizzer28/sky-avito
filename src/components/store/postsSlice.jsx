import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const GetPostsApi = createAsyncThunk('getPosts', async function () {
  try {
    const response = await fetch('http://127.0.0.1:8090/ads', {
      method: 'GET',
    })

    if (!response.ok) {
      const data = await response.json()
      console.log(response, data)
      throw new Error(data.message)
    } else {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
})

const PostSlice = createSlice({
  name: 'ads',
  initialState: {
    posts: [],
    error: null,
    loading: false,
    filteredPosts: [],
  },
  reducers: {
    setAllPosts(state, action) {
      state.posts = action.payload
      state.filteredPosts = action.payload
    },
    setFilteredPosts(state, action) {
      let filter = state.posts
      const search = action.payload.toLowerCase()
      const searched = filter.filter((post) => {
        if (post.title.toLowerCase().includes(search)) {
          return post
        }
      })
      console.log(searched)
      console.log(filter)
      state.filteredPosts = searched
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetPostsApi.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(GetPostsApi.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
        state.error = null
      })
      .addCase(GetPostsApi.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'An error occurred.'
      })
  },
})

export const { setAllPosts, setFilteredPosts } = PostSlice.actions

export default PostSlice.reducer
