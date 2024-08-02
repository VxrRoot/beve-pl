import BeveDecorationIcon from "@/icons/BeveDecorationIcon";
import CheckFatIcon from "@/icons/CheckFatIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
import React from "react";
import Image from "next/image";
import complexServicesImg from "../../public/comfort-offer-img.png";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const adventages = [
  "Wypdorukowany w <span class='font-bold'> Europie </span>",
  "Materiał <span class='font-bold'> w 100% do recyklingu </span> (PP)",
  "Spełnia normy dyrektywy <span class='font-bold'> sup - UE 2019 / 904 </span>",
  "W ofercie pojemniki plastikowe <span class='font-bold'> z klapką </span> do logistyki kubka",
  "Nadruk na <span class='font-bold'> całej powierzchni </span>",
  "Doskonały nośnik <span class='font-bold'> reklamy </span>",
  "<span class='font-bold'> Nie pieni piwa </span>",
  "Pojemności: <span class='font-bold'> 0,3 / 0,4 / 0,5 L </span>",
  "<span class='font-bold'> Odporny na detergenty",
  "Druk <span class='font-bold'> odporny na zmywanie/przetarcia </span>",
  "Nadaje się do mycia <span class='font-bold'> w temp do 70°C </span>",
  "<span class='font-bold'> Wygodne składowanie </span> - jeden wchodzi w drugi",
];

const OfferDetailsSection = () => {
  return (
    <section className="py-20" id="o-kubkach">
      <ContainerLayout>
        <div className="flex items-start lg:items-center">
          <div>
            <BeveDecorationIcon />
          </div>
          <h2
            className={`${mono.className} lg:top-0 top-[-0.5rem] uppercase relative flex justify-start  text-[2rem] leading-[2.5rem] lg:leading-[3rem] lg:text-[2.5rem] ml-6`}
          >
            Wygodna oferta kubków beve
          </h2>
        </div>
        <div className="flex flex-col mt-10 lg:mt-0 lg:flex-row lg:pt-12">
          <div className="flex-1 grid grid-cols-1 gap-4 md:grid-cols-2 lg:pr-16 grid-rows-auto">
            {adventages.map((item: string, idx) => (
              <AdvantageItem key={`${item}-${idx}`} text={item} />
            ))}
          </div>
          <div className="lg:w-[17.31rem] w-full  mt-10 lg:mt-0">
            <Image
              alt=""
              src={complexServicesImg}
              width={1000}
              height={1000}
              className="w-full max-w-[346px] mx-auto"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

const AdvantageItem = ({ text }: { text: string }) => (
  <div className="flex items-start bg-primaryGreen/10 px-[1rem] py-[0.82rem] rounded-[0.625rem]">
    <span className="pt-1">
      <CheckFatIcon />
    </span>
    <p className="ml-4" dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

export default OfferDetailsSection;
