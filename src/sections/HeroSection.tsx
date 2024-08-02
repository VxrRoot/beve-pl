import slideOneImage from "../../public/Slider-Eko.webp";
import slideTwoImage from "../../public/Slider-design.webp";
import slideThreeImage from "../../public/Slider-myjnia.webp";
import React from "react";
import HeroSlider from "@/components/HeroSlider";

const sliderSlides = [
  {
    heading: "WIELORAZOWE KUBKI NA WYDARZENIA BEZ ZBĘDNYCH FORMALNOŚCI",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Semper quam velit id vel tincidunt id diam euismod. ",
    img: slideOneImage,
  },
  {
    heading: "WIELORAZOWE KUBKI NA WYDARZENIA BEZ ZBĘDNYCH FORMALNOŚCI",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Semper quam velit id vel tincidunt id diam euismod. ",
    img: slideTwoImage,
  },
  {
    heading: "WIELORAZOWE KUBKI NA WYDARZENIA BEZ ZBĘDNYCH FORMALNOŚCI",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Semper quam velit id vel tincidunt id diam euismod. ",
    img: slideThreeImage,
  },
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-primaryGreen to-secondaryGreen">
      <div className="hidden">
        {sliderSlides.map((slide, index) => (
          <div key={index}>
            {index === 0 ? <h1>{slide.heading}</h1> : <h2>{slide.heading}</h2>}
            <p>{slide.subHeading}</p>
          </div>
        ))}
      </div>
      <HeroSlider slides={sliderSlides} />
    </section>
  );
};

export default HeroSection;
