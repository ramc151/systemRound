import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './reducer/postSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export default store;