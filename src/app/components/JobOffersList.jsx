"use client";
import Image from "next/image";
import threeTrucks from "../../assets/3-trucks.jpeg";
import whiteTrucks from '../../assets/white-trucks-2.jpeg';
import sunsetTruck from '../../assets/truck-night.jpeg';

import ArrowLink from "../../assets/arrowLink.svg";
import { handleScrollToView } from "../helpers/scrollToView";

export const JobOffersList = () => {
  return (
    <div
      id="job-offers-list"
      className="self-center flex w-full max-w-[1200px] flex-col mt-16 px-5 max-md:max-w-full max-md:mt-10"
    >
      <div className="bg-red-800 flex w-[100px] shrink-0 h-2 flex-col self-start" />
      <div className="text-red-800 text-6xl font-extrabold leading-[71px] uppercase self-stretch -mr-5 mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
        Join us
      </div>
      <div className="text-red-800 text-lg font-semibold leading-7 self-stretch -mr-5 mt-8 max-md:max-w-full">
        Explore options of joining our great team!
      </div>
      <div className="border self-stretch -mr-5 mt-16 border-solid border-red-800 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <Image src={threeTrucks} alt="/" />
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full md:max-md:mt-10 p-5">
              <div className="text-red-800 text-2xl md:text-3xl font-bold leading-10 self-stretch max-md:max-w-full">
                Apply as a Company Driver
              </div>
              <div className="text-black text-base leading-5 self-stretch mt-4 max-md:max-w-full">
                As a company driver, you will have the opportunity to work as
                part of our dedicated team. Enjoy the benefits of a stable
                position with consistent routes and competitive compensation.
              </div>
              <div
                onClick={() => handleScrollToView("contact-form")}
                className="flex cursor-pointer max-w-full justify-between md:justify-start items-center gap-3 mt-10 pr-5 max-md:pr-5"
              >
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  CONTACT US FOR MORE INFO
                  {/* KNOW MORE */}
                </div>
                <div className="items-center bg-red-800 flex aspect-square flex-col p-3 rounded-[69px]">
                  <Image src={ArrowLink} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border self-stretch -mr-5 mt-12 border-solid border-red-800 max-md:max-w-full max-md:mt-10 ">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto md:max-md:mt-10 p-5">
              <div className="text-red-800 text-2xl md:text-3xl font-bold leading-10">
                Become a Lease Driver
              </div>
              <div className="text-black text-base leading-5 mt-6">
                If you are ready to take the next step in your career, becoming
                a lease driver with Dream Big Transportation Inc might be the
                perfect fit. As a lease driver, you will have the opportunity to
                operate your own truck while enjoying the benefits of our
                established network and support.
              </div>
              <div
                onClick={() => handleScrollToView("contact-form")}
                className="flex cursor-pointer items-center justify-between md:justify-start gap-3 mt-10 pr-10 max-md:pr-5"
              >
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  CONTACT US FOR MORE INFO
                </div>
                <div className="items-center bg-red-800 flex aspect-square flex-col p-3 rounded-[69px]">
                  <Image src={ArrowLink} alt="/" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <Image  src={whiteTrucks} alt="/" />
          </div>
        </div>
      </div>
      <div className="border self-stretch -mr-5 mt-12 border-solid border-red-800 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <Image src={sunsetTruck} alt="/" />
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full md:max-md:mt-10 p-5">
              <div className="text-red-800 text-2xl md:text-3xl font-bold leading-10 self-stretch max-md:max-w-full">
                Join us as an Owner Operator
              </div>
              <div className="text-black text-base leading-5 self-stretch mt-4 max-md:max-w-full">
                Are you an experienced owner operator looking for a reliable
                partner? Join Dream Big Transportation Inc as an owner operator
                and leverage our resources and industry expertise.
              </div>
              <div
                onClick={() => handleScrollToView("contact-form")}
                className="flex cursor-pointer justify-between md:justify-start max-w-full items-center gap-3 mt-10 pr-4"
              >
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  CONTACT US FOR MORE INFO
                </div>
                <div className="items-center bg-red-800 flex aspect-square flex-col p-3 rounded-[69px]">
                  <Image src={ArrowLink} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-orange-100 text-2xl font-bold leading-9 uppercase whitespace-nowrap items-center bg-red-800 self-center max-w-full mt-12 px-5 py-5 max-md:mt-10">
        Browse All
      </div> */}
    </div>
  );
};
