export const Hero = () => {
  return (
    <div className="self-center flex w-full max-w-[1200px] gap-0 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
      <div className="z-[1] flex mr-0 grow basis-[0%] flex-col mt-24 max-md:max-w-full max-md:mt-10">
        <div className="bg-red-800 flex w-[200px] shrink-0 h-2.5 flex-col" />
        <div className="text-red-800 text-7xl font-extrabold leading-[90px] tracking-[7.2px] uppercase self-stretch mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10">
          Dream big with us
        </div>
        <div className="text-red-800 text-2xl leading-9 self-stretch mt-11 max-md:max-w-full max-md:mt-10">
          <span className="">Ride with </span>
          <span className="font-extrabold">Dream Big Transportation</span>
          <span className="">
            {" "}
            - Your Trusted Partner, Ensuring Safe and Secure Journeys!
          </span>
        </div>
        <div className="text-orange-100 text-2xl font-bold leading-9 tracking-[2.4000000000000004px] uppercase whitespace-nowrap items-center bg-red-800 w-[229px] max-w-full mt-6 px-5 py-5">
          Let’s Talk
        </div>
        <div className="text-black text-2xl font-bold leading-9 self-stretch whitespace-nowrap mt-20 max-md:max-w-full max-md:mt-10">
          Follow us
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d289a9d6-ba9f-4a44-9607-d0fce6f1ce93?"
          className="aspect-[7.23] object-contain object-center w-[217px] overflow-hidden max-w-full mt-6"
        />
      </div>

      <img
        loading="lazy"
        srcSet="..."
        className="aspect-[1.01] object-contain object-center w-full overflow-hidden self-stretch mr-0 grow basis-[0%] max-md:max-w-full"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aba3a8f-51de-40d3-86e6-eb72b1ac7c66?"
        className="aspect-square object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full mt-[539px] self-start max-md:mt-10"
      />
    </div>
  );
};
