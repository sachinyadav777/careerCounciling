import React from 'react'
// import url from '../assets/images/arun_main_picture_for_website-removebg-preview.png'
import url from '../assets/images/arunebdra-removebg-preview.png'
import backImg from '../assets/images/about-one-shape-3.png'
import backImg2 from '../assets/images/about-one-shape-1.png'
import UnderlineDecoration from './UnderlineDecoration'
import Buttons from './Buttons'

const About = () => {

    return (
        <div className='p-[5%] font-plus lg:grid lg:grid-cols-2'>
            <div className=''>
                <div className="relative" >
                    <img className='absolute top-0 -z-10 opacity-10 sm:left-[40%] backgroundAnimate' src={backImg} alt="abput" />
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
                        <h2 className='sub-heading'>About Us</h2>
                        <div> <UnderlineDecoration /> </div>
                    </div>
                    <div>
                        <h1 className='heading'>Arunendra Soni</h1>
                    </div>
                    <div>
                        <h2 className='sub-heading py-2 my-2 leading-6'>Career Counceler <span className='text-primary'>+</span>Motivational Speaker <span className='text-primary'>+</span>Life Coach</h2>
                    </div>
                    <div>
                        <p className='text py-2'>Arunendra Soni is renowned as one of India's most influential motivational speakers and career counselors. Through his dynamic and inspiring talks, he has transformed the lives of over 200,000 students and professionals. For him, this is only the beginning.
                        </p>
                    </div>
                    <div>
                        <p className='text py-2'>He holds a management degree and has extensive experience working with multinational companies in Mumbai and across India. His rigorous training and corporate experience have prepared him well for his role as a motivational trainer and career counselor, showcasing his remarkable journey of personal growth and transformation.

                        </p>
                    </div>
                    <div className='pt-2 mt-2'> <Buttons text="Discover More" bgColor="primary" color="textWhite" afterBg="afterBgBlack" /> </div>
                </div>
            </div>
        </div>
    )
}

export default About