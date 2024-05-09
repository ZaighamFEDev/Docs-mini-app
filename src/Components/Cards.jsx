import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"



export default function Cards({data,reference}) {
  return (
   <>
   
   <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.9}   dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }} className="relative m-2 w-60 h-72 bg-zinc-700 rounded-[3vw] overflow-hidden text-white p-5">
   <FaFileAlt />
   <p className='leading-tight py-5 font-light text-md'>{data.desc}</p>
   <div className="footer absolute left-0 bottom-0 w-full">
    <div className="flex items-center justify-between pb-3 px-5">
        <p>{data.size}</p>
        {data.close?<IoCloseSharp />:<LuDownload />}
        
    </div>
   {data.tag.isOpen && ( <div className={`flex items-center justify-center w-full h-[5vw] ${data.tag.tagColor}`}>
        <p>{data.tag.tagTitle}</p>
    </div>)}
   </div>
   </motion.div>
   
   </>
  )
}
