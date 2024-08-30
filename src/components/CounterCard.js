import React from 'react'
import imgUrl from '../assets/images/layer (1).png'
import imgUrl2 from '../assets/images/clipboard.png'
import imgUrl3 from '../assets/images/progress.png'
import imgUrl4 from '../assets/images/people.png'
import CountUp, {useCountUp} from 'react-countup';

const CounterCard = () => {
    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce: true,
      });
    return (
        <div className='md:grid md:grid-cols-2 lg:grid-cols-4'>
            <div
                className='flex items-center p-10 relative z-10
                   border-r-[1px] border-r-white
                   before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-gradient-to-r from-primary to-white before:absolute before:-z-10 before:h-[1px]
                   after:bottom-0 after:right-0 after:left-0 after:bg-gradient-to-r after:absolute after:-z-10 after:h-[1px]'>
                <div 
                className='border-r-2 border-r-text relative z-10
                after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:top-2/4 after:-right-4 after:-translate-y-2/4 after:-rotate-90'>
                    <img className='mr-4' src={imgUrl} alt="counter image" loading='lazy' />
                </div>
                <div className='ml-4'>
                    <div className='text-white text-4xl font-bold pb-1'><CountUp end={30} enableScrollSpy scrollSpyOnce />+</div>
                    <h2 className='text-white text-base pt-1'>Cetegories</h2>
                </div>
            </div>
            <div
                className='flex items-center p-10 relative z-10
                   border-r-[1px] border-r-white
                   before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-gradient-to-r from-primary to-white before:absolute before:-z-10 before:h-[1px]
                   after:bottom-0 after:right-0 after:left-0 after:bg-gradient-to-r after:absolute after:-z-10 after:h-[1px]'>
                <div 
                className='border-r-2 border-r-text relative z-10
                after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:top-2/4 after:-right-4 after:-translate-y-2/4 after:-rotate-90'>
                    <img className='mr-4' src={imgUrl2} alt="counter image" loading='lazy' />
                </div>
                <div className='ml-4'>
                    <div className='text-white text-4xl font-bold pb-1'><CountUp end={68} enableScrollSpy scrollSpyOnce />+</div>
                    <h2 className='text-white text-base pt-1'>Con. process</h2>
                </div>
            </div>
            <div
                className='flex items-center p-10 relative z-10
                   border-r-[1px] border-r-white
                   before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-gradient-to-r from-primary to-white before:absolute before:-z-10 before:h-[1px]
                   after:bottom-0 after:right-0 after:left-0 after:bg-gradient-to-r after:absolute after:-z-10 after:h-[1px]'>
                <div 
                className='border-r-2 border-r-text relative z-10
                after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:top-2/4 after:-right-4 after:-translate-y-2/4 after:-rotate-90'>
                    <img className='mr-4' src={imgUrl3} alt="counter image" loading='lazy' />
                </div>
                <div className='ml-4'>
                    <div className='text-white text-4xl font-bold pb-1'><CountUp end={99} enableScrollSpy scrollSpyOnce />+</div>
                    <h2 className='text-white text-base pt-1'>Success Rate</h2>
                </div>
            </div>
            <div
                className='flex items-center p-10 relative z-10
                   border-r-[1px] border-r-white
                   before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-gradient-to-r from-primary to-white before:absolute before:-z-10 before:h-[1px]
                   after:bottom-0 after:right-0 after:left-0 after:bg-gradient-to-r after:absolute after:-z-10 after:h-[1px]'>
                <div 
                className='border-r-2 border-r-text relative z-10
                after:absolute after:border-t-[6px] after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-transparent after:border-t-text after:top-2/4 after:-right-4 after:-translate-y-2/4 after:-rotate-90'>
                    <img className='mr-4' src={imgUrl4} alt="counter image" loading='lazy' />
                </div>
                <div className='ml-4'>
                    <div className='text-white text-4xl font-bold pb-1'><CountUp end={23} enableScrollSpy scrollSpyOnce />+</div>
                    <h2 className='text-white text-base pt-1'>Pro Consultants</h2>
                </div>
            </div>
        </div>
    )
}

export default CounterCard