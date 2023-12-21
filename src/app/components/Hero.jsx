"use client";
import Image from "next/image";
import ArrowDownSVG from "../../assets/arrowDown.svg";
import HeroImage from "../../assets/2-trucks.jpg";
import { Socials } from "./Socials";
import { handleScrollToView } from "../helpers/scrollToView";

export const Hero = () => {
  return (
    <>
      <div className="relative self-center flex w-full max-w-[1200px] gap-0 px-5 mt-5 md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center ">
        <div className=" z-2 z-[1] flex mr-0 grow basis-[0%] flex-col max-md:max-w-full">
          <div className="stroke-[#D5CFB9] stoke-2 h-full text-red-800 max-md:max-w-full">
            <div
              style={{
                textShadow:
                  "-1px -1px 0 #D5CFB9, 1px -1px 0 #D5CFB9, -1px 1px 0 #D5CFB9, 1px 1px 0 #D5CFB9",
              }}
              className="stroke-[#D5CFB9] py-2 bg-cover bg-center w-full text-red-800 text-5xl leading-[1.1] md:text-8xl tracking-[6px] md:tracking-[8px] lg:tracking-[10px] font-extrabold  uppercase self-stretch max-md:max-w-full"
            >
              Dream big with us
            </div>
            <div className="bg-red-800 flex shrink-0 w-full h-1 md:h-2.5 flex-col" />

            <div
               style={{
                textShadow:
                  "-1px -1px 0 #D5CFB9, 1px -1px 0 #D5CFB9, -1px 1px 0 #D5CFB9, 1px 1px 0 #D5CFB9",
              }}
              className="text-red-800 text-base md:text-2xl md:leading-7 self-stretch my-6 max-md:max-w-full max-md:mt-6"
            >
              <span className="">Ride with </span>
              <span className="font-extrabold">Dream Big Transportation </span>
              <span className="">
                - Your Trusted Partner, Ensuring Safe and Secure Journeys!
              </span>
            </div>
          </div>

          <Image src={HeroImage} alt="hero image of 2 trucks" />
          <div className="flex justify-between mt-6 md:mt-0">
            <div
              onClick={() => handleScrollToView("contact-form")}
              className="text-orange-100 cursor-pointer self-center text-2xl font-bold leading-9 tracking-[2.4px] uppercase whitespace-nowrap items-center bg-red-800 w-[200px] px-5 py-5"
            >
              Let’s Talk
            </div>
            <div className="hidden md:block z-10 relative left-1 top-[-60px]">
              <Image
                onClick={() => handleScrollToView("job-offers-list")}
                className="cursor-pointer"
                src={ArrowDownSVG}
                alt="arrow-down"
              />
            </div>
          </div>
          <div className="text-black text-2xl font-bold leading-9 self-stretch whitespace-nowrap max-md:max-w-full max-md:mt-10">
            Follow us
          </div>
          <div className="py-2"></div>
          <Socials />
        </div>
      </div>
    </>
  );
};
