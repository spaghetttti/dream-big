import Image from "next/image";
import PedroImage from "../../assets/pedro.jpg";
import Quotes from '../../assets/quotes.svg';
import LeftArrow from '../../assets/arrowLeft.svg';
import RightArrow from '../../assets/arrowRight.svg';


export const Testimonials = () => {
  return (
    <div className="bg-red-800 self-stretch flex w-full flex-col items-center mt-36 px-5 py-12 max-md:max-w-full max-md:mt-10">
      <div className="w-full max-w-[1200px] my-12 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="bg-orange-100 flex w-[100px] shrink-0 h-2 flex-col self-start" />
              <div className="text-orange-100 text-6xl font-extrabold leading-[71px] uppercase self-stretch mt-9 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                Testimonials
              </div>
              <div className="text-orange-100 mb-8 text-lg font-medium leading-7 self-stretch mt-7 max-md:max-w-full">
                What people say about us
              </div>
              <Image src={PedroImage} alt="/" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-48 max-md:max-w-full max-md:mt-10">
              <Image src={Quotes} alt="" />
              <div className="text-orange-100 text-3xl font-medium leading-10 self-stretch mt-10 max-md:max-w-full">
                Working with Dream Big Transportation has been an incredible
                experience. As a driver for this company, I can confidently say
                that safety and security are their utmost priorities.
              </div>
              <div className="self-stretch flex justify-between gap-5 mt-7 pr-2 max-md:max-w-full max-md:flex-wrap">
                <div className="flex grow basis-[0%] flex-col items-stretch mt-5">
                  <div className="text-orange-100 text-xl leading-6 whitespace-nowrap">
                    Sam Smith
                  </div>
                  <div className="text-orange-100 text-l md:text-lg font-medium leading-6 whitespace-nowrap mt-2.5">
                    Dedicated Driver at Dream Big Transportation
                  </div>
                </div>
                <Image src={LeftArrow} alt="/" />
                <Image src={RightArrow} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
