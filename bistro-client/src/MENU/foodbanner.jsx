import React from "react";

const Foodbanner=({banner ,heading, para})=>{
    return(
        <div className="w-[95%] mx-auto h-[500px] md:h-[650px] flex
        items-center justify-center my-16" style={{backgroundImage: `url(${banner})`,}}>
           <div className="p-2 bg-black opacity-65 w-[325px] 
           mx-auto md:w-[520px] py-8">
               <h1 className="text-5xl font-normal text-center text-white">
                   {heading}
               </h1>
               <p className="text-center text-white mt-3">{para}</p>
           </div>
       </div>
    )
}
export default Foodbanner