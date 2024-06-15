import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ServiceCard from './ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import serviceImg1 from '../assets/images/serviceImg1.jpg'
import serviceImg2 from '../assets/images/serviceImg2.jpg'
import serviceImg3 from '../assets/images/serviceImg3.jpg'
import serviceImg4 from '../assets/images/serviceImg4.jpg'
import serviceImg5 from '../assets/images/serviceImg5.jpg'
import serviceImg6 from '../assets/images/serviceImg6.jpg'
import serviceImg7 from '../assets/images/serviceImg7.jpg'
import { faHandsHoldingChild ,faUserGraduate, faUserTie, faLandmark, faCheckToSlot, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    img: serviceImg1,
    icon: faHandsHoldingChild,
    heading: "8th to 9th",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg2,
    icon: faHandsHoldingChild,
    heading: "10th to 12th",
    para: "Looking for the perfectstream and subjects you will enjoy? Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg3,
    icon: faUserGraduate,
    heading: "graduate",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg4,
    icon: faUserTie,
    heading: "working professionals",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg5,
    icon: faLandmark,
    heading: "for government",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg6,
    icon: faCheckToSlot,
    heading: "certified programs",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
  {
    img: serviceImg7,
    icon: faScrewdriverWrench,
    heading: "corporate training",
    para: "Looking for the perfectstream and subjects you will enjoy?"
  },
]

const ServiceCardSlider = () => {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div className="slider-container">
      <Slider  ref={slider => {
          sliderRef = slider;
        }} {...settings}>
       {
        data.map((items,index)=>{
          return (
            <div key={index}>
              <ServiceCard items = {items}/>
            </div>
          )
        })
       }
      </Slider>
      <div style={{ textAlign: "center", margin: "2% 0" }}>
        <button className="button m-1 bg-white p-2  hover:bg-primary ease-in duration-500" onClick={previous}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <button className="button m-1 bg-white p-2  hover:bg-primary ease-in duration-500" onClick={next}>
        <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </div>
  );
}

export default ServiceCardSlider