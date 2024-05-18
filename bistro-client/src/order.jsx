import React from "react";
import Menubanner from "./MENU/menu";
import img from './assets/images/banner2.jpg'
const Order=()=>{
    return(
        <div className="w-[95%] mx-auto mt-4 mb-16">
            <Menubanner heading={"Our Shop"} 
            para={"Would you like to try a dish?"} img={img}></Menubanner>
        </div>
    )
}
export default Order