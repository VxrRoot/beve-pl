import { links } from "@/constants";
import { ArrowUpRight } from "lucide-react";
import { DM_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";

const mono = DM_Mono({ weight: ["500"], subsets: [] });

interface IProps {
  whiteHover?: boolean;
}

const CTAButton = ({ whiteHover }: IProps) => {
  return (
    <Link
      className={`${mono.className} hover:bg-primaryGreen transition-all whitespace-nowrap w-[252px] flex items-center justify-center shadow-button-cta-shadow tracking-[1.06px] py-3  rounded-[6px] bg-secondaryGreen text-white uppercase`}
      href={links.purchase}
    >
      Wyceń zamówienie <ArrowUpRight className="ml-2 " />
    </Link>
  );
};

export default CTAButton;
