
import { faArrowUpLong, faComments, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ items }) => {
  return (
    <div className='shadow-md bg-white mb-10'>
      <Link to="">
        <div className='relative group overflow-hidden '>
          <img className='w-full group-hover:scale-110 ease-in duration-500' src={items.imgUrl} alt="blogs" />
          <div
            className=' z-10 absolute bottom-0 left-10 w-24 h-12 bg-primary text-2xl font-bold text-white flex justify-center items-center
        before:absolute before:border-t-[23px] before:border-l-[13px] before:border-r-[15px] before:border-b-[25px] before:border-l-transparent before:border-r-[#d1062f] before:border-b-[#d1062f] before:border-t-transparent before:bottom-0  before:-left-7'
          >{items.date}</div>
          <div
            className='absolute top-0 bottom-0 left-0 right-0 bg-[#00000070] flex justify-center items-center
        h-36 opacity-0 group-hover:opacity-100 group-hover:h-full ease-linear duration-300'>
            <FontAwesomeIcon className='text-white  text-2xl' icon={faPlus} />
          </div>
        </div>
      </Link>
      <div className=' pt-8 p-4'>
        <div className=''>
          <Link to="">
            <h2 className=' mb-4 text-heading text-2xl font-bold hover:text-primary ease-in duration-300 '>{items.heading}</h2>
          </Link>
          <p className='overflow-text text mb-4'>{items.para}</p>
        </div>

        <div className='flex justify-between py-4 border-t-[1px] border-opacity-25 border-t-text'>
          <Link to="">
            <div className=''>
              <FontAwesomeIcon className='text-primary' icon={faComments} />
              <span className='mx-2'>{items.comment}</span>
              <span>Comments</span>
            </div>
          </Link>
          <Link to="">
            <div className='hover:text-primary ease-in duration-200'>
              <FontAwesomeIcon className='rotate-45' icon={faArrowUpLong} />
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default BlogCard