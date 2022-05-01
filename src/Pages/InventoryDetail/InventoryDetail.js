import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
    return (
        <div>
            <h2>welcome to {inventoryId}.</h2>
            <Link to='/checkout'>
                <button className='btn btn-secondary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default InventoryDetail;