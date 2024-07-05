import { links } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { DM_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

const CTAButton = () => {
  return (
    <Link
      className={`${mono.className} whitespace-nowrap w-[252px] flex items-center justify-center shadow-button-cta-shadow tracking-[1.06px] py-3  rounded-[6px] bg-secondaryGreen text-white uppercase`}
      href={links.contact}
    >
      Wyceń zamówienie <ArrowUpRight className="ml-2 " />
    </Link>
  );
};

export default CTAButton;
