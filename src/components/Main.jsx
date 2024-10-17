import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, removePost, setPage } from '../reducer/postSlice';
import PaginationPages from './PaginationPages';

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

    const handleRemovePost = (id) => {
        dispatch(removePost(id));
    }

    const startIndex = page * postPerPage;
    const selectedPosts = posts.slice(startIndex, startIndex + postPerPage);
    const totalPages = Math.ceil(posts.length / postPerPage);

    return (
        <div className="container">
            {loading && <h3>Loading...</h3>}
            <div className="row">
                {selectedPosts.map((post) => (
                    <div className="col-md-4 mb-3" key={post.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                    <h5 className="card-title">{post.title}</h5>
                                    <button type='button' className='btn btn-light' onClick={() => handleRemovePost(post.id)} style={{ color: "red" }}>x</button>
                                </div>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <img src="/images/postImage.jpg" alt="..." />
                        </div>
                    </div>
                ))}
            </div>
            <PaginationPages page={page} totalPages={totalPages} />
        </div>
    )
}

export default Main