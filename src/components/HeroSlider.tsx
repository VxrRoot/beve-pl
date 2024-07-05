"use client";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { StaticImageData } from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { DM_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

interface IProps {
  slides: { heading: string; subHeading: string; img: StaticImageData }[];
}

const HeroSlider = ({ slides }: IProps) => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map(({ heading, img, subHeading }, idx) => (
          <SwiperSlide key={`${heading}-${idx}`}>
            <div className="lg:h-[500px] flex flex-col lg:flex-row 1xl:pl-[130px] text-white">
              <div className="w-full max-w-[420px] px-4 lg:px-0 pb-14 lg:pb-0 pt-14 order-2 lg:order-1">
                <h3
                  className={`text-[2rem] lg:text-[2.5rem] leading-[2.8rem] ${mono.className}`}
                >
                  {heading}
                </h3>
                <h4 className="mt-6">{subHeading}</h4>
                <Link
                  className={`${mono.className} mt-8 whitespace-nowrap w-fit  flex items-center justify-center  tracking-[1.06px] py-3  rounded-[6px]  text-white uppercase`}
                  href={links.contact}
                >
                  Sprawdź ofertę <ArrowUpRight className="ml-2 " />
                </Link>
              </div>
              <div className="w-full order-1 lg:order-2 ">
                <Image
                  width={801}
                  src={img}
                  alt=""
                  className="h-full max-w-[801px] ml-auto bg-center w-full  bg-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
