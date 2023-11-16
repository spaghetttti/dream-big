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
              <div className="text-orange-100 text-lg font-medium leading-7 self-stretch mt-7 max-md:max-w-full">
                What people say about us
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden self-stretch mt-14 max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-48 max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d7634ce-3e88-493b-8e5f-591c8dffe73d?"
                className="aspect-square object-contain object-center w-[45px] overflow-hidden max-w-full"
              />
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
                  <div className="text-orange-100 text-lg font-medium leading-6 whitespace-nowrap mt-2.5">
                    Dedicated Driver at Dream Big Transportation
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97a4bd37-d197-4447-8575-6596f42142e9?"
                  className="aspect-[2.31] object-contain object-center w-[150px] overflow-hidden self-stretch shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
