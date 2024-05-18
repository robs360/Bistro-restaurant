import React, { useEffect, useState } from "react";
import Menubanner from "./menu";
import banner from '../assets/images/banner3.jpg'
import Title from "../Home/Title";
import Differentfood from "./Differrentfood";
import Foodbanner from "./foodbanner";
import img from '../assets/images/chef-service.jpg'
const Menupage = () => {
    const [info,setInfo]=useState([]) ;
    const [info2,setInfo2]=useState([]) ;
    const [info3,setInfo3]=useState([]) ;
    const [info4,setInfo4]=useState([]) ;
    useEffect(()=>{
        fetch('/blog.json')
        .then(res=>res.json())
        .then(data=>{
            const filterData=data.filter(item=>item.category==='offered')
            const filterData2=data.filter(item=>item.category==='dessert')
            const filterData3=data.filter(item=>item.category==='pizza')
            const filterData4=data.filter(item=>item.category==='pizza')
            setInfo(filterData)
            setInfo2(filterData2)
            setInfo3(filterData3)
            setInfo4(filterData4)
        })
    },[])
    return (
        <div>
            <div className="w-[93%] mx-auto mb-14 mt-4">
                <Menubanner heading={"OUR MENU"}
                    para={"Would you like to try a dish?"} img={banner}></Menubanner>
            </div>
            <Title className="mb-10" heading={"---Don't miss---"}
             subheading={"TODAY'S OFFER"}></Title>
             <Differentfood info={info}></Differentfood>
             <Foodbanner banner={img} 
             heading={"DESSERTS"} 
             para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Foodbanner>
             <Differentfood info={info2}></Differentfood>
             <Foodbanner banner={img} 
             heading={"PIZZA"} 
             para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Foodbanner>
               
               <Differentfood info={info3}></Differentfood>
            <Foodbanner banner={img} 
             heading={"SALAD"} 
             para={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Foodbanner>
               <Differentfood info={info4}></Differentfood>
        </div>
    )
}
export default Menupage