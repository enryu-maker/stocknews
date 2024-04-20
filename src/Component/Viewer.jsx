import React from 'react'



export default function View({
    currentd
}) {

    return (
        <div
            className='w-[45%] h-full flex bg-white flex-col space-y-2 items-center overflow-x-scroll'
        >
            <iframe
            title='pdf'
            src={currentd?.ATTACHMENT}
            className='w-[90%] h-[95%] mt-2'
            />
        </div>
    )
}
