import BeveDecorationIcon from "@/icons/BeveDecorationIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const RememberSection = () => {
  return (
    <section className="mb-20">
      <ContainerLayout>
        <div className="flex items-center">
          <BeveDecorationIcon />
          <h2
            className={`${mono.className} uppercase text-[2rem] lg:text-[2.5rem] ml-6`}
          >
            Pamiętaj!
          </h2>
        </div>
        <div className="flex pt-8 flex-col lg:flex-row gap-5">
          <div className="flex-1 flex flex-col bg-[#F5F5F5] px-10 py-6 lg:px-16 lg:py-10 rounded-md">
            <div className="rounded-[0.5rem]  flex items-center text-[#E20000]">
              <div
                className={`mr-[1rem] w-[33px] h-[33px] flex justify-center items-center bg-white rounded-full text-[1.5rem] ${mono.className}`}
              >
                !
              </div>
              <span className="uppercase font-bold text-xl">1 lipca 2024</span>
            </div>
            <p className="pt-2">
              Wejście w życie obowiązku posiadania kubków wielokrotnego użytku
              jako alternatywy dla kubków jednorazowych.{" "}
              <span className="font-bold">
                Przyzwyczaj swoich klientów do zmian!
              </span>
            </p>
          </div>
          <div className="flex-1 flex flex-col bg-[#F5F5F5] px-10 py-6 lg:px-16 lg:py-10 rounded-md">
            <div className="rounded-[0.5rem]  flex items-center text-[#E20000]">
              <div
                className={`mr-[1rem] w-[33px] h-[33px] flex justify-center items-center bg-white rounded-full text-[1.5rem] ${mono.className}`}
              >
                !
              </div>
              <span className="uppercase font-bold text-xl">1 lipca 2024</span>
            </div>
            <p className="pt-2">
              Wejście w życie zakazu używania kubków jednorazowych{" "}
              <span className="font-bold">
                Przygotuj swój biznes do zmiany!
              </span>
            </p>
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default RememberSection;
