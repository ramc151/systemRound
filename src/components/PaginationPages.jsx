import React from 'react'
import { Pagination } from 'react-bootstrap'
import { setPage } from '../reducer/postSlice';
import { useDispatch } from 'react-redux';

const PaginationPages = (props) => {
    const dispatch = useDispatch();
    const { page, totalPages } = props;

    const handlePage = (value) => {
        dispatch(setPage(value - 1));
    }

    return (
        <Pagination>
            <Pagination.Prev onClick={() => handlePage(page)} disabled={page === 0} />
            {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item key={index} active={index === page} onClick={() => handlePage(index + 1)}>
                    {index + 1}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={() => handlePage(page + 2)} disabled={page + 1 >= totalPages} />
        </Pagination>
    )
}

export default PaginationPages