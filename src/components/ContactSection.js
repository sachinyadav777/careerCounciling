import React from 'react'
import Buttons from './Buttons'
import imgUrl from '../assets/images/building.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import UnderlineDecoration from './UnderlineDecoration'

const ContactSection = () => {
    return (
        <div
            className='p-[5%]'>
                <div className='text-center mb-10'>
                    <h2 className='sub-heading'>CONTACT WITH US</h2>
                    <div><UnderlineDecoration /></div>
                    <h1 className='heading'>Contact Me for Any <br /> Queries</h1>
                </div>
            <div
                className='p-4 bg-primary lg:flex gap-5'>
               
                    <form
                        action=""
                        className='lg:grow md:p-12 p-3 bg-white'>
                        <div className='lg:grid lg:grid-cols-2 lg:gap-x-2'>
                            <input
                                className='w-full border-2  p-4 my-2 text-heading outline-none placeholder-current bg-back' type="text" placeholder='name' />
                            <input
                                className='w-full border-2  p-4 my-2 text-heading outline-none placeholder-current bg-back' type="email" name="" id="" placeholder='email' />
                            <input
                                className='w-full border-2  p-4 my-2 text-heading outline-none placeholder-current bg-back' type="number" name="" id="" placeholder='number' />

                            <select
                                className='w-full border-2  p-4 my-2 text-heading outline-none placeholder-current bg-back' name="select" id="selectId">
                                <option className='' value="select type">select type</option>
                                <option value="8th to 9th">8th to 9th</option>
                                <option value="8th to 9th">8th to 9th</option>
                                <option value="8th to 9th">8th to 9th</option>
                                <option value="8th to 9th">8th to 9th</option>
                                <option value="8th to 9th">8th to 9th</option>
                            </select>
                        </div>
                        <div>
                            <textarea
                                className='lg:py-8 w-full border-2  p-4 my-2 text-heading outline-none placeholder-current bg-back' name="" id="" placeholder='write massege'></textarea>
                            <div>
                                <Buttons
                                    text="Send a Message"
                                    bgColor="black"
                                    color="textWhite"
                                    afterBg="afterBgPrimary"
                                    hoverText='hoverTextWhite'
                                />
                            </div>
                        </div>
                    </form>
              
                <div
                className=''>
                    <div
                        className='bg-heading flex justify-between items-center md:p-6 p-8 relative
                                   after:absolute after:border-t-[10px] after:border-l-[10px] after:border-r-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-heading after:bottom-[-19px]  after:left-8'>
                        <h2
                            className='text-white font-bold text-2xl'>
                            Track Office</h2>
                        <div>
                            <img src={imgUrl} alt="building" />
                        </div>
                    </div>
                    <div
                        className='p-10 '>
                        <div
                            className='flex justify-start text-white font-semibold my-8 pt-4 border-t-2 border-t-[#ffffff33]'>
                            <div
                                className='mr-7'>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <p>30 Commercial Road Fratton, Australia</p>
                        </div>
                        <div
                            className='flex justify-start text-white font-semibold my-8'>
                            <div
                                className='mr-7'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <p>sy396610@gmail.com</p>
                        </div>
                        <div
                            className='flex justify-start text-white font-semibold my-8 pb-4 border-b-2 border-b-[#ffffff33]'>
                            <div
                                className='mr-7'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <p>+92(8800)-9850</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection