import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Inventories from '../Inventories/Inventories';
import Review from '../Review/Review';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
           <Inventories></Inventories>
           <Review></Review>
           <h2 className='text-center text-secondary'>Our Location</h2>
          <div> 
           <GoogleMap></GoogleMap> </div>
        </div>
    );
};

export default Home;