import React from "react";
import Buttons from "./Buttons";

const Form = () => {
  return (
    <form
      action=""
      className=" max-w-[800px] px-[15px] m-[0_auto] flex flex-col"
    >
      <div className=" flex-col lg:flex-row flex lg:gap-4">
        <input
          className=" bg-back w-[-webkit-fill-available] m-[0_0_20px] p-[2px_30px] h-[52px] border-none placeholder-text text-text outline-none text-[14px] font-[500]"
          type="text"
          placeholder="Name"
        />
        <input
          className=" bg-back w-[-webkit-fill-available] m-[0_0_20px] p-[2px_30px] h-[52px] border-none placeholder-text text-text outline-none text-[14px] font-[500]"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className=" flex-col lg:flex-row flex lg:gap-4">
        <input
          className=" bg-back w-[-webkit-fill-available] m-[0_0_20px] p-[2px_30px] h-[52px] border-none placeholder-text text-text outline-none text-[14px] font-[500]"
          type="text"
          placeholder="Number"
        />
        <input
          className=" bg-back w-[-webkit-fill-available] m-[0_0_20px] p-[2px_30px] h-[52px] border-none placeholder-text text-text outline-none text-[14px] font-[500]"
          type="text"
          placeholder="Subject"
        />
      </div>
      <textarea
        cols="40"
        rows="7"
        className=" bg-back resize-none p-[20px_30px_30px] border-none placeholder-text text-text outline-none text-[14px] font-[500]"
        name="message"
        id="message"
        placeholder="Write a Message"
      ></textarea>
      <div className="mt-[20px] text-center">
        {" "}
        <Buttons
          text="Send a Message"
          bgColor="primary"
          color="textWhite"
          afterBg="afterBgBlack"
        />{" "}
      </div>
    </form>
  );
};

export default Form;
