import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    loading: true,
    page: 0
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
            state.loading = false;
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
})

export const fetchPosts = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPost(response.data))
}

export const { setPost, removePost, setPage } = postSlice.actions;
export default postSlice.reducer;