import BeveDecorationIcon from "@/icons/BeveDecorationIcon";
import CupIcon from "@/icons/CupIcon";
import DepositIcon from "@/icons/DepositIcon";
import DropIcon from "@/icons/DropIcon";
import HandWIthCashIcon from "@/icons/HandWIthCashIcon";
import PencilIcon from "@/icons/PencilIcon";
import PersonIcon from "@/icons/PersonIcon";
import TruckIcon from "@/icons/TruckIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
import complexServicesImg from "../../public/complex-services-img.png";
import Image from "next/image";

import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const complexServices = [
  {
    name: "WYNAJEM",
    desc: "Jeżeli nie masz swoich kubków lub czekasz na ich dostawę. Możesz je u nas wynająć.",
    icon: CupIcon,
  },
  {
    name: "MYCIE",
    desc: "Umyjemy Twoje kubki bez względu na nakład zachowując najwyższe standardy mycia i terminowość działania używając ekologicznych detergentów.",
    icon: DropIcon,
  },
  {
    name: "LOGISTYKA",
    desc: "Dbamy o całą drogę kubka. Od magazynu do eventu przez jego przebieg aż do myjni.",
    icon: TruckIcon,
  },
  {
    name: "Projektowanie graficzne",
    desc: "Nie zostawimy Cię na lodzie, mamy od tego ludzi.",
    icon: PencilIcon,
  },
  {
    name: "Podnajem",
    desc: "Jeżeli kupisz u nas kubki możemy je wynajmować w Twoim imieniu",
    icon: HandWIthCashIcon,
  },
  {
    name: "OUTSOURCING PERSONELU EVENTOWEGO",
    desc: "Niska jakość? Trudna dostępność? Rozliczenie Pit? Koordynacja? Bierzemy to na siebie! (wyszynk piwa/zbieranie kubków/usługi porządkowe)",
    icon: PersonIcon,
  },
  {
    name: "Kaucjonowanie",
    desc: "Wdrażamy innowacyjny system kaucjonowania",
    icon: DepositIcon,
  },
];

const ComplexServices = () => {
  return (
    <section className="pt-36 mb-20 overflow-hidden" id="uslugi">
      <ContainerLayout>
        <div className="flex items-start lg:items-center">
          <div>
            <BeveDecorationIcon />
          </div>
          <h2
            className={`${mono.className} lg:top-0 top-[-0.5rem] uppercase relative flex justify-start  text-[2rem] leading-[2.5rem] lg:leading-[3rem] lg:text-[2.5rem] ml-6`}
          >
            KOMPLEKSOWE USŁUGI BEVE
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <div className="flex-1">
            {complexServices.slice(0, 4).map((service, idx) => (
              <div
                key={`${service.name}-${idx}`}
                className="bg-[#F3F9F4] mt-5 p-6 lg:p-8 rounded-[0.5rem] flex items-start min-h-[140px] lg:max-h-[162px]"
              >
                <div className="mr-8">{service.icon()}</div>
                <div>
                  <p className="font-bold uppercase">{service.name}</p>
                  <p className="mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 relative lg:pt-[10.25rem]">
            <div className="absolute hidden lg:block left-0 top-5 h-auto   w-full">
              <Image
                alt=""
                src={complexServicesImg}
                width={1000}
                height={1000}
                className="w-[32rem] absolute -bottom-[10.25rem] -right-[3rem]"
              />
            </div>
            {complexServices.slice(4).map((service, idx) => (
              <div
                key={`${service.name}-${idx}`}
                className="bg-[#F3F9F4] mt-5 p-6 lg:p-8 rounded-[0.5rem] flex items-start min-h-[140px] lg:max-h-[162px] "
              >
                <div className="mr-8 h-full">{service.icon()}</div>
                <div className="flex flex-col">
                  <p className="font-bold uppercase">{service.name}</p>
                  <p className="mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ComplexServices;
