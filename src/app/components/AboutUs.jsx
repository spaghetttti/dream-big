export const AboutUs = () => {
  return (
    <div
    id="about-us"
      className="bg-red-800 self-stretch flex w-full flex-col items-center mt-16 px-5 py-12 max-md:max-w-full max-md:mt-10"
    >
      <div className="flex-col-reverse md:flex w-full max-w-[1200px] items-stretch justify-between md:mt-12 md:mb-12 max-md:max-w-full max-md:flex-wrap">
        <div className="flex grow basis-[0%] flex-col items-stretch mt-7 self-end max-md:max-w-full">
          <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
              <div className="text-orange-100 text-3xl leading-8 self-center whitespace-nowrap my-auto">
                Learn about our history
              </div>
            </div>
            {/* <div className="items-center bg-orange-100 flex aspect-square flex-col mt-2.5 p-3 rounded-[69px] self-start"></div> */}
          </div>
          <div className="text-orange-100 text-lg leading-7 mt-5 max-md:max-w-full">
            Dream Big Transportation Inc is an authorized carrier specializing
            in property transportation and logistics services. With a rich
            history spanning several years, we have established ourselves as a
            trusted and reliable partner in the industry. Our journey began with
            a vision to provide top-notch transportation solutions, and over
            time, we have grown steadily, expanding our operations, fleet, and
            service offerings. Today, we are known for our commitment to
            excellence, customer satisfaction, and maintaining the highest
            standards of safety and professionalism.
          </div>
          <div className="bg-orange-100 shrink-0 h-px mt-10 max-md:max-w-full max-md:mt-10" />
        </div>
        <div className="flex grow basis-[0%] flex-col text-right">
          <div className="bg-orange-100 flex w-[100px] shrink-0 h-2 flex-col self-end" />
          <div className="text-orange-100 text-6xl font-extrabold leading-[71px] uppercase self-stretch mt-9 max-md:text-4xl max-md:leading-[57px]">
            About Us
          </div>
          <div className="text-orange-100 text-lg leading-7 self-stretch mt-6">
            We will help you with finding a solution and solving your problem.
          </div>
        </div>
      </div>
    </div>
  );
};
