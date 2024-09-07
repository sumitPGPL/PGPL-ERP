import Image from 'next/image'
import Link from 'next/link';
import React, { FC } from 'react'

type Props={
img: string;
heading: string;
counter: number;
link: string;

}

const MainCard:FC<Props>=({img,heading,counter,link})=> {
  return (
    <>
    <div
          className="p-2  w-60 rounded-lg  bg-slate-800 text-white shadow-md hover:shadow-lg cursor-pointer transition duration-200">
         
          <div className="flex gap-6 ">
            <div className=" flex justify-center items-center">
              <Image
                src={img}
                alt="img not found"
                width={50}
                height={50}
              />
            </div>
            
            <div className="">
              <div className=" ">
                <h6 className="text-md  font-semibold ">{heading}</h6>
                <hr></hr>
              </div>
              <h1 className="text-md">{counter}</h1>
              <Link className="text-sm font-extralight text-gray-2" href={link}>Click here</Link>
             
            </div>
          </div>

          </div>
       
    
        
    </>
  )
}

export default MainCard;
