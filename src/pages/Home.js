import React from 'react'
import Carausel from '../components/Carausel'
import img1 from '../assets/images/backgroundImg1.jpeg'
import img2 from '../assets/images/backgroundImg2.jpeg'
import img3 from '../assets/images/backgroundImg3.png'
import About from '../components/About'
import ServiceCard from '../components/ServiceCard'
import Service from '../components/Service'

const items = [
  {
    imageURL: img1,
    para: "Working together for your better life",
    heading1: "Struggling in life?",
    heading2: "I can help.",
  },
  {
    imageURL: img2,
    para: "Working together for your better life",
    heading1: "Struggling in life?",
    heading2: "I can help.",
  },
  {
    imageURL: img3,
    para: "Working together for your better life",
    heading1: "Struggling in life?",
    heading2: "I can help.",
  }
]

const Home = () => {
  return (
    <div>
      <Carausel items={items} />
      <About />
      <Service />
    </div>
  )
}

export default Home