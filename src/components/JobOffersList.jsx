import Image from "next/image";
import JobOffer1Image from "../assets/1.jpeg";
import JobOffer2Image from "../assets/2.jpeg";
import JobOffer3Image from "../assets/3.jpeg";
import ArrowLink from '../assets/arrowLink.svg'

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
            <Image src={JobOffer1Image} alt="/" />

            {/* <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.98] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            /> */}
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-red-800 text-3xl font-bold leading-10 self-stretch whitespace-nowrap max-md:max-w-full">
                Apply as a Company Driver
              </div>
              <div className="text-black text-base leading-5 self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </div>
              <div className="flex w-[274px] max-w-full items-center gap-3 mt-10 pr-5 max-md:pr-5">
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  KNOW MORE
                </div>
                <div className="items-center bg-red-800 self-stretch flex aspect-square flex-col p-3 rounded-[69px]">
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c1ef5c4-40cf-4d7b-a6e7-1f4af4736bd6?"
                    className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-orange-100 overflow-hidden"
                  /> */}
                <Image src={ArrowLink} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border self-stretch -mr-5 mt-12 pl-12 border-solid border-red-800 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="text-red-800 text-3xl font-bold leading-10 whitespace-nowrap">
                Become a Lease Driver
              </div>
              <div className="text-black text-base leading-5 mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </div>
              <div className="flex items-center justify-between gap-3 mt-10 pr-10 max-md:pr-5">
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  KNOW MORE
                </div>
                <div className="items-center bg-red-800 self-stretch flex aspect-square flex-col p-3 rounded-[69px]">
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14da133-4cbd-4041-b006-cc1fbdabb1f0?"
                    className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-orange-100 overflow-hidden"
                  /> */}
                <Image src={ArrowLink} alt="/" />

                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <Image src={JobOffer2Image} alt="/" />
          </div>
        </div>
      </div>
      <div className="border self-stretch -mr-5 mt-12 border-solid border-red-800 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
            <Image src={JobOffer3Image} alt="/" />
          </div>
          <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-red-800 text-3xl font-medium leading-10 self-stretch whitespace-nowrap max-md:max-w-full">
                Join us as an Owner Operator
              </div>
              <div className="text-black text-base leading-5 self-stretch mt-4 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </div>
              <div className="flex w-[250px] max-w-full items-center gap-3 mt-10 pr-4">
                <div className="text-red-800 text-lg font-bold leading-7 tracking-widest my-auto">
                  KNOW MORE
                </div>
                <div className="items-center bg-red-800 self-stretch flex aspect-square flex-col p-3 rounded-[69px]">
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d76f5030-4b78-4782-9272-0b747f0ec760?"
                    className="aspect-square object-contain object-center w-[11px] stroke-[2px] stroke-orange-100 overflow-hidden"
                  /> */}
                <Image src={ArrowLink} alt="/" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-orange-100 text-2xl font-bold leading-9 uppercase whitespace-nowrap items-center bg-red-800 self-center max-w-full mt-12 px-5 py-5 max-md:mt-10">
        Browse All
      </div>
    </div>
  );
};
