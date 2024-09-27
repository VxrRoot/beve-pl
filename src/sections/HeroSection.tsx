import slideOneImage from "../../public/Slider-Eko.webp";
import slideTwoImage from "../../public/Slider-design.webp";
import slideThreeImage from "../../public/Slider-myjnia.webp";
import React from "react";
import HeroSlider from "@/components/HeroSlider";

const sliderSlides = [
  {
    heading: "DESIGN",
    subHeading:
      "Nie masz pomysłu na grafikę na kubku? Nasi graficy przygotują atrakcyjne, pełne kolorów propozycje, idealnie dopasowane do Twojej marki.",
    img: slideTwoImage,
  },
  {
    heading: "MYJNIA I LOGISTYKA",
    subHeading: "Zajmij się nalewaniem, a logistykę i mycie zostaw nam.",
    img: slideThreeImage,
  },
  {
    heading: "EKOLOGIA",
    subHeading:
      "Jeden nasz kubek w trakcie swojego cyklu życia zaoszczędza pięć 60-litrowych worków na śmieci. Po zakończeniu służby, dzięki procesowi recyklingu, otrzymuje nowe życie.",
    img: slideOneImage,
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
