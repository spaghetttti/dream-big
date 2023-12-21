"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) alert("Your email was sent successfully!");
          console.log(result.status, result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // try {
    //   const response = await fetch("/api/emailForward", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     // Handle success, show confirmation, reset form, etc.
    //     console.log("Email sent successfully!");
    //   } else {
    //     // Handle error response
    //     console.error("Failed to send email.");
    //   }
    // } catch (error) {
    //   console.error("Error sending email:", error);
    // }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form
          ref={form}
          onSubmit={handleSubmit}
          id="contact-form"
          className="space-y-8"
        >
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-red-800"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-red-800 block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-red-800"
            >
              Subject
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="subject"
              name="subject"
              className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-red-800 block w-full p-2.5 "
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-red-800"
            >
              Your message
            </label>
            <textarea
              onChange={handleChange}
              id="message"
              name="message"
              rows="6"
              className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-red-800 block w-full p-2.5 "
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-orange-100 text-center text-xl md:text-3xl font-bold leading-7 tracking-wide uppercase whitespace-nowrap items-center bg-red-800 self-center w-full max-w-full mt-11 px-5 py-6 max-md:mt-10"
          >
            Send us a message
          </button>
        </form>
      </div>
    </section>
  );
};
