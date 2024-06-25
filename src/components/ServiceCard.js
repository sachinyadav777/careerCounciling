import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({items}) => {
    console.log(items.img)
    return (
        <div className=''>
        <div className='text-center group '>
            <div className='relative'>
                <div className='text-center'>
                    <div 
                    className=' relative w-48 h-48 rounded-full  my-0 mx-auto 
                    after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-primary  group-hover:after:scale-100 after:scale-50 after:rounded-full group-hover:after:visible after:opacity-70  after:invisible after:ease-linear after:duration-500'>
                        <img className='h-full rounded-full object-cover' src={items.img} alt="serviceImg1" />
                        <div className='absolute right-3 bottom-0 w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center text-3xl group-hover:serviceCardAnimate group-hover:bg-white group-hover:text-black z-10'><FontAwesomeIcon icon={items.icon} /></div>
                    </div>

                </div>
            </div>
            <div className='bg-white p-10 pb-2 pt-28 -mt-24'>
                <div>
                    <h1
                        className='h-[82px] flex justify-center items-center font-bold sub-heading text-2xl text-black py-2 my-2 border-b-2 border-b-text relative 
                        after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:bottom-[-15px] after:left-2/4 after:-translate-x-2/4'>
                        {items.heading}</h1>
                    <p className='h-[104px] overflow-hidden text mt-2 pt-2'>{items.para}</p>
                </div>
                <div className=' mt-4 group-hover:bg-primary w-11 h-11 rounded-full my-0 mx-auto flex justify-center items-center ease-in duration-500'><FontAwesomeIcon icon={faArrowRightLong} /></div>
            </div>
        </div>
        </div>
    )
}

export default ServiceCard