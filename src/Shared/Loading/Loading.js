import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loading = () => {
    return (
        <div style={{height: '300px'}} className='w-100 d-flex align-items-center justify-content-center '>
            <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;