import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import { Mail, Phone } from "lucide-react";
import { DM_Mono } from "next/font/google";
import ctaImage from "../../public/beve-cta-image.webp";
import React from "react";
import Image from "next/image";
import LogoWhite from "@/icons/LogoWhite";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const CTASection = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="overflow-hidden relative rounded-[18px] p-6 lg:p-16 bg-gradient-to-r from-primaryGreen to-secondaryGreen">
          <div>
            <div className="flex flex-col mt-16 lg:mt-0">
              <h2
                className={`text-3xl lg:text-[2.5rem] lg:leading-[2.8rem] text-white tracking-[0.9px] ${mono.className}`}
              >
                SKONTAKTUJ SIĘ Z NAMI <br /> NIE CZEKAJ #BEVE
              </h2>
              <span className=" mt-6 leading-[1.5rem] max-w-[460px] text-white tracking-[1.04px] font-[400]">
                <CTAButton />
              </span>
            </div>
            <div className="border-primaryGray/20 border-t flex flex-col lg:flex-row gap-4 pt-4 mt-12 lg:mt-20">
              <a href="" className="flex text-white gap-2 items-center">
                <Phone className="w-4 h-4" /> + 48 123 456 789
              </a>
              <a href="" className="flex text-white gap-2 items-center">
                <Mail className="w-4 h-4" />
                mail: beve@bevecup.pl
              </a>
            </div>
          </div>
          <div className="relative w-full md:absolute h-52 bottom-0 right-0 lg:w-1/2">
            <Image
              src={ctaImage}
              alt="Kubki beve"
              width={2000}
              height={2000}
              className="bg-cover bg-center -bottom-8 max-w-[20rem] lg:max-w-full absolute lg:bottom-0 "
            />
          </div>
          <div className="absolute top-8 right-8 lg:top-16 lg:right-16">
            <LogoWhite />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default CTASection;
