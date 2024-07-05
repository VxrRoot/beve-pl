import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono, Finger_Paint } from "next/font/google";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const fingerPaint = Finger_Paint({ subsets: [], weight: ["400"] });

const InfoSection = () => {
  return (
    <section className="relative text-white bg-gradient-to-r from-primaryGreen to-secondaryGreen py-[4.5rem]">
      <ContainerLayout>
        <h2
          className={`text-3xl mb-4 uppercase lg:text-[2.5rem] max-w-[36rem] lg:leading-[2.8rem]  tracking-[0.9px] ${mono.className}`}
        >
          Nasz kubek <br /> w odróżnieniu od kota ma{" "}
          <span className={`${fingerPaint.className} text-4xl lg:text-[3rem]`}>
            1000
          </span>{" "}
          żyć!
        </h2>
        <p className="mb-6">Jedno zdanie opisujące</p>
        <CTAButton />
      </ContainerLayout>
    </section>
  );
};

export default InfoSection;
