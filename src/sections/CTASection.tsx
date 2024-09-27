import CTAButton from "@/components/CTAButton";
import ContainerLayout from "@/layouts/ContainerLayout";
import { Mail, Phone } from "lucide-react";
import { DM_Mono } from "next/font/google";
import ctaImage from "../../public/cta-image.webp";
import React from "react";
import Image from "next/image";
import LogoWhite from "@/icons/LogoWhite";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const CTASection = () => {
  return (
    <section>
      <ContainerLayout>
        <div className="overflow-hidden relative rounded-[18px] p-6 md:p-16 bg-gradient-to-r from-primaryGreen to-secondaryGreen">
          <div>
            <div className="flex flex-col mt-16 md:mt-0">
              <h2
                className={`text-[2.625rem] leading-[2.7rem] md:text-[2.5rem] md:leading-[2.8rem] text-white tracking-[0.9px] ${mono.className}`}
              >
                SKONTAKTUJ <br className="md:hidden" /> SIĘ Z NAMI <br /> NIE
                CZEKAJ <br className="md:hidden" /> #BEVE
              </h2>
              <span className=" mt-6 leading-[1.5rem] max-w-[460px] text-white tracking-[1.04px] font-[400]">
                <CTAButton whiteHover={true} />
              </span>
            </div>
            <div className="border-primaryGray/20 border-t flex flex-col md:flex-row gap-4 pt-4 mt-12 md:mt-20">
              <a
                href="tel:+48504958551"
                className="flex text-white gap-2 items-center"
              >
                <Phone className="w-4 h-4" /> +48 504 958 551
              </a>
              <a href="" className="flex text-white gap-2 items-center">
                <Mail className="w-4 h-4" />
                mail: beve@bevecup.pl
              </a>
            </div>
          </div>
          <div className="relative  pt-8 w-full md:absolute h-52 md:h-full bottom-0 right-0 md:w-1/2">
            <Image
              src={ctaImage}
              alt="Kubki beve"
              width={2000}
              height={2000}
              className="bg-cover bg-center  w-auto max-h-full max-w-[20rem] md:max-w-full absolute md:bottom-0 right-0"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default CTASection;
