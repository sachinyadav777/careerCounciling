import React from 'react'
import url from '../assets/images/arun_main_picture_for_website-removebg-preview.png'
import backImg from '../assets/images/about-one-shape-3.png'
import backImg2 from '../assets/images/about-one-shape-1.png'
import UnderlineDecoration from './UnderlineDecoration'
import Buttons from './Buttons'

const About = () => {
    return (
        <div className='p-[5%] font-plus lg:grid lg:grid-cols-2'>
            <div className=''>
                <div className="relative" >
                    <img className='absolute top-0 -z-10 opacity-10 sm:left-[40%]' src={backImg} alt="abput" />
                    <img className='absolute bottom-0 -z-10 opacity-50 left-2/4 -rotate-90 translate-x-[150px] -translate-y-[50px] origin-bottom' src={backImg2} alt="abput" />
                    <img src={url} alt="about" />
                    <div className='absolute bottom-0 w-72 h-28 bg-back-img bg-white bg-cover bg-no-repeat bg-[right_6.5rem_top_-6rem] pl-28 pt-5 shadow-lg'>
                        <h1 className='text-5xl font-semibold text-primary'>28</h1>
                        <p className='text'>Year of Experiance</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='pt-2 mt-2'>
                    <div>
                        <h2 className='sub-heading py-2'>About Us</h2>
                        <div> <UnderlineDecoration /> </div>
                    </div>
                    <div>
                        <h1 className='heading'>Arunendra Soni</h1>
                    </div>
                    <div>
                        <h2 className='sub-heading py-2 my-2'>Career Counceler <span className='text-primary'>+</span>Motivational Speaker <span className='text-primary'>+</span>Life Coach</h2>
                    </div>
                    <div>
                        <p className='text py-2'>Arunendra Soni is considered to be one of the Top 5 Leadership Experts in the world as well as an internationally acclaimed bestselling author. His work is embraced by rock stars, royalty, billionaires and celebrity CEOs.</p>
                    </div>
                    <div>
                        <p className='text py-2'>Deeply passionate about helping children in need live happier, healthier lives, Robin founded The Robin Sharma Foundation for Children (RSFC) as a registered charitable foundation. With every copy of The 5AM Club sold, a portion of royalties goes to help children with leprosy. So when you win, they win.</p>
                    </div>
                    <div className='pt-2 mt-2'> <Buttons text="Discover More" bgColor="primary" color="textWhite" afterBg="afterBgBlack" /> </div>
                </div>
            </div>
        </div>
    )
}

export default About