import React from "react";
import Memoji from "../assets/memoji.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            "Hello! I'm Ömer, a passionate traveler in the world of frontend
            development for two years. My passion for bringing life to projects
            by producing creative solutions and prioritizing user experience
            drives me to constant development and innovation."
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-blue-400 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdKeyboardArrowRight size={20}/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Memoji}
            alt="apple memoji"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
