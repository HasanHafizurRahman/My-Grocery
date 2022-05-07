import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const {inventoryId} = useParams();
    const [ inventory, setInventory ] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${inventoryId}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setInventory(data));
    }, [])
    return (
        <div>
            <h2>welcome to {inventory.name}.</h2>
            <Link to='/checkout'>
                <button className='btn btn-secondary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default InventoryDetail;