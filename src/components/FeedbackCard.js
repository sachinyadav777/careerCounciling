import React from 'react'
import imgUrl from "../assets/images/testimonial-shape-1.png"
import imgUrl3 from "../assets/images/chat_6469672.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const FeedbackCard = ({items}) => {
  return (
    <div className='sm:flex sm:gap-6 w-full pt-10 pr-10 group'>
      <div className=''>
        <div className='relative'>
          <img src={imgUrl} alt="feedback" />
          <div className='absolute top-4 left-4 rounded-full'>
            <img className='rounded-full border-2 border-white w-40' src={items.img} alt="feedback" />
          </div>
        </div>
      </div>
      <div className='my-2 flex-1'>
        <div className='flex justify-between items-center border-b-2 border-text relative mb-4
        after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:bottom-[-15px]  after:left-0'>
          <div>
            <div className='my-1 text-primary'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div >
            <h1 className='sub-heading text-[#16171a] text-xl font-bold'>{items.heading}</h1>
            <h2 className='sub-heading text-base my-2 pb-2'>{items.subHeading}</h2>
          </div>
          <div className='opacity-10 group-hover:opacity-100 ease-in duration-500'>
            <img className='text-primary' src={imgUrl3} alt="feedback" />
          </div>
        </div>
        <div className='mt-8'>
          <p className='text'>{items.para}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard