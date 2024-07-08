import BeveDecorationIcon from "@/icons/BeveDecorationIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
import aboutImg from "../../public/about-img.png";
import Image from "next/image";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const AboutUsSection = () => {
  return (
    <section className="pt-20 pb-28" id="o-nas">
      <ContainerLayout>
        <div className="flex items-center">
          <BeveDecorationIcon />
          <h2
            className={`${mono.className} uppercase text-[2rem] lg:text-[2.5rem] ml-6`}
          >
            O nas
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row mt-6">
          <div className="flex-1 flex flex-col gap-3">
            <div className="p-6 rounded-[0.75rem] bg-[#017B15]/10">
              <h3 className={`${mono.className} text-[1.13rem] mb-[1rem]`}>
                Geneza powstania
              </h3>
              <p className="text-[700] text-[0.937rem] leading-[1.4rem] tracking-[-0.11px]">
                Powstaliśmy aby ułatwić przejście z kubków jednorazowych na
                <span className="font-bold">
                  {" "}
                  ekologiczne kubki wielorazowe.
                </span>{" "}
                Zmieniamy świat na lepsze w sposób w jaki najlepiej potrafimy,
                diametralnie ograniczając zużycie plastiku.
              </p>
            </div>
            <div className="p-6 rounded-[0.75rem] bg-[#727272]/10">
              <h3 className={`${mono.className} text-[1.13rem] mb-[1rem]`}>
                Dla kogo?
              </h3>
              <p className="text-[700] text-[0.937rem] leading-[1.4rem] tracking-[-0.11px]">
                Jesteśmy wsparciem{" "}
                <span className="font-bold">
                  dla organizatorów wydarzeń i gastronomów
                </span>{" "}
                w pełnym zakresie przejścia z używania kubków jednorazowych na
                kubki wielokrotnego użytku{" "}
                <span>oraz wszystkich uczestników wydarzeń</span> , którym
                ułatwiamy czerpanie radości z eventu zamiast stania w kolejce.
              </p>
            </div>
            <div className="p-6 rounded-[0.75rem] bg-[#63C600]/10">
              <h3 className={`${mono.className} text-[1.13rem] mb-[1rem]`}>
                Kim jesteśmy?
              </h3>
              <p className="text-[700] text-[0.937rem] leading-[1.4rem] tracking-[-0.11px]">
                W pierwszej kolejności{" "}
                <span>
                  jesteśmy dostawcą Twoich kubków znającym rynek na wskroś.
                </span>{" "}
                Pomysłodawcami wielu rozwiązań dla branży HORECA
                przyczyniających się do jej lepszego funkcjonowania. Tworzymy
                interdyscyplinarny zespół specjalistów z ponad 20 letnim
                doświadczeniem w biznesie. Zawodowo uśmierzamy bolączki branży
                napojowej.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center mt-12 lg:mt-0 items-center">
            <Image
              alt=""
              src={aboutImg}
              width={1000}
              height={1000}
              className="w-full max-w-[346px]"
            />
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default AboutUsSection;
