import React from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

export default function Content({
    current,
    setCurrentd,
    data
}) {
    
    return (
        <div
            className='w-[40%] h-full border-r-2 bg-white  flex flex-col space-y-2 items-center overflow-x-scroll'
        >
            <h1 className=' text-2xl text-orange-500 self-center font-Helvetica my-5 tracking-wider text-center underline underline-offset-8'>
                {current?.name}
            </h1>
            {
                data?.map((item, index) => (
                    <motion.button
                        onClick={() => {
                            setCurrentd(item)
                        }}
                        whileTap={{ scale: 0.8 }}
                        className='w-[92%] my-1  space-y-2 text-left border-2 p-2 bg-white font-Helvetica  '
                    >
                        <p className=' font-Helvetica font-medium text-black'>
                            {item?.['COMPANY NAME']} <span className='text-orange-500 font-bold' >({item?.['SYMBOL']})</span>
                        </p>
                        <p
                        className=' font-light text-xs text-gray-500'
                        >
                            {item?.['DETAILS']}
                        </p>
                        <p
                        className=' font-bold text-xs text-orange-500'
                        >
                            {item?.['BROADCAST DATE/TIME']}
                        </p>
                    </motion.button>
                ))
            }
        </div>
    )
}
