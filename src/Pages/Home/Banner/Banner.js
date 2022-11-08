import React from 'react';
import img1 from '../../../assests/slider/s1.jpeg';
import img2 from '../../../assests/slider/s2.jpeg';
import img3 from '../../../assests/slider/s4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt="" className="w-full h-2/3 carousel-img" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/4">
                    <h1 className='text-5xl font-bold text-white'>
                    Take A Tour <br />
                    Give You Time <br /> 
                    To Explore You <br />
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2 w-2/5">
                    <p className='text-xl text-white '>
                        Tour makes you happy and Gives you energy to step forward. 
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt="" className="w-full h-2/3" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/4">
                    <h1 className='text-5xl font-bold text-white'>
                    Take A Tour <br />
                    Give You Time <br /> 
                    To Explore You <br />
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2 w-2/5">
                    <p className='text-xl text-white '>
                        Tour makes you happy and Gives you energy to step forward. 
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt="" className="w-full h-2/3" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/4">
                    <h1 className='text-5xl font-bold text-white'>
                    Take A Tour <br />
                    Give You Time <br /> 
                    To Explore You <br />
                    </h1>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-5 top-1/2 w-2/5">
                    <p className='text-xl text-white '>
                        Tour makes you happy and Gives you energy to step forward. 
                    </p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;