import React from 'react'
import BlogCard from './BlogCard'
import img1 from '../assets/images/img-blog-1.jpg'
import img2 from '../assets/images/img-blog-2.jpg'
import img3 from '../assets/images/img-blog-3.jpg'
import UnderlineDecoration from './UnderlineDecoration'

const data = [
    {
        imgUrl: img1,
        heading: "People who made inspiring life changes",
        para: "Responding immediately is attractive because it's very rare even though it seems so obvious. It's so rare because most people procrastinate. In fact, you",
        comment: 2,
        date: "27 apr"


    },
    {
        imgUrl: img2,
        heading: "People who made inspiring life changes",
        para: "Responding immediately is attractive because it's very rare even though it seems so obvious. It's so rare because most people procrastinate. In fact, you",
        comment: 2,
        date: "27 apr"


    },
    {
        imgUrl: img3,
        heading: "People who made inspiring life changes",
        para: "Responding immediately is attractive because it's very rare even though it seems so obvious. It's so rare because most people procrastinate. In fact, you",
        comment: 2,
        date: "27 apr"


    },
]

const BlogSection = () => {
    return (
        <div className='p-[5%] bg-gradient-to-b from-white to-[#f2edeb]'>
            <div className='text-center mb-10 '>
                <h2 className='sub-heading'>NEWS & UPDATES</h2>
                <div><UnderlineDecoration /></div>
                <h1 className='heading'>Latest News & Articles <br/> From the Blog</h1>
            </div>
            <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    data.map((items, index) => {
                        return <BlogCard key={index} items={items} />
                    })
                }
            </div>
        </div>
    )
}

export default BlogSection