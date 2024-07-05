import CTAButton from "@/components/CTAButton";
import CartIcon from "@/icons/CartIcon";
import CheckIcon from "@/icons/CheckIcon";
import HandIcon from "@/icons/HandIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const OfferSection = () => {
  return (
    <section className="text-white py-16  bg-gradient-to-r from-primaryGreen to-secondaryGreen">
      <ContainerLayout>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <h2
              className={`text-3xl lg:text-[2.5rem] lg:leading-[2.8rem] text-white tracking-[0.9px] ${mono.className}`}
            >
              WYPOŻYCZ LUB KUP WIELORAZOWE KUBKI BEVE
            </h2>
            <p className="mt-4 font-light">
              Lorem ipsum dolor sit amet consectetur. Semper quam velit id vel
              tincidunt id diam euismod.
            </p>
            <div className="w-full h-60 mt-4 bg-red-400">IMAGE</div>
          </div>
          <div className="flex-1 mt-10 lg:mt-0 lg:justify-end flex  md:pl-20 flex-col md:flex-row items-center">
            <div className="lg:p-10 p-6 w-full bg-white rounded-[0.75rem] flex-1 max-w-[366px] text-black">
              <div className={`flex  items-center `}>
                <HandIcon />
                <p className={`uppercase ml-4 ${mono.className} text-3xl`}>
                  Wypożycz
                </p>
              </div>
              <div className="mt-6 mb-10">
                <ul>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Szybko</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Przystępnie</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Uniwersalny design</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Dostarczamy</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Odbieramy</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Myjemy</span>
                  </li>
                </ul>
              </div>
              <CTAButton />
            </div>
            <div className="lg:p-10 p-6 w-full flex-1 mt-10 md:ml-4 md:mt-0 bg-white rounded-[0.75rem] text-black max-w-[366px]">
              <div className={`flex  items-center `}>
                <CartIcon />
                <p className={`uppercase ml-4 ${mono.className} text-3xl`}>
                  ZAKUP
                </p>
              </div>
              <div className="mt-6 mb-10">
                <ul>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Indywidualny design</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Konkurencyjne ceny</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Dostarczamy</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Możliwość podnajmu</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Łatwość kaucjonowania</span>
                  </li>
                  <li className="flex items-center gap-2 mb-4">
                    <CheckIcon />
                    <span>Preferencyjne mycie</span>
                  </li>
                </ul>
              </div>
              <CTAButton />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default OfferSection;
