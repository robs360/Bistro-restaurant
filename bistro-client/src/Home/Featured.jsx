import React from "react";
import banner2 from '../assets/images/featured.jpg'
import Title from "./Title";

const Featured = () => {
    const bannerStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        width: '92%',

    };
    return (
        <div className="w-[92%] mx-auto my-20 bg-fixed
         flex justify-center items-center min-h-[80vh] md:min-h-[95vh]" style={bannerStyle}>
            <div className="w-full">
                <div className="w-[80%] mx-auto">
                    <Title className="w-[330px]" heading={"FROM OUR MENU"}
                        subheading={"---Check it out---"}></Title>
                </div>
                <div className="w-full flex space-x-1 lg:space-x-5 justify-center items-center md:flex-row flex-col">
                    <div>
                        <img src={banner2} className="rounded-md w-[320px] lg:w-[330px] h-[280px]"
                         alt="" srcset=""/>
                    </div>
                    <div className="w-[360px] p-2">
                    <h1 className="text-white text-xl">{new Date().toLocaleString()}</h1>
                    <h1 className="text-white text-xl">WHERE CAN I GET SOME?</h1>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur 
                         adipisicing elit. Error voluptate facere, 
                          deserunt dolores maiores quod nobis quas 
                           quasi. Eaque repellat recusandae ad laudantium tempore 
                        consequatur consequuntur omnis ullam maxime tenetur.</p> 
                        <button className="rounded-lg border-b-4 font-medium
                         border-white p-2 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured
