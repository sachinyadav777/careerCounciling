import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" relative landing bg-contact-bg bg-no-repeat bg-cover bg-center">
        <div className=" static w-full h-full bg-[#00000086] landing-main-section">
          <div className="landing-main-heading pt-[160px] pb-[130px] ">
            <h1 className="text-center text-white text-4xl font-semibold">
              contact
            </h1>
          </div>
          <div className="landing-main-links flex pb-[30px] text-white font-normal pl-[20px]">
            <a href="#" className=" mr-[13px]">
              Treck
            </a>
            <span className=" text-gray-500">/</span>
            <a href="#" className=" ml-3">
              contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
