import { Socials } from "./Socials";


export const Footer = () => {
  return (
    <div className="self-center flex w-full max-w-[1199px] justify-center md:justify-between gap-5 md:my-9 max-md:max-w-full max-md:flex-wrap">
      <div className="flex items-start justify-between gap-5 mt-2.5 px-5 max-md:justify-center">
        <div className="text-red-800 text-base font-medium leading-5 self-start">
          Home
        </div>
        <div className="text-red-800 text-base font-medium leading-5 self-start">
          Services
        </div>
        <div className="text-red-800 text-base font-medium leading-5 self-stretch">
          Application
        </div>
        <div className="text-red-800 text-base font-medium leading-5 whitespace-nowrap self-start">
          About Us
        </div>
      </div>
      <Socials />
    </div>
  );
};
