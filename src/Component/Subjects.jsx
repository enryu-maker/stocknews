import axios from 'axios'
import { motion } from 'framer-motion'
import React from 'react'
export default function Subjects({
    setCurrent,
    setContent
}) {
    const [active,setActive] = React.useState(0)
    const [data,setData] = React.useState([])
    async function getcontent(name) {
        console.log("hello")
        await axios.get(`http://127.0.0.1:8000/get-content/?subject=${name}`).then((res)=>{
          setContent(res.data)
        })
        .catch((err)=>{
          console.log(err.response.data)
        })
      }
    
    async function getsubjects() {
        await axios.get('http://127.0.0.1:8000/get-subject/').then((res)=>{
          setData(res.data)
          getcontent(res.data[0].name)
        })
        .catch((err)=>{
          console.log(err.response.data)
        })
      }
    
      React.useEffect(()=>{
        getsubjects();
      },[])
    
    return (
        <div
            className='w-[15%] h-full border-r-2 bg-gray-50 flex flex-col space-y-2 items-center overflow-x-scroll'
        >
            <h1 className=' text-2xl self-center font-Helvetica my-5 text-orange-500 tracking-widest'>
                Subjects
            </h1>
            {
                data?.map((item, index) => (
                    <motion.button
                        key={index}
                        onClick={() => {
                            setCurrent(item)
                            setActive(index)
                            getcontent(item.name)

                        }}
                        whileTap={{ scale: 0.8 }}
                        className={`w-[92%] my-1 text-left border-2 p-2 ${active===index?"border-orange-500":""} bg-white font-Helvetica hover:bg-orange-500 hover:text-white hover:font-semibold`}
                    >
                        {item?.name}
                    </motion.button>
                ))
            }
        </div>
    )
}
