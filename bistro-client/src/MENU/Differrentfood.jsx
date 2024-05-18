import React from "react";

const Differentfood = ({ info }) => {
    return (
        <div className="my-20">
            <div className="w-[92%] mx-auto grid grid-cols-1 p-2
        lg:grid-cols-2 gap-y-9 gap-2 my-10 border-black border-2">
                {
                    info?.map(item => <div className="flex space-x-2  items-center">
                        <img style={{ borderRadius: '0px 200px 200px 200px' }} src={item.image} className="w-[95px] h-[95px]"
                            alt="" srcset="" />
                        <div>
                            <h1 className="text-2xl font-light ">
                                {item.name} ----------</h1>
                            <p className="text-gray-400">{item.recipe}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className="w-[300px] mx-auto">
                <button className="text-[18px] font-semibold py-2 border-b-4
                border-black rounded-lg btn">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    )
}
export default Differentfood