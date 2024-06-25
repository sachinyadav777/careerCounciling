import React, { useState } from 'react'
import imgUrl from '../assets/images/deal.png'
import imgUrl2 from '../assets/images/deal (1).png'
import backImg from '../assets/images/about-one-shape-3.png'
import Buttons from './Buttons'
import UnderlineDecoration from './UnderlineDecoration'
import Accordian from './Accordian'

const data = [
    {
        question: "How does Life Coaching work?",
        answer: "Life coaching is a dynamic and structured process where a coach helps you identify and clarify your goals, tackle obstacles, and create actionable strategies to achieve your desired outcomes. Through regular sessions, you receive guidance, accountability, and support tailored to your personal growth and aspirations, facilitating substantial life improvements."
    },
    {
        question: "How do corporate wellness programs work?",
        answer: "Corporate wellness programs are tailored to the needs of employees and the organization. They may include activities like health screenings, fitness classes, and mental health workshops that promote a healthy lifestyle while improving job satisfaction and employee retention."
    },
    {
        question: " Is Mindfulness right for me?",
        answer: "Mindfulness is appropriate for anyone interested in managing stress, improving emotional regulation, and enhancing personal awareness. It involves practices like meditation that can help individuals of all ages and backgrounds to lead more thoughtful and peaceful lives."
    },
    {
        question: "Do I need to have some license to become a Life Coach?",
        answer: "While no formal license is required to practice as a life coach, obtaining certification from a recognized coaching institution can significantly enhance your credibility and effectiveness. These programs equip you with essential coaching skills and ethical guidelines."
    },
]

const FaqSection = () => {
    const [showIndex, setShowIndex] = useState(null)
    return (
        <div
            className='p-[5%] md:flex gap-5'>
            <div
                className='flex-1'>
                <div
                    className=' relative flex-1 bg-feedBack-bg px-4 py-8 bg-center bg-no-repeat bg-cover z-10'>
                    <div className='absolute w-full h-full bg-primary top-0 bottom-0 right-0 left-0 opacity-90 -z-10'></div>
                    <div
                        className=' group hover:bg-white my-4 w-28 h-28 rounded-full bg-black flex justify-center items-center ease-in duration-500'>
                        <img
                            className='group-hover:hidden'
                            src={imgUrl} alt="faqicon" />
                        <img
                            className='group-hover:block hidden'
                            src={imgUrl2} alt="faqicon" />
                    </div>
                    <div
                        className='my-8'>
                        <h1
                            className='heading text-white'>
                            Most Trusted Career Counseling Service!</h1>
                    </div>
                    <div
                        className='my-4'>
                        <Buttons text="Discover More" bgColor="white" color="textBlack" afterBg="afterBgBlack" hoverText='hoverTextWhite' />
                    </div>
                </div>
            </div>

            <div
                className='md:py-0 md:my-0 py-5 my-5 flex-1 relative'>
                    <img className='absolute top-0 -z-10 opacity-10 sm:left-[40%] backgroundAnimate' src={backImg} alt="abput" />
                <div className='py-2 my-2'>
                    <h2
                        className='sub-heading'>
                        COMMON FAQS</h2>
                    <div><UnderlineDecoration /></div>
                    <h1
                        className='heading'>
                        Frequently Asked Questions?</h1>
                </div>
                <div
                    className='border-[1px] border-border pt-4 mt-4'>
                    {
                        data.map((items, index) => {
                            return <Accordian
                                key={index}
                                {...items}
                                showIndex={index === showIndex && true}
                                setShowIndex={() => setShowIndex(index)}
                                setnull={() => setShowIndex(null)}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqSection