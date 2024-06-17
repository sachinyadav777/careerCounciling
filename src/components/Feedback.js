import React from 'react'
import FeedbackCardSlider from './FeedbackCardSlider'
import UnderlineDecoration from './UnderlineDecoration'

const Feedback = () => {
  return (
    <div className='p-[5%]'>
      <div className='min-[990px]:grid grid-cols-2 mb-4'>
        <div>
          <div>
            <h2 className='sub-heading'>OUR FEEDBACKS</h2>
          </div>
          <div><UnderlineDecoration /> </div>
          <div>
            <h1 className='heading'>What They're Talking About Us</h1>
          </div>
        </div>
        <div className=''>
          <p className='text min-[990px]:mt-10 my-4'>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</p>
        </div>
      </div>
      <FeedbackCardSlider />
    </div>
  )
}

export default Feedback