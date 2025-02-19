import React from "react";
import Image from "next/image";
import { FC } from "react";
import SkillsTwo from "./SkillsTwo";

const Skills:FC =()=> {
    return(

      <>
<div>
<h1 className="font-extrabold text-4xl text-center flex justify-center em mt-12 mb-12">Technologies</h1>

</div>



   <div className=" flex items-center justify-center  ">

<div className="flex  flex-col md:flex-row gap-6 p-2">
  
<div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/htm.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/css.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/boot.png"  width={100} height={50}/>
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/tails.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/js.png"  width={100} height={50}  />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/react.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill" src="/next.png"  width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/ex.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/node.png" width={100} height={50} />
            </span>
        </div>
    </div>
    <div className="border border-gray-500 rounded p-4 mx-1 cursor-pointer transition duration-300 ease-in-out hover:border-blue-300">
        <div className=" w-14 h-14 flex items-center justify-center rounded-full">
            <span className="text-white text-lg font-bold">
                <Image alt="skill"  src="/mongo.png" width={100} height={50} />
            </span>
        </div>
    </div>
    

</div>

</div>


<SkillsTwo/>

      </>
    )
    
}
export default Skills;