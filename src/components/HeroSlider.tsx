"use client";
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { StaticImageData } from "next/image";
import { links } from "@/constants";
import Link from "next/link";
import { DM_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import ArrowIcon from "@/icons/ArrowIcon";
import { useRef } from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

interface IProps {
  slides: { heading: string; subHeading: string; img: StaticImageData }[];
}

const HeroSlider = ({ slides }: IProps) => {
  const swiperRef = useRef<SwiperType | null>();

  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2000}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
      >
        {slides.map(({ heading, img, subHeading }, idx) => (
          <SwiperSlide key={`${heading}-${idx}`}>
            <div className="lg:h-[500px] flex flex-col lg:flex-row 1xl:pl-[130px] text-white">
              <div className="w-full max-w-[420px] px-4 lg:px-0 pb-14 lg:pb-0 pt-14 order-2 lg:order-1">
                <h3
                  className={`text-[2rem] lg:text-[2.5rem] leading-[2.8rem] 3xl:text-[3.5rem] 3xl:leading-[3.8rem] ${mono.className}`}
                >
                  {heading}
                </h3>
                <h4 className="mt-6 3xl:text-2xl">{subHeading}</h4>
                <Link
                  className={`${mono.className} mt-8 hover:underline transition-all whitespace-nowrap w-fit  flex items-center justify-center  tracking-[1.06px] py-3  rounded-[6px]  text-white uppercase`}
                  href={"/#oferta"}
                >
                  Sprawdź ofertę <ArrowUpRight className="ml-2 " />
                </Link>
              </div>
              <div className="w-full order-1 lg:order-2 ">
                <Image
                  width={801}
                  priority
                  src={img}
                  alt=""
                  className="h-full max-w-[801px] ml-auto bg-center w-full  bg-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={() => swiperRef.current?.slidePrev()}
        className="prev absolute left-4 lg:left-[3rem] z-20 bottom-4 lg:bottom-1/2 lg:translate-y-1/2 cursor-pointer"
      >
        <ArrowIcon />
      </div>
      <div
        onClick={() => swiperRef.current?.slideNext()}
        className="next absolute right-4 lg:right-[3rem] z-20 bottom-4 lg:bottom-1/2 lg:translate-y-1/2 cursor-pointer rotate-180"
      >
        <ArrowIcon />
      </div>
    </div>
  );
};

export default HeroSlider;
