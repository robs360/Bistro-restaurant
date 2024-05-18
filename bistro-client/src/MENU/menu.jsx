import React from "react";
import { Parallax } from 'react-parallax';

const Menubanner = ({ heading, para, img }) => {
    return (
        <Parallax className="mb-20"
            blur={{ min: -28, max: 28 }}
            bgImage={img}
            
            strength={-100}
        >
            <div className="w-[95%] mx-auto h-[500px] md:h-[650px] flex
             items-center justify-center" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))`,}}>
                <div className="p-2 bg-black opacity-65 w-[325px] 
                mx-auto md:w-[520px] py-8">
                    <h1 className="text-5xl font-medium text-center text-white">
                        {heading}
                    </h1>
                    <p className="text-center text-white mt-3">{para}</p>
                </div>
            </div>
        </Parallax>
    )
}
export default Menubanner