import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useInventoryDetail from '../../hooks/useInventoryDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const {inventoryId} = useParams();
    const [inventory] = useInventoryDetail(inventoryId);
    const [user] = useAuthState(auth);
    
    const handleOrder = event =>{
        event.preventDefault();
        const order ={
            email: user.email,
            inventory: inventory.name,
            inventoryId: inventoryId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/', order)
        .then(response =>{
           const {data} =response; 
            if(data.insertedId){
                toast('Your Order is Booked');
                event.target.reset();
            }
        })
    }
    
    return (
        <div className='w-50 mx-auto'>
            <h2>Please order this {inventory.name}</h2>
            <form onSubmit={handleOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name='email' placeholder='email' required />
                <br />
                <input className='w-100 mb-2' type="text" value={inventory.name} name='inventory' placeholder='inventory' required />
                <br />
                <input className='w-100 mb-2' type="text"  value={user.address} name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-2' type="text" value={user.phone} name='number' placeholder='number' required />
                <br />
                <input className='btn btn-secondary mb-2' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;