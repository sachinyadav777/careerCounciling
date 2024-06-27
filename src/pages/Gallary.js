import React from "react";
import PageLanding from "../components/PageLanding";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import gallary1 from "../assets/images/gallery-page-1.jpg";
import gallary2 from "../assets/images/gallery-page-2.jpg";
import gallary3 from "../assets/images/gallery-page-3.jpg";
import gallary4 from "../assets/images/gallery-page-4.jpg";
import gallary5 from "../assets/images/gallery-page-5.jpg";
import gallary6 from "../assets/images/gallery-page-6.jpg";
import gallary7 from "../assets/images/gallery-page-7.jpg";
import gallary8 from "../assets/images/gallery-page-8.jpg";
import gallary9 from "../assets/images/gallery-page-9.jpg";
import gallary10 from "../assets/images/gallery-page-10.jpg";

const Gallary = () => {
  const pluseClick = function () {
    return;
  };

  return (
    <div>
      <PageLanding PageLandingHeading="Gallary" imgUrl="contactImage" />
      <div className="gallary-page p-[120px_15px_110px] max-w-[1572px]">
        <div className="gallary-page-container grid grid-cols-4 grid-rows-3">
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary1} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2 col-start-2 row-span-2">
            <img className=" absolute w-full h-full" src={gallary2} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary3} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary4} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary5} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary6} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary7} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2 col-span-2">
            <img className=" absolute w-full h-full" src={gallary9} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className=" gallary-effect hover:before:duration-400 relative m-2">
            <img className=" absolute h-full" src={gallary8} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="gallary-effect hover:before:duration-400 relative m-2">
            <img className="" src={gallary8} alt="1" />
            <div className="gallary-icon" onclick={pluseClick}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          {/* {itemImg.map((data, index) => {
            return (
              <div>
                <img src={data.imgUrl} alt={`gallery-${index}`} />
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
