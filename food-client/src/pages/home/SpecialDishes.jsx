import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../../components/Card";

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipies(specials); // Update the state with the filtered data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section-container my-20">
      <div>
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[450px]">Standout Dishes From Our Menu</h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {recipies.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDishes;
