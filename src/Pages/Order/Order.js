import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Order = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        const getOrders = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);
        }
        getOrders();

    },[user])
    return (
        <div>
            <h2>Your Orders: {orders.length}</h2>
        </div>
    );
};

export default Order;