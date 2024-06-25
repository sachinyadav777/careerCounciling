import React from 'react'
import FeedbackCard from './FeedbackCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgUrl1 from "../assets/images/testimonial-1.jpg"
import imgUrl2 from "../assets/images/testimonial-2.jpg"
import imgUrl3 from "../assets/images/testimonial-3.jpg"
import imgUrl4 from "../assets/images/testimonial-4.jpg"

const data = [
  {
    img:imgUrl1,
    heading:"Jessica Brown",
    subHeading: "Co Founder",
    para:"There are many variations of passages of available but the free majority have suffered alteration in some form believable."
  },
  {
    img:imgUrl2,
    heading:"Jessica Brown",
    subHeading: "Co Founder",
    para:"There are many variations of passages of available but the free majority have suffered alteration in some form believable."
  },
  {
    img:imgUrl3,
    heading:"Jessica Brown",
    subHeading: "Co Founder",
    para:"There are many variations of passages of available but the free majority have suffered alteration in some form believable."
  },
  {
    img:imgUrl4,
    heading:"Jessica Brown",
    subHeading: "Co Founder",
    para:"There are many variations of passages of available but the free majority have suffered alteration in some form believable."
  },
]

const FeedbackCardSlider = () => {

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
       {
        data.map((items,index)=>{
          return (
            <div key={index} className='border-[#0000000d] border shadow-sm'>
              <FeedbackCard items = {items}/>
            </div>
          )
        })
       }
      </Slider>
    </div>
  )
}

export default FeedbackCardSlider