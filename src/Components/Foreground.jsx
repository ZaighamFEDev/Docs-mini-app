import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {

  const ref=useRef(null);

  let data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus quos aliquam porr",
      size: ".9mb",
      close:false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"bg-blue-600",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus quos aliquam porr",
      size: ".9mb",
      close:true,
      tag:{
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"bg-green-600",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellendus quos aliquam porr",
      size: ".9mb",
      close:false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"bg-green-600",
      },
    },

  ];

  return (
    <>
      <div ref={ref} className=" p-10 w-full h-screen fixed top-0 left-0 z-[3] bg-sky-900/20 flex gap-5">
        {data.map((item,index)=>(
        <Cards data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
