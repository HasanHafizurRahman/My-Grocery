import React from 'react';
import './Review.css'

const Review = () => {
    return (
        <div>
            <h2 className='text-secondary text-center'>What our customers say!</h2>
            <div className="review">
                <div className='first-review'>
                    <img style={{height: '30px', width: '30px'}} src="https://tse3.mm.bing.net/th?id=OIP.X_PFqnYqibEHpoVxv0P0ZgHaHa&pid=Api&P=0&w=164&h=164" alt="" />
                    <p>Jordan Hendarson</p>
                   <p> I'm happy with My Grocery. I buy my every stuffs from here. They provide a humble customer service. They provide the best products to my family ,infact I consider 'My Grocery' as my family. I wish them best.</p>
                </div>
                <div className='second-review'>
                    <img style={{height: '30px', width: '30px'}} src="https://tse2.mm.bing.net/th?id=OIP.hw-Sk04AflX4Te0r8K4R9QAAAA&pid=Api&P=0&w=179&h=179" alt="" />
                    <p>Abdullah Hossain</p>
                   <p> I'm so pleased with 'My Grocery' and their every service. I buy my every stuffs for me and my family from here. They provide a humble customer service. They provide the best products to my family ,infact I consider 'My Grocery' as my family.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;