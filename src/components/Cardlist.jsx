import React from 'react'
import { useDispatch } from 'react-redux';
import { removePost } from '../reducer/postSlice';

const Cardlist = (props) => {
    const dispatch = useDispatch();
    const { title, description, postId } = props;

    const handleRemovePost = (id) => {
        dispatch(removePost(id));
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <h5 className="card-title">{title.slice(0, 20)}</h5>
                        <button type='button' className='btn btn-light' onClick={() => handleRemovePost(postId)} style={{ color: "red" }}>x</button>
                    </div>
                    <p className="card-text">{description.slice(0, 60)}</p>
                </div>
                <img src="/images/postImage.jpg" alt="..." />
            </div>
        </div>
    )
}

export default Cardlist