import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono, Finger_Paint } from "next/font/google";
import infoImg from "../../public/few-lives-img.webp";
import React from "react";
import Image from "next/image";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const fingerPaint = Finger_Paint({ subsets: [], weight: ["400"] });

const InfoSection = () => {
  return (
    <section className="text-white bg-gradient-to-r from-primaryGreen to-secondaryGreen py-[4.5rem]">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <h2
              className={`text-3xl mb-4 uppercase lg:text-[2.5rem] max-w-[36rem] lg:leading-[2.8rem]  tracking-[0.9px] ${mono.className}`}
            >
              Nasz kubek <br /> w odróżnieniu od kota ma{" "}
              <span
                className={`${fingerPaint.className} text-4xl lg:text-[3rem]`}
              >
                1000
              </span>{" "}
              żyć!
            </h2>
            <CTAButton whiteHover={true} />
          </div>
          <div className="lg:flex-1 relative  lg:min-h-60 min-h-40">
            <Image
              src={infoImg}
              alt="Kubki beve"
              width={2000}
              height={2000}
              className="absolute -bottom-[4.5rem] lg:h-auto lg:w-auto right-0 max-w-[550px] lg:max-w-[700px] w-full h-auto"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default InfoSection;
