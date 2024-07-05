import BeveDecorationIcon from "@/icons/BeveDecorationIcon";
import CupIcon from "@/icons/CupIcon";
import DropIcon from "@/icons/DropIcon";
import PencilIcon from "@/icons/PencilIcon";
import TruckIcon from "@/icons/TruckIcon";
import ContainerLayout from "@/layouts/ContainerLayout";
import { DM_Mono } from "next/font/google";
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
    desc: "Umyjemy Twoje kubki bez względu na nakład zachowując najwyższe standardy mycia i terminowość działania używając ekologicznych detergentów.",
    icon: TruckIcon,
  },
  {
    name: "Projektowanie graficzne",
    desc: "Umyjemy Twoje kubki bez względu na nakład zachowując najwyższe standardy mycia i terminowość działania używając ekologicznych detergentów.",
    icon: PencilIcon,
  },
];

const ComplexServices = () => {
  return (
    <section className="my-10">
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
        <div>
          {complexServices.map((service) => (
            <div className="bg-[#F3F9F4] mt-5 p-6 lg:p-8 rounded-[0.5rem] flex items-center">
              <div className="mr-8">{service.icon()}</div>
              <div>
                <p className="font-bold uppercase">{service.name}</p>
                <p className="mt-4">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
};

export default ComplexServices;
