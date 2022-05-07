import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Inventories from '../Inventories/Inventories';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
           <Inventories></Inventories>
           <h2 className='text-center text-secondary'>Our Location</h2>
          <div> 
           <GoogleMap></GoogleMap> </div>
        </div>
    );
};

export default Home;