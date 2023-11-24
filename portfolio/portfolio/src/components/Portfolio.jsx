import React from "react";
import apiCall from "../assets/portfolio/ApiCall.png";
import bootstrap from "../assets/portfolio/Bootstrap.png";
import imageList from "../assets/portfolio/ImageList.png";
import reduxProje from "../assets/portfolio/ReduxProje.png";
import sizzle from "../assets/portfolio/Sizzle.png";
import todoApp from "../assets/portfolio/Todoapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sizzle,
    },
    {
      id: 2,
      src: apiCall,
    },
    {
      id: 3,
      src: bootstrap,
    },
    {
      id: 4,
      src: imageList,
    },
    {
      id: 5,
      src: reduxProje,
    },
    {
      id: 6,
      src: todoApp,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            You can take a look at some of my projects here
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={src}
                className="rounded-md duration-200 hover:scale-105 portfolio-img"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-1 py-1 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
