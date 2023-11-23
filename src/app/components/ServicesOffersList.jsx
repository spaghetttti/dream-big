import Image from "next/image";
import ArrowLinkRed from "../../assets/arrowLinkRed.svg";

export const ServicesOffersList = () => {
  return (
    <div
      id="services-offers-list"
      className="bg-red-800 self-stretch flex w-full flex-col items-center mt-36 px-5 py-12 max-md:max-w-full max-md:mt-10"
    >
      <div className="flex w-full max-w-[1200px] items-stretch justify-between gap-5 mt-12 mb-12 max-md:max-w-full max-md:flex-wrap max-md:my-10">
        <div className="flex grow basis-[0%] flex-col">
          <div className="bg-orange-100 flex w-[100px] shrink-0 h-2 flex-col self-start" />
          <div className="text-orange-100 text-6xl font-extrabold leading-[71px] uppercase self-stretch mt-9 max-md:text-4xl max-md:leading-[57px]">
            Services & Offers
          </div>
          <div className="text-orange-100 text-lg leading-7 self-stretch mt-6">
            We will help you with finding a solution and solving your problem.
          </div>
          <div className="text-red-800 text-center text-2xl font-bold leading-8 uppercase self-stretch items-center mt-24 px-5 py-12 rounded-[50%] max-md:mt-10">
            Let’s
            <br />
            Talk
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch mt-7 self-end max-md:max-w-full">
          <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                01
              </div>
              <div className="text-orange-100 text-3xl leading-8 self-center whitespace-nowrap my-auto">
                Transportation of goods
              </div>
            </div>
            <div className="items-center bg-orange-100 flex aspect-square flex-col mt-2.5 p-3 rounded-[69px] self-start">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8098ffe8-eb53-4495-9f22-795bb69ecc78?"
                className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-red-800 overflow-hidden"
              /> */}
              <Image src={ArrowLinkRed} alt="/" />
            </div>
          </div>
          <div className="text-orange-100 text-lg leading-7 mt-5 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </div>
          <div className="bg-orange-100 shrink-0 h-px mt-10 max-md:max-w-full max-md:mt-10" />
          <div className="flex w-full items-stretch justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                02
              </div>
              <div className="text-orange-100 text-3xl leading-8 whitespace-nowrap mt-3 self-start">
                Transportation of goods
              </div>
            </div>
            <div className="items-center bg-orange-100 flex aspect-square flex-col p-3 rounded-[69px] self-start">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a22f4cee-34ec-4f78-bb83-605c145065d7?"
                className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-red-800 overflow-hidden"
              /> */}
              <Image src={ArrowLinkRed} alt="/" />

            </div>
          </div>
          <div className="bg-orange-100 shrink-0 h-px mt-12 max-md:max-w-full max-md:mt-10" />
          <div className="flex w-full items-stretch justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-6xl font-bold leading-[71px] uppercase max-md:text-4xl max-md:leading-[57px]">
                03
              </div>
              <div className="text-orange-100 text-3xl leading-8 self-center whitespace-nowrap my-auto">
                Transportation of goods
              </div>
            </div>
            <div className="items-center bg-orange-100 self-center flex aspect-square flex-col my-auto p-3 rounded-[69px]">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27bcd311-3d74-43ee-bea6-93d0d5304dd4?"
                className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-red-800 overflow-hidden"
              /> */}
              <Image src={ArrowLinkRed} alt="/" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
