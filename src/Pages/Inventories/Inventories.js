import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css'

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://shielded-hollows-28190.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div id='inventories' >
            <h1 className="grocery-title">Our Grocery Inventories</h1>
            <div className="inventory-container">
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;