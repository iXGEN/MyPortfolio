import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, Im Ignacio
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta
            aliquam scelerisque. Praesent rhoncus orci ut mauris iaculis
            molestie. Suspendisse vulputate molestie massa, id sodales elit
            condimentum sit amet. Morbi diam mi
          </p>
        </div>
        <div className=""></div>
      </div>
    </section>
  );
};

export default HeroSection;
