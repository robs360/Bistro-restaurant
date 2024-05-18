import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import side1 from '../assets/images/slide1.jpg'
import side2 from '../assets/images/slide2.jpg'
import side3 from '../assets/images/slide3.jpg'
import side4 from '../assets/images/slide4.jpg'
import side5 from '../assets/images/slide5.jpg'
const SwipperSlide = () => {
    return (
        <div className="w-[371px] md:w-[521px] lg:w-[971px] mx-auto my-20">
            <Swiper 
                spaceBetween={10}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={
                    {
                        370: {
                            slidesPerView: 1
                        },
                        520: {
                            slidesPerView: 2
                        },
                        970: {
                            slidesPerView: 3
                        }
                    }
                }
            >
                <SwiperSlide className="">
                    <img src={side1} className="h-[355px] rounded-md mx-auto" alt="" srcset="" />
                    <h1 className="font-semibold text-2xl 
                     text-white text-center -mt-16">Salad</h1>
                </SwiperSlide>
                <SwiperSlide className="mx-auto"><img src={side2}
                    className="h-[355px] rounded-md mx-auto" alt="" srcset="" />
                    <h1 className="font-semibold text-2xl
                     text-white text-center -mt-16">Salad</h1>
                </SwiperSlide>
                <SwiperSlide className="mx-auto"><img src={side3}
                    className="h-[355px] rounded-md mx-auto" alt="" srcset="" />
                    <h1 className="font-semibold text-2xl
                     text-white text-center -mt-16">Salad</h1>
                </SwiperSlide>
                <SwiperSlide className="mx-auto"><img src={side4}
                    className="h-[355px] rounded-md mx-auto" alt="" srcset="" />
                    <h1 className="font-semibold text-2xl
                     text-white text-center -mt-16">Salad</h1>
                </SwiperSlide>
                <SwiperSlide className="mx-auto"><img src={side5}
                    className="h-[355px] rounded-md mx-auto" alt="" srcset="" />
                    <h1 className="font-semibold text-2xl
                     text-white text-center -mt-16">Salad</h1>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default SwipperSlide