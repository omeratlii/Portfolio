import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-64"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">You can contact me with the form below</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/2d4ec9cb-bf25-4fe9-a96c-900b479dab24" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b  from-blue-600 to-blue-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
