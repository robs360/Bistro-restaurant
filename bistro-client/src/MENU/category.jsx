import React from "react";

const Category = ({ cat = [] }) => {
    return (
        <div className="w-[92%] mx-auto grid grid-cols-1 p-2
         lg:grid-cols-2 gap-y-9 my-20 border-black border-2">
            {
                cat.map(item => <div className="flex space-x-3 mx-auto">
                    <img src={rec} className="w-[90px] h-[90px]"
                        alt="" srcset="" />
                    <div className="p-1">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-light ">
                                ROAST DUCK BREAST -------</h1>
                            <h1 className="text-2xl font-light "> Price:</h1>
                        </div>
                        <p className="text-gray-400">Roasted duck breast (served pink) with <br />
                            gratin potato and a griottine cherry sauce</p>
                    </div>
                </div>)
            }

        </div>
    )
}