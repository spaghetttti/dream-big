"use client";
import Image from "next/image";
import HeroImage from "../../assets/yellow-main.jpg";
import ArrowDownSVG from "../../assets/arrowDown.svg";
import { Socials } from "./Socials";
import { handleScrollToView } from "../helpers/scrollToView";
import blueTruck from "../../assets/blue-truck-2.jpg";

export const Hero = () => {
  return (
    <div className="relative self-center flex w-full max-w-[1200px] gap-0 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
      <div className=" z-2 z-[1] flex mr-0 grow basis-[0%] flex-col mt-24 max-md:max-w-full max-md:mt-10">
        <div className="bg-red-800 flex w-[200px] shrink-0 h-2.5 flex-col" />
        <div
          style={{
            // backgroundImage: `url(${blueTruck})` ,
            textShadow:
              "-1px -1px 0 #EEE8D2, 1px -1px 0 #EEE8D2, -1px 1px 0 #EEE8D2, 1px 1px 0 #EEE8D2",
          }}
          className="stroke-[#EEE8D2] py-24  md:py-2 bg-cover bg-center w-full h-full md:bg-none bg-[url('../assets/blue-truck-2.jpg')] text-red-800 text-7xl font-extrabold leading-[90px] tracking-[7.2px] uppercase self-stretch mt-10 max-md:max-w-full max-md:text-5xl max-md:leading-[55px] max-md:mt-10"
        >
          {/* <Image
            style={{ filter: "brightness(90%)" }}
            className="z-[-1] absolute"
            width={780}
            src={blueTruck}
            alt="hero image of a truck"
          /> */}
          Dream big <br /> with us
        </div>
        <div
          style={{
            textShadow:
              "-1px -1px 0 #EEE8D2, 1px -1px 0 #EEE8D2, -1px 1px 0 #EEE8D2, 1px 1px 0 #EEE8D2",
          }}
          className="text-red-800 text-2xl leading-9 self-stretch mt-11 max-w-[340px] max-md:max-w-full max-md:mt-10"
        >
          <span className="">Ride with </span>
          <span className="font-extrabold">Dream Big Transportation</span>
          <span className="">
            {" "}
            - Your Trusted Partner, Ensuring Safe and Secure Journeys!
          </span>
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
      <Image
        // style={{ filter: "brightness(90%)" }}
        className="hidden md:block absolute md:self-center lg:ml-80"
        width={780}
        src={blueTruck}
        alt="hero image of a truck"
      />
      <div className="hidden md:block relative top-[410px]">
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
