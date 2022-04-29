import React from 'react';
import Inventories from '../Inventories/Inventories';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
           <Inventories></Inventories>
        </div>
    );
};

export default Home;