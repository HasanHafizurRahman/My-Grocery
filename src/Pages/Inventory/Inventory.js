import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Inventory.css';

const Inventory = ({inventory}) => {
    const {name,id, img, description, quantity, price, supplierName} = inventory;
    const navigate = useNavigate();
    const navigateInventory = id =>{
            navigate(`/inventory/${id}`);
    }
    return (
        <div>
            <img src={img} alt=''/>
            <div className="inventory">
            <h2>{name} </h2>
            <p>Price:{price} </p>
            <p><small>{description}</small></p>
            <h6>Supplier:{supplierName} </h6>
            <p>Quantity:{quantity} </p>
            <button style={{borderRadius: '20px'}} onClick={()=>navigateInventory(id)} className='btn btn-secondary px-3'>Stock Update</button>
            </div>
        </div>
    );
};

export default Inventory;