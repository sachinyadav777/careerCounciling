import React from 'react'
import ServiceCardSlider from './ServiceCardSlider'
import UnderlineDecoration from './UnderlineDecoration'

const Service = () => {
  return (
    <div className='p-[5%] pt-[1%] pb-[2%] relative bg-darkSlaty z-10'>
      <div className='absolute -z-10  top-0 left-0 right-0 bottom-0 opacity-35 bg-service-bg-url bg-center bg-no-repeat bg-[length:230%]'></div>
      <div className='absolute -z-10  h-96 left-0 right-0 bottom-0 bg-service-bg2-url bg-bottom bg-no-repeat opacity-5'></div>
      <div className='relative flex justify-center flex-col items-center m-2 p-2'>
        <h1 className='heading'>Our Servises</h1>
        <p className='text'>I can help you in this particular areas.</p>
        <div className=''><UnderlineDecoration /></div>
      </div>
        <ServiceCardSlider />
    </div>
  )
}

export default Service