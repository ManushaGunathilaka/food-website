import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% sm:pt-20">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center lg:gap-40 gap-8">
        {/* images */}
        <div className="md:w-5/12 flex justify-center items-center h-full">
          <div className="relative flex flex-col items-center">
            {/* Banner Image */}
            <img
              src="/images/home/Banner.png"
              alt="Banner"
              className="relative w-[80%] h-auto mx-auto"
            />
            {/* Flying Burger Image */}
            <img
              src="/images/home/FlyingBurger.png"
              alt="Flying Burger"
              className="absolute flying-burger top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* texts */}
        <div className="md:w-7/12 space-y-7 pl-10">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            <span className="text-red">Hungry?&nbsp;&nbsp;</span>Explore
            Menu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and Order
            Now..!
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Crafting Memorable Dining Experiences Through Culinary Mastery and
            Artisanal Skills
          </p>
          <button className="btn bg-orange px-8 py-3 font-semibold text-white rounded-full shadow-md border-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
