import Image from "next/image";
import ArrowLinkRed from "../../assets/arrowLinkRed.svg";

export const ServicesOffersList = () => {
  return (
    <div
      id="services-offers-list"
      className="bg-red-800 self-stretch flex w-full flex-col items-center mt-36 px-5 py-12 max-md:max-w-full max-md:mt-10"
    >
      <div className="flex w-full max-w-[1200px] items-stretch justify-between gap-5 md:mt-12 md:mb-12 max-md:max-w-full max-md:flex-wrap">
        <div className="flex grow basis-[0%] flex-col">
          <div className="bg-orange-100 flex w-[100px] shrink-0 h-2 flex-col self-start" />
          <div className="text-orange-100 text-6xl font-extrabold leading-[71px] uppercase self-stretch mt-9 max-md:text-4xl max-md:leading-[57px]">
            Services & Offers
          </div>
          <div className="text-orange-100 text-lg leading-7 self-stretch mt-6">
            We will help you with finding a solution and solving your problem.
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-7 self-end max-md:max-w-full">
          <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                01
              </div>
              <div className="text-orange-100 text-3xl leading-8 self-center my-auto">
                Reliable and Timely transportation
              </div>
            </div>
            <div className="items-center bg-orange-100 hidden md:flex aspect-square flex-col mt-2.5 p-3 rounded-[69px] self-center">
              {/* <Image src={ArrowLinkRed} alt="/" /> */}
            </div>
          </div>
          <div className="text-orange-100 text-lg leading-7 mt-5 max-md:max-w-full">
            At Dream Big Transportation Inc, we offer a comprehensive range of
            transportation and logistics services tailored to meet the unique
            requirements of our clients.
          </div>
          <div className="bg-orange-100 shrink-0 h-px mt-10 max-md:max-w-full max-md:mt-10" />
          <div className="flex w-full items-stretch justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                02
              </div>
              <div className="text-orange-100 text-3xl leading-8 mt-3 self-start">
                Safe and Efficient delivery
              </div>
            </div>
            <div className="items-center bg-orange-100 hidden md:flex aspect-square flex-col p-3 rounded-[69px] self-center">
              {/* <Image src={ArrowLinkRed} alt="/" /> */}
            </div>
          </div>
          <div className="bg-orange-100 shrink-0 h-px mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="flex w-full items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                03
              </div>
              <div className="text-orange-100 text-3xl leading-8 self-center my-auto">
                A fleet of 45 power units and a team of experienced drivers
              </div>
            </div>
            <div className="items-center bg-orange-100 self-center hidden md:flex aspect-square flex-col my-auto p-3 rounded-[69px]">
              {/* <Image src={ArrowLinkRed} alt="/" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
