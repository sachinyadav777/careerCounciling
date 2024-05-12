import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({text , bgColor , color , afterBg, hoverText}) => {
 //object mapping color classses for tailwind css...
 const colorVariant = {
    primary: 'bg-primary',
    white: 'bg-white',
    black: 'bg-black',
    textWhite: 'text-white',
    textBlack: 'text-black',
    afterBgBlack: 'after:bg-black',
    afterBgWhite: 'after:bg-white',
    hoverTextWhite: 'hover:text-white',
    hoverTextBlack: 'hover:text-black',

 }

  return (
   
        <Link to="">
            <button 
            className={`relative ${colorVariant[bgColor]} ${colorVariant[color]} pt-[13px] px-[43px] pb-[13px]  font-semibold text-[15px] overflow-hidden z-10 after:-z-10 ${colorVariant[afterBg]} after:transition-all  after:duration-500 after:ease-linear after:w-[200%] after:h-[200%] after:absolute after:rounded-[50%] after:left-2/4 after:-translate-x-2/4 after:top-[110%] hover:after:top-[-50%]  ${colorVariant[hoverText]}`}>
            {text}</button>
        </Link>
   
  )
}

export default Buttons