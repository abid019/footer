import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [text,setText] = useState("");
  const handleSubmit = ()=>{
    console.log(text);
  }
  return (
    <>
    <div className="w-100% h-[500px]  lg:overflow-hidden mt-[450px] relative  text-left text-lg text-dimgray font-h4">
      <div className="w-full absolute bottom-[0px] left-[0px] bg-c4 w-100% flex flex-col items-center justify-center overflow-hidden py-[1.8rem] px-[3rem]">
        <div className="flex flex-col items-center justify-start gap-[50px_0px]">
          <div className="flex sm:gap-14 sm:justify-between md:flex-row lg:flex-row sm:flex-col-reverse items-center justify-start gap-[0rem_1rem]">   
            <div className="flex hidden lg:block flex-col items-start justify-start gap-[1rem_0rem] text-5xl">
              <img
                className="w-[90px] relative h-[62px] object-cover"
                alt=""
                src="/screen-shot-042623-at-07-2@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <b className="w-[416px] relative tracking-[0.2px] leading-[30px] inline-block">
                  Clear your thoughts, Focus your mind, and Reduce stress!
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0rem_2rem]">
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <b className="relative leading-[20px]">Quick Links</b>
                <Link to="/" className="relative text-dimgray no-underline leading-[25px]">Home</Link>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">Community</Link>
                <Link to="#" className="relative text-dimgray no-underline text-mid-6">Courses</Link>
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.5rem_0rem]">
                <b className="relative leading-[20px]">Company</b>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">About us</Link>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">Contact us</Link>
              </div>
              <div className="flex flex-col items-start justify-center gap-[0.5rem_0rem]">
                <b className="relative leading-[20px]">Further information</b>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">{`Terms & Conditions`}</Link>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">Privacy policy</Link>
                <Link to="#" className="relative text-dimgray no-underline leading-[25px]">Cookies policy</Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem_0rem]">
              <b className="relative leading-[20px]">Need help?</b>
              <div className="w-[415px] relative h-[46px] text-[14px] text-white">
                <input 
                  className="absolute top-[0px] outline-none  left-[0px] rounded-lg bg-gray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[411.5px] h-[42.8px]" placeholder="Your email address" 
                  onChange={(e)=>setText(e.target.value)}
                  />
                <button type="submit" onClick={handleSubmit} className="absolute text-white top-[0.2px] left-[calc(50%_+_51.7px)] rounded-lg bg-c3 w-[155.8px] h-[45.8px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-5 box-border text-5xl">
                  <b className="relative capitalize">submit</b>
                </button>
              </div>
              <div className="flex flex-row items-center justify-start gap-[0px_35.19px]">
                <a href="#">
                  <img
                    className="w-[26.4px] relative h-[26.4px] overflow-hidden shrink-0 cursor-pointer "
                    alt=""
                    src="/svg8.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-[26.4px] relative h-[26.4px] overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    src="/layer-1.svg"
                  />
                </a>
                <a href="#">
                  <img
                    className="w-[26.4px] relative h-[26.4px] overflow-hidden shrink-0 cursor-pointer"
                    alt=""
                    src="/svg8.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="invisible  lg:visible w-[410px] h-4 flex flex-row items-center justify-start gap-[0px_8px] text-sm-2">
            <div className="flex flex-row items-center justify-start gap-[0px_4.4px]">
              <img
                className="w-[11px] relative h-[11px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/frame@2x.png"
              />
              <div className="relative">Copyright 2023</div>
            </div>
            <div className="w-[8.8px] relative rounded-[50%] bg-dimgray h-[8.8px]" />
            <div className="relative">MindBlowing Mornings</div>
            <div className="w-[8.8px] relative rounded-[50%] bg-dimgray h-[8.8px]" />
            <div className="relative">All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Footer;
