import Image from "next/image"

export const Header = () => {
    return (
        <div className="self-center flex w-full max-w-[1223px] items-stretch justify-between gap-5 mt-2 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <Image
          alt="main-logo"
          width={250}
          height={75}
          src=""
          className="aspect-[3.42] object-contain object-center w-[250px] shadow-sm overflow-hidden"
        />
        <img src="../assets/1.jpeg" alt="f" />
        <div className="self-center flex items-start justify-between gap-5 my-auto max-md:justify-center">
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
        <div className="text-red-800 text-lg font-bold leading-5 whitespace-nowrap items-center self-center my-auto px-5 py-3 border-2 border-solid border-red-800">
          Contact us
        </div>
      </div>
    )
}