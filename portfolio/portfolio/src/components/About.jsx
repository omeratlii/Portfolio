import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit qui,
          eligendi deserunt odio quo porro nulla aliquid beatae voluptatem,
          voluptatum facere ipsa quasi nobis? Quia modi facilis quas dolorem
          dolorum? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Amet reprehenderit libero, harum nesciunt illo quibusdam ex laborum,
          veritatis vero debitis optio, reiciendis facilis sit? Quibusdam
          laudantium dolore aliquam tenetur enim tempore qui soluta doloremque
          tempora dolor officiis minus possimus, impedit quae sit deserunt
          dignissimos? Fugiat praesentium atque quia accusantium nostrum.
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          voluptate, consequatur sunt sapiente velit sit beatae error fugiat
          dolore reiciendis voluptatibus alias repellat, ut tempora sed libero.
          Recusandae, tenetur quidem.
        </p>
      </div>
    </div>
  );
};

export default About;
