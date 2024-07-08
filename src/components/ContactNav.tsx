"use client";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

import { links } from "@/constants";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { usePathname } from "next/navigation";

const ContactNav = () => {
  const pathname = usePathname();

  const swiperRef = useRef<SwiperType | null>();

  return (
    <div className="w-full text-white text-xl  max-w-[40rem]">
      <Swiper
        spaceBetween={0}
        slidesPerView={2.5}
        modules={[Navigation]}
        onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide
          onClick={() => swiperRef?.current?.slideTo(0)}
          className={`w-[9rem] text-md py-3 rounded-t-[13px] ${
            pathname === links.purchase && "bg-white"
          } ${pathname === links.purchase && "text-primaryGreen"}`}
        >
          <div className="w-full pb-[12px] flex justify-center">
            <Link href={links.purchase}>Zakup</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef?.current?.slideTo(1)}
          className={`w-[9rem] py-3 rounded-t-[13px] ${
            pathname === links.rent && "bg-white"
          } ${pathname === links.rent && "text-primaryGreen"}`}
        >
          <div className="pb-[12px] w-full flex justify-center">
            <Link href={links.rent}>Wynajem</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef?.current?.slideTo(2)}
          className={`w-[9rem] py-3 rounded-t-[13px] ${
            pathname === links.washing && "bg-white"
          } ${pathname === links.washing && "text-primaryGreen"}`}
        >
          <div className="pb-[12px] w-full flex justify-center">
            <Link href={links.washing}>Mycie</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide
          onClick={() => swiperRef?.current?.slideTo(3)}
          className={`w-[9rem] py-3 rounded-t-[13px] ${
            pathname === links.sublease && "bg-white"
          } ${pathname === links.sublease && "text-primaryGreen"}`}
        >
          <div className="pb-[12px] w-full flex justify-center">
            <Link href={links.sublease}>Podnajem</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContactNav;
