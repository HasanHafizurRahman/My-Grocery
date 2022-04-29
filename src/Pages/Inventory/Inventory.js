import React from 'react';
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {name, img, description, quantity, price, supplierName} = inventory;
    return (
        <div>
            <img src={img} alt=''/>
            <div className="inventory">
            <h2>{name} </h2>
            <p>Price:{price} </p>
            <p><small>{description}</small></p>
            <h6>Supplier:{supplierName} </h6>
            <p>Quantity:{quantity} </p>
            <button>Stock Update</button>
            </div>
        </div>
    );
};

export default Inventory;