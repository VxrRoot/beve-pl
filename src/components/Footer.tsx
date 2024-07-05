import { links } from "@/constants";
import ContainerLayout from "@/layouts/ContainerLayout";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <ContainerLayout>
        <div className="flex flex-col md:flex-row justify-between py-6 lg:py-10 text-[#B2B2B2]">
          <div className="flex">
            <span className="pr-6 whitespace-nowrap block border-r border-[#B2B2B2]">
              BEVE 2024
            </span>
            <Link
              className="ml-6 whitespace-nowrap block"
              href={links.privacyPolicy}
            >
              Polityka Prywatności
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <span>
              Designed by:{" "}
              <Link target="_blank" href={links.kreatywnyB}>
                KreatywnyBrand
              </Link>
            </span>
          </div>
        </div>
      </ContainerLayout>
    </footer>
  );
};

export default Footer;
