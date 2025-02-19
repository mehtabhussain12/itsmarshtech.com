import React from "react";
import Image from "next/image";
import { FC } from "react";
import Pricing from "./Pricing";

const SkillsTwo:FC =()=> {
    return(

      <>
   <div className=" flex items-center justify-center  ">

<div className="flex  flex-col md:flex-row gap-6 p-2">
  
<div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/python.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/c.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/sql.png"  width={100} height={50}/>
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/photo.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/pr.png"  width={100} height={50}  />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/illus.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/ae.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/id.png" width={100} height={50} />
            </span>
        </div>
    </div>

    

</div>

</div>
<Pricing/>

      </>
    )
    
}
export default SkillsTwo;