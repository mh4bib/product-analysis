import React from 'react';
import HomePhoto from '../../product.jpg';
import './Home.css';
const Home = () => {
    return (
        <div className='home'>
            <div className='home-desc'>
                <h1>Product Analysis</h1>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis impedit temporibus illum dignissimos iste numquam architecto quis deserunt cupiditate nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ratione recusandae, aliquam voluptates enim maiores asperiores, itaque unde laborum accusantium dolore facere laudantium et provident nihil voluptatum, reprehenderit vitae!</p>
            </div>
            <div className='img'>
                <img src={HomePhoto} alt="" />
            </div>
        </div>
    );
};

export default Home;