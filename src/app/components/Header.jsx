"use client";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleScrollToView } from "../helpers/scrollToView";

export const Header = () => {
  const pathName = usePathname();
  return (
    <div className="self-center flex w-full max-w-[1223px] items-stretch justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
      <Image
        alt="main-logo"
        width={250}
        height={75}
        src={Logo}
        className="aspect-[3.42] object-contain object-center w-[250px] shadow-sm overflow-hidden"
      />
      <div className="self-center flex items-start justify-between gap-5 my-auto max-md:justify-center">
        <Link
          href="/"
          // style={
          //   pathName === "/"
          //     ? {
          //         paddingBottom: "5px",
          //         borderBottom: "2px solid #991b1b",
          //       }
          //     : {}
          // }
          className="text-red-800 text-base font-medium leading-5 whitespace-nowrap self-start"
        >
          Home
        </Link>
        <div
          onClick={() => handleScrollToView("services-offers-list")}
          className="text-red-800 cursor-pointer text-base font-medium leading-5 self-start"
        >
          Services
        </div>
        <div
          onClick={() => handleScrollToView("job-offers-list")}
          className="text-red-800 cursor-pointer text-base font-medium leading-5 self-stretch"
        >
          Join us
        </div>
        <div
          onClick={() => handleScrollToView("about-us")}
          className="text-red-800 cursor-pointer text-base font-medium leading-5 whitespace-nowrap self-start"
        >
          About Us
        </div>
      </div>
      <div
        onClick={() => handleScrollToView("contact-form")}
        className="hidden md:block  cursor-pointer text-red-800 text-lg font-bold leading-5 whitespace-nowrap items-center self-center my-auto px-5 py-3 border-2 border-solid border-red-800"
      >
        Contact us
      </div>
    </div>
  );
};
