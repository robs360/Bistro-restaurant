
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/01.jpg'
import img2 from '../assets/images/02.jpg'
import img3 from '../assets/images/03.png'
import img6 from '../assets/images/06.png'
import img4 from '../assets/images/04.jpg'
import img8 from '../assets/images/1st.avif'
const Carosoul = () => {
    return (
        <div className='w-[92%] mx-auto'>
            <Carousel centerMode="center" centerSlidePercentage={100} className='w-full '>
                <div className='h-[85vh] md:h-[90vh]'>
                    <img className='rounded-md' src={img8} />
                </div>
                <div className='h-[85vh] md:h-[90vh]'>
                    <img className='rounded-md' src={img3} />
                    
                </div>
                <div className='h-[85vh] md:h-[90vh]'>
                    <img className='rounded-md' src={img4} />
                  
                </div>
                <div className='h-[85vh] md:h-[90vh]'>
                    <img className='rounded-md' src={img1} />
                  
                </div>
            </Carousel>
        </div>
    )
}
export default Carosoul