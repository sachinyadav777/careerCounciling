import React from 'react'

const UnderlineDecoration = () => {
    return (
        <div className='flex justify-center'>
            <div className=' relative w-2 h-2 rounded-full border-primary border-[1px] 
            after:w-7 after:h-[2px] after:absolute after:bg-primary after:left-[0.6rem] after:top-2/4 after:-translate-y-2/4
            before:w-7 before:h-[2px] before:absolute before:bg-primary before:right-[0.6rem] before:top-2/4 before:-translate-y-2/4'></div>
        </div>
    )
}

export default UnderlineDecoration