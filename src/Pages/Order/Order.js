import React from 'react';
import { signOut } from 'firebase/auth';
import axios from 'axios';
import axiosPrivate from '../../api/axiosPrivate'
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        const getOrders = async() =>{
            const email = user?.email;
            const url = `https://shielded-hollows-28190.herokuapp.com/order?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    },[user])
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
            {
                orders.map(order =><div key={order._id}>
                    <p>{order?.email} : {order.inventory}</p>
                </div>)
            }
        </div>
    );
};

export default Order;