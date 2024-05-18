import React, { useEffect, useState } from "react";
import Carosoul from "./Carosoul";
import Swiper from "swiper";
import SwipperSlide from "./SwipperSlide";
import Title from "./Title";
import rec from '../assets/images/rec.png'
import Featured from "./Featured";

const Home=()=>{
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('/blog.json')
        .then(res=>res.json())
        .then(data=>{
           const filterData=data.filter(item=>item.category==="popular")
           setInfo(filterData)
        })
   },[])
    return(
        <div>
            <Carosoul></Carosoul>
            <Title heading={"ORDER ONLINE"} subheading={"---From 11:00am to 10:00pm---"}></Title>
            <SwipperSlide></SwipperSlide>
            <Title heading={"FROM OUR MENU"}
             subheading={"---Che---Check it out---ck it out---"}></Title>
             <div className="w-[92%] mx-auto grid grid-cols-1 p-2
              lg:grid-cols-2 gap-y-9 my-20 border-black border-2">
                 {
                    info?.map(item=><div className="flex space-x-3 mx-auto">
                    <img style={{borderRadius:'0px 200px 200px 200px'}} src={item.image} className="w-[95px] h-[95px]" 
                     alt="" srcset="" />
                     <div>
                         <h1 className="text-2xl font-light ">
                            {item.name} ----------</h1>
                            <p className="text-gray-400">{item.recipe}</p>
                     </div>
                 </div>)
                 }
                
             </div>
             <Featured></Featured>
        </div>
    )
}
export default Home