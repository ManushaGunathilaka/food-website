import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/home/Banner.png" alt="Banner" />

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/prowns.jpg"
                alt="Pizza"
                className="w-24 h-24 rounded-2xl object-cover"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Sea Food Thai</h5>
                <div className="rating rating-sm  ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
                <p className="text-red">Rs.3800.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/pizza.jpg"
                alt="Pizza"
                className="w-24 h-24 rounded-2xl object-cover"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Chicago Pizza</h5>
                <div className="rating rating-sm  ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-400"
                  />
                </div>
                <p className="text-red">Rs.3800.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Flavor meets fire at{" "}
            <span className="text-orange">M&nbsp;Spices</span>, from Cafe Manu
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
