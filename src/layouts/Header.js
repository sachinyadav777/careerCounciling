import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faChevronUp,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo-dark.png";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

function Header() {
  const [open, setopen] = useState(false);
  const [click, setclick] = useState(false);

  const toggleMenu = () => {
    setopen(!open);
    // Disable scrolling when menu is open
    if (!open) {
      console.log(open);
      document.body.classList.add("overflowHide");
      document.getElementById("root").classList.add("overflowHide");
    } else {
      document.body.classList.remove("overflowHide");
      document.getElementById("root").classList.remove("overflowHide");
    }
  };

  // function for click resources in mobile devices
  const ResourceClick = () => {
    if (open) {
      setclick(!click);
    }
    console.log(click);
  };

  return (
    <>
      {/* top header */}
      <div className="md:flex justify-between items-center bg-back p-1 px-4 hidden ">
        <div>
          <Link to="" className="text-xs mx-2">
            <FontAwesomeIcon icon={faPhone} color="#e20935" bounce />{" "}
            <span className="ml-1">7423770417</span>
          </Link>
          <Link to="" className="text-xs mx-2">
            <FontAwesomeIcon icon={faEnvelope} color="#e20935" />{" "}
            <span className="ml-1">sy396610@gmail.com</span>
          </Link>
        </div>
        <div>
          <Link
            to=""
            className="text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            to=""
            className="text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            to=""
            className="text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link
            to=""
            className="text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>

      {/* header */}
      <div className="flex justify-between items-center p-4 bg-white relative z-50 md:sticky md:top-0 md:left-0  shadow-sm">
        <div className="w-32">
          <img src={logo} alt="logo" />
        </div>

        {/* menubar */}
        <div
          onClick={toggleMenu}
          className="ease-linear duration-300 lg:hidden"
        >
          <FontAwesomeIcon
            icon={open ? faClose : faBars}
            className="text-primary text-2xl"
          />
        </div>

        {/* nav bar */}
        <div
          className={`${
            open ? "visible translate-x-0 " : "invisible translate-x-60"
          } absolute z-20 top-16 right-0 bg-heading w-[60%] h-screen lg:h-auto text-text lg:block p-4 ease-linear duration-300 lg:visible lg:static lg:bg-transparent lg:w-auto lg:translate-x-0 lg:p-0 lg:z-auto`}
        >
          <nav>
            <ul className="lg:flex">
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="">Home</Link>
              </li>
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="">About Us</Link>
              </li>
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="">Services</Link>
              </li>
              <li
                onClick={ResourceClick}
                className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2 group"
              >
                <Link to="" className="py-10">
                  Resources
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className="group-hover:rotate-180 duration-500 text-xs mx-1"
                  />
                </Link>
                <div
                  className={`lg:bg-white grid lg:absolute lg:p-4 h-0 lg:top-[53px] lg:-z-10 opacity-0 lg:group-hover:visible lg:group-hover:h-28 ease-in-out lg:duration-300 group-hover:opacity-100
                 ${
                   click ? "visible h-12 opacity-100 duration-200" : "invisible"
                 } `}
                >
                  <Link to="" className="lg:py-2">
                    Videos
                  </Link>
                  <Link to="" className="lg:py-2">
                    Notes
                  </Link>
                </div>
              </li>
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="">Blog</Link>
              </li>
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="/Gallary">Gallary</Link>
              </li>
              <li className=" py-2 border-b-2 font-medium lg:py-0 lg:border-none lg:px-2 lg:mx-2">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* button */}
        <div className="hidden md:block ">
          <Buttons
            text="Book Appointment"
            bgColor="primary"
            color="textWhite"
            afterBg="afterBgBlack"
          />
        </div>
      </div>
    </>
  );
}

export default Header;

// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faPhone, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faYoutube, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import logo from '../assets/images/logo-dark.png'
// import Buttons from '../components/Buttons';
// import { Link } from 'react-router-dom';

// function Header() {
//   return (
//     <div className='relative z-50'>
//       <div className='flex justify-between items-center bg-back p-1 px-4'>
//         <div>
//           <Link to="" className='text-xs mx-2'><FontAwesomeIcon icon={faPhone} color='#e20935' bounce /> <span className='ml-1'>7423770417</span></Link>
//           <Link to="" className='text-xs mx-2'><FontAwesomeIcon icon={faEnvelope} color='#e20935' /> <span className='ml-1'>sy396610@gmail.com</span></Link>
//         </div>
//         <div>
//           <Link to="" className='text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300'><FontAwesomeIcon icon={faFacebookF} /></Link>
//           <Link to="" className='text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300'><FontAwesomeIcon icon={faTwitter} /></Link>
//           <Link to="" className='text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300'><FontAwesomeIcon icon={faYoutube} /></Link>
//           <Link to="" className='text-xs inline-block w-7 h-7 rounded-full text-center leading-7 mx-1 bg-white hover:bg-primary hover:text-white ease-in duration-300'><FontAwesomeIcon icon={faInstagram} /></Link>
//         </div>
//       </div>
//       <div className='flex justify-between items-center p-4 shadow-sm  relative bg-white'>
//         <div className='w-32'><img src={logo} alt="logo" /></div>
//         <nav>
//           <ul className='flex justify-center items-center'>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">Home</Link></li>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">About Us</Link></li>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">Services</Link></li>
//             <li className='mx-2 px-2 text-text font-medium group'>
//               <Link to="" className='py-10'>Resources
//                 <FontAwesomeIcon icon={faChevronUp} className='group-hover:rotate-180 duration-500 text-xs mx-1' />
//               </Link>
//               <div
//                 className='bg-white grid absolute p-4 -top-full -z-10 opacity-0  invisible group-hover:visible group-hover:top-full group-hover:ease-linear duration-500 group-hover:opacity-100 '>
//                 <Link to="" className='py-2'>Videos</Link>
//                 <Link to="" className='py-2'>Notes</Link>
//               </div>
//             </li>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">Blog</Link></li>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">Gallary</Link></li>
//             <li className='mx-2 px-2 text-text font-medium'><Link to="">Contact</Link></li>
//           </ul>
//         </nav>
//         <div>
//           <Buttons text="Book Appointment" bgColor="primary" color="textWhite" afterBg="afterBgBlack" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header
