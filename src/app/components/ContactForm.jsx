"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  // 1. Добавляем 'consent' в состояние формы
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    subject: "",
    consent: false,
  });
  const form = useRef();

  // 2. Обновляем обработчик, чтобы он работал и с чекбоксами
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
          if (result.status === 200) {
            alert("Your email was sent successfully!");
            // Сбрасываем форму для удобства пользователя
            e.target.reset();
            setFormData({
              email: "",
              message: "",
              subject: "",
              consent: false,
            });
          }
          console.log(result.status, result.text);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
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
              htmlFor="email"
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
              htmlFor="subject"
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
              htmlFor="message"
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

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                aria-describedby="consent-description"
                name="consent"
                type="checkbox"
                onChange={handleChange}
                checked={formData.consent}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="font-light text-gray-600">
                By checking this box, I consent to receive text messages from
                Dream Big Transportation INC related to conversational purposes,
                appointment reminders, follow-up on cases, order confirmations,
                etc. You may reply STOP to opt-out at any time. For assistance
                reply HELP. Messages and data rates may apply. Message frequency
                will vary. Learn more on our{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-red-800 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                Page.
              </label>
            </div>
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