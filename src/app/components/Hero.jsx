"use client";
import Image from "next/image";
import HeroImage from "../../assets/yellow-main.jpg";
import ArrowDownSVG from "../../assets/arrowDown.svg";
import { Socials } from "./Socials";

export const Hero = () => {
  const handleClick = () => {
    const targetElement = document.getElementById("job-offers-list");
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative self-center flex w-full max-w-[1200px] gap-0 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
      <div className=" z-2 z-[1] flex mr-0 grow basis-[0%] flex-col mt-24 max-md:max-w-full max-md:mt-10">
        <div className="bg-red-800 flex w-[200px] shrink-0 h-2.5 flex-col" />
        <div
          style={{
            textShadow:
              "-1px -1px 0 #EEE8D2, 1px -1px 0 #EEE8D2, -1px 1px 0 #EEE8D2, 1px 1px 0 #EEE8D2",
          }}
          className="stroke-[#EEE8D2] text-red-800 text-7xl font-extrabold leading-[90px] tracking-[7.2px] uppercase self-stretch mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10"
        >
          Dream big <br/> with us
        </div>
        <div className="text-red-800 text-2xl leading-9 self-stretch mt-11 max-w-[340px] max-md:max-w-full max-md:mt-10">
          <span className="">Ride with </span>
          <span className="font-extrabold">Dream Big Transportation</span>
          <span className="">
            {" "}
            - Your Trusted Partner, Ensuring Safe and Secure Journeys!
          </span>
        </div>
        <div className="text-orange-100 text-2xl font-bold leading-9 tracking-[2.4px] uppercase whitespace-nowrap items-center bg-red-800 w-[200px] mt-6 px-5 py-5">
          Let’s Talk
        </div>
        <div className="text-black text-2xl font-bold leading-9 self-stretch whitespace-nowrap mt-20 max-md:max-w-full max-md:mt-10">
          Follow us
        </div>
        <div className="py-2"></div>
        <Socials />
      </div>
      <Image className="absolute ml-80" width={772} src={HeroImage} alt="" />
      <Image
        onClick={handleClick}
        className="relative cursor-pointer  top-[110px]"
        src={ArrowDownSVG}
        alt=""
      />
    </div>
  );
};
