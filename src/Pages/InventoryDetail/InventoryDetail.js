import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';

const InventoryDetail = () => {
    const {inventoryId} = useParams();
    const [inventory] = useInventoryDetail(inventoryId)
    return (
        <div>
            <h2>welcome to {inventory.name}.</h2>
            <Link to={`/checkout/${inventoryId}`}>
                <button className='btn btn-secondary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default InventoryDetail;