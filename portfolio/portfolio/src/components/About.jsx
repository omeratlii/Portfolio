import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-56 sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          Hello! I'm Omer Atli, a computer programming graduate and a constantly evolving frontend developer. I have been in the industry for two years, passionately approaching my work with a desire to apply what I've learned and create meaningful projects.

          With my education and internship experiences, I've solidified my foundations in HTML, CSS, and JavaScript. I later delved into TypeScript and React, gaining proficiency in these technologies. Particularly, I enhanced my skills in user interface design using Material-UI.
        </p>

        <br />

        <p className="text-xl">
          Embarking on this passionate journey, I aspire to continually elevate my skills and progress further in the ever-evolving landscape of frontend development.
        </p>
      </div>
    </div>
  );
};

export default About;
