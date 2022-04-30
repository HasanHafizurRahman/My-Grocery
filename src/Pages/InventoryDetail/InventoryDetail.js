import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams()
    return (
        <div>
            <h2>welcome to {inventoryId}.</h2>
        </div>
    );
};

export default InventoryDetail;