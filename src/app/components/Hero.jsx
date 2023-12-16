"use client";
import Image from "next/image";
import ArrowDownSVG from "../../assets/arrowDown.svg";
import { Socials } from "./Socials";
import { handleScrollToView } from "../helpers/scrollToView";

export const Hero = () => {
  return (
    <div className="relative self-center flex w-full max-w-[1200px] gap-0 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
      <div className=" z-2 z-[1] flex mr-0 grow basis-[0%] flex-col max-md:max-w-full">
        <div className="bg-red-800 flex w-[200px] shrink-0 h-2.5 flex-col" />
        <div className="stroke-[#EEE8D2] md:py-28 md:px-6 bg-cover bg-center w-[112%] h-full md:bg-[url('../assets/2-trucks.jpg')] text-red-800 text-7xl font-extrabold leading-[90px] tracking-[7.2px] uppercase self-stretch md:mt-10 max-md:max-w-full max-md:text-5xl max-md:leading-[55px] max-md:mt-10">
          <div
            style={{
              textShadow:
                "-1px -1px 0 #EEE8D2, 1px -1px 0 #EEE8D2, -1px 1px 0 #EEE8D2, 1px 1px 0 #EEE8D2",
            }}
          className="stroke-[#EEE8D2] py-2 md:pt-2 bg-cover bg-center w-full md:bg-none bg-[url('../assets/2-trucks.jpg')] text-red-800 text-7xl font-extrabold leading-[90px] tracking-[7.2px] uppercase self-stretch max-md:max-w-full md:max-md:mt-10"
        >
          Dream big with us
          </div>
          <div
            style={{
              textShadow:
                "-1px -1px 0 #EEE8D2, 1px -1px 0 #EEE8D2, -1px 1px 0 #EEE8D2, 1px 1px 0 #EEE8D2",
            }}
            className="text-red-800 text-base md:text-2xl md:leading-9 self-stretch mt-11 max-md:max-w-full max-md:mt-6"
          >
            <span className="">Ride with </span>
            <span className="font-extrabold">Dream Big Transportation</span>
            <span className="">
              {" "}
              - Your Trusted Partner, Ensuring Safe and Secure Journeys!
            </span>
          </div>
        </div>

        <div
          onClick={() => handleScrollToView("contact-form")}
          className="text-orange-100 cursor-pointer text-2xl font-bold leading-9 tracking-[2.4px] uppercase whitespace-nowrap items-center bg-red-800 w-[200px] mt-6 px-5 py-5"
        >
          Let’s Talk
        </div>
        <div className="text-black text-2xl font-bold leading-9 self-stretch whitespace-nowrap mt-20 max-md:max-w-full max-md:mt-10">
          Follow us
        </div>
        <div className="py-2"></div>
        <Socials />
      </div>
      <div className="hidden md:block z-10 relative top-[420px]">
        <Image
          onClick={() => handleScrollToView("job-offers-list")}
          className="cursor-pointer"
          src={ArrowDownSVG}
          alt="arrow-down"
        />
      </div>
    </div>
  );
};
