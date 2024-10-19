import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../reducer/postSlice';
import PaginationPages from './PaginationPages';
import Cardlist from './Cardlist';

const Main = () => {
    const dispatch = useDispatch();
    const { posts, loading, page } = useSelector(state => state.posts);
    const postPerPage = 6;

    useEffect(() => {
        const time = setTimeout(() => {
            dispatch(fetchPosts())
        }, 5000);
        return () => clearTimeout(time)
    }, [dispatch])

    const startIndex = page * postPerPage;
    const selectedPosts = posts.slice(startIndex, startIndex + postPerPage);
    const totalPages = Math.ceil(posts.length / postPerPage);

    return loading ? <h3>Loading...</h3> : (
        <div className="container">
            <div className="row">
                {selectedPosts.map((post) => (
                    <Cardlist title={post.title} description={post.body} key={post.id} postId={post.id} />
                ))}
            </div>
            <PaginationPages page={page} totalPages={totalPages} />
        </div>
    )
}

export default Main