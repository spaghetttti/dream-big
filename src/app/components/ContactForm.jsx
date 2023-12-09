"use client"
export const ContactForm = () => {
  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form id="contact-form" className="space-y-8">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-red-800"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              type="text"
              id="subject"
              className="shadow-sm bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
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
              id="message"
              rows="6"
              className="shadow-sm bg-gray-900 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Leave a message..."
            ></textarea>
          </div>
        </form>
        <div
          onClick={() => console.log("get contact-form with ref hook")}
          className="text-orange-100 text-center text-xl md:text-3xl font-bold leading-7 tracking-wide uppercase whitespace-nowrap items-center bg-red-800 self-center w-full max-w-full mt-11 px-5 py-6 max-md:mt-10"
        >
          Send us a message
        </div>
      </div>
    </section>
  );
};
