import Link from "next/link";
import { ContactForm } from "./ContactForm";

export const EndingBanner = () => {
  return (
    <>
      <div
        id="contact-form"
        className="text-red-800 px-4 text-center text-3xl md:text-7xl font-bold leading-[90px] self-center max-w-[1200px] mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-md:mt-10"
      >
        If you have a question ? <br /> reach out to us
      </div>
      <ContactForm />
      <div className="block px-4 mb-2 text-center text-l md:text-2xl font-bold text-red-800">
        Call us at (630) 566-2272 or visit our physical address at <br />
        <Link className="underline" href="https://www.google.com/maps/place/3030+Warrenville+Rd+450+09,+Lisle,+IL+60532,+USA/data=!4m2!3m1!1s0x880e5695deb7ad53:0xa4b44fdbfbde7fa?sa=X&ved=2ahUKEwij56OX6YKDAxUmV6QEHfWdCoMQ8gF6BAghEAA">
          3030 Warrenville Road Suite 450-09, Lisle, IL 60532.
        </Link>
      </div>
    </>
  );
};
