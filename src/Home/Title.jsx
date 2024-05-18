import React from "react";

const Title=({heading,subheading})=>{
    return(
        <div className="my-20 w-[92%] mx-auto">
             <h1 className="text-orange-600 text-center my-3">{subheading}</h1>
             <h1 className="text-3xl font-medium text-center py-2 border-y-2 
             border-gray-500">{heading}</h1>
        </div>
    )
}
export default Title