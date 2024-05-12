import React from 'react'
import Buttons from '../components/Buttons'
import UnderlineDecoration from '../components/UnderlineDecoration'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee , faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { Email } from '@mui/icons-material';

const Home = () => {
  return (
    <div className='text-center'>
      <h2 className='heading'>i am in home</h2>
      <h2 className='sub-heading'>i am in home</h2>
      <p className='text'>i am in home</p>
      <Buttons text="Book Appointment" bgColor="primary" color="textWhite" afterBg="afterBgBlack" />
      <Buttons text="Discover More" bgColor="white" color="textBlack" afterBg="afterBgBlack" hoverText='hoverTextWhite' />
      <Buttons text="Discover More" bgColor="black" color="textWhite" afterBg="afterBgWhite" hoverText='hoverTextBlack' />
      <UnderlineDecoration />
      <FontAwesomeIcon icon={faCoffee} classname= 'text-4xl' />
      <FontAwesomeIcon icon={faEnvelope} color='#e20935' bounce />
      <Email />
    </div>
  )
}

export default Home