import React from "react";
import Menubanner from "../MENU/menu";
import img from '../assets/images/banner2.jpg'
const Banner=()=>{
    return(
        <div>
            <Menubanner heading={"OUR SHOP"}
             para={"Would you like to try a dish?"} img={img}></Menubanner>
        </div>
    )
}
export default Banner