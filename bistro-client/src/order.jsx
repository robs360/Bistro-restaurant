import React, { useEffect, useState } from "react";
import Menubanner from "./MENU/menu";
import img from './assets/images/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink, useParams } from "react-router-dom";
const Order = () => {
   
    const category=['salad','soup','dessert','drinks','pizza'];
    const {title}=useParams();
    const initial=category.indexOf(title);
    const [index,setIndex]=useState(initial);
    const [info, setInfo] = useState([]);
    const [info2, setInfo2] = useState([]);
    const [info3, setInfo3] = useState([]);
    const [info4, setInfo4] = useState([]);
    const [info5, setInfo5] = useState([]);
   console.log("shahadat")
    useEffect(() => {
        fetch('/blog.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(item => item.category === 'salad')
                const filterData2 = data.filter(item => item.category === 'soup')
                const filterData3 = data.filter(item => item.category === 'dessert')
                const filterData4 = data.filter(item => item.category === 'pizza')
                const filterData5 = data.filter(item => item.category === 'drinks')
                setInfo(filterData)
                setInfo2(filterData2)
                setInfo3(filterData3)
                setInfo4(filterData4)
                setInfo5(filterData5)
            })
    }, [])
    return (
        <div className="w-[95%] mx-auto mt-4 mb-16">
            <Menubanner heading={"Our Shop"}
                para={"Would you like to try a dish?"} img={img}></Menubanner>
            <div className="my-16 mx-auto">
                <Tabs defaultIndex={index} onSelect={(i)=>setIndex(i)}>
                    <TabList className="w-[396px]">
                        <Tab><NavLink className="font-semibold"
                        >SALAD</NavLink></Tab>
                        <Tab><NavLink className="font-semibold">SOUPS</NavLink></Tab>
                        <Tab><NavLink className="font-semibold">DESSRTS</NavLink></Tab>
                        <Tab><NavLink className="font-semibold">DRINKS</NavLink></Tab>
                        <Tab><NavLink className="font-semibold">PIZZA</NavLink></Tab>

                    </TabList>

                    <TabPanel>
                        <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                info?.map(item => <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn bg-orange-300">Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                info2?.map(item => <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn bg-orange-300">Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                info3?.map(item => <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn bg-orange-300">Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                info5?.map(item => <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-end">
                                        <button className="btn bg-orange-300">Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid grid-cols-1 my-20 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {
                                info4?.map(item => <div className="mx-auto card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{item.name}</h2>
                                        <p>{item.recipe}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn bg-orange-300">Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    )
}
export default Order