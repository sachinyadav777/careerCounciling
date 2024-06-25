import React from "react";
import { Link } from "react-router-dom";

const PageLanding = ({ PageLandingHeading, imgUrl }) => {
  const contactImages = {
    contactImage: "bg-contact-bg",
  };

  return (
    <div>
      <div
        className={` relative landing ${contactImages[imgUrl]}  bg-no-repeat bg-cover bg-center`}
      >
        <div className=" static w-full h-full bg-[#00000086] landing-main-section">
          <div className="landing-main-heading pt-[160px] pb-[130px] ">
            <h1 className="text-center text-white text-4xl font-semibold">
              {PageLandingHeading}
            </h1>
          </div>
          <div className="landing-main-links flex pb-[30px] text-white font-normal pl-[20px]">
            <Link to="" className=" mr-[13px]">
              Treck
            </Link>
            <span className=" text-gray-500">/</span>
            <Link to="" className=" ml-3">
              {PageLandingHeading}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLanding;
