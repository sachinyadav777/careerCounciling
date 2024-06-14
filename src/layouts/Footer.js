import React, { useEffect } from "react";
import logo from "../assets/images/footer-logo.png";
import img from "../assets/images/footer-img.jpg";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faYoutube,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className=" bg-heading font-plus" data-aos="fade-up">
      <div className="sm:flex sm:flex-wrap p-[5%] min-[1176px]:grid grid-flow-col ">
        <div className="p-2 m-2">
          <img src={logo} alt="logo" className="pb-4 mb-4" />
          <div className="w-[255px] -mt-3">
            <p className="text-text pb-4 mb-4 text-sm leading-8">
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt.
            </p>
          </div>

          <div className="flex">
            <Link
              to=""
              className="relative z-10 overflow-hidden w-10 h-10 rounded-full bg-heading border-primary border-2 inline-block leading-9 text-center mx-1 text-white group hover:text-primary ease-in duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} className="" />
              <div className=" absolute top-0 bottom-0 left-0 right-0 group-hover:background -z-10"></div>
            </Link>
            <Link
              to=""
              className="relative z-10 overflow-hidden w-10 h-10 rounded-full bg-heading border-primary border-2 inline-block leading-9 text-center mx-1 text-white group hover:text-primary ease-in duration-300"
            >
              <FontAwesomeIcon icon={faTwitter} className="" />
              <div className=" absolute top-0 bottom-0 left-0 right-0 group-hover:background -z-10"></div>
            </Link>
            <Link
              to=""
              className="relative z-10 overflow-hidden w-10 h-10 rounded-full bg-heading border-primary border-2 inline-block leading-9 text-center mx-1 text-white group hover:text-primary ease-in duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} className="" />
              <div className=" absolute top-0 bottom-0 left-0 right-0 group-hover:background -z-10"></div>
            </Link>
            <Link
              to=""
              className="relative z-10 overflow-hidden w-10 h-10 rounded-full bg-heading border-primary border-2 inline-block leading-9 text-center mx-1 text-white group hover:text-primary ease-in duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} className="" />
              <div className=" absolute top-0 bottom-0 left-0 right-0 group-hover:background -z-10"></div>
            </Link>
          </div>
        </div>
        <div className="p-2 m-2">
          <h3 className="text-white pb-4 mb-4 text-lg">Explore</h3>
          <ul>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Blog
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Gallary
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Videos
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                Notes
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2 m-2">
          <h3 className="text-white pb-4 mb-4 text-lg">Services</h3>
          <ul>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                8th to 9th
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                10th to 12th
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                graduate
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                working professionals
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                for government
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                certified programs
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to=""
                className="text-text text-sm hover:text-white ease-in duration-75 "
              >
                corporate training
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-2 m-2">
          <h3 className="text-white pb-4 mb-4 text-lg">Gallary</h3>
          <div className="flex flex-wrap w-[260px]">
            <img className="mr-2 my-2" src={img} alt="gallary" />
            <img className="m-2" src={img} alt="gallary" />
            <img className="m-2" src={img} alt="gallary" />
            <img className="mr-2 my-2" src={img} alt="gallary" />
            <img className="m-2" src={img} alt="gallary" />
            <img className="m-2" src={img} alt="gallary" />
          </div>
        </div>
        <div className="p-2 m-2">
          <h3 className="text-white pb-4 mb-4 text-lg">Contact</h3>
          <ul>
            <li>
              <Link to="" className="flex items-center mb-2 pb-2 text-primary">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="text-text text-sm hover:text-white ease-in duration-75 ml-3">
                  sachinyadav@gmail.com
                </p>
              </Link>
            </li>
            <li className="flex items-center mb-2 pb-2 text-primary">
              <FontAwesomeIcon icon={faLocationDot} />
              <p className="text-text text-sm ml-3">
                30 Commercial Road Fratton, Australia
              </p>
            </li>
            <li className="flex items-center mb-2 pb-2 text-primary">
              <FontAwesomeIcon icon={faClock} />
              <p className="text-text text-sm ml-3">
                Mon - Sat: 8:00 am to 6:00 pmSunday: Closed
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-[#121315] px-[5%] py-[2.5%]">
        <p className="text-text text-base">
          © All Copyright 2023 by Treck WordPress
        </p>
      </div>
    </div>
  );
};

export default Footer;
