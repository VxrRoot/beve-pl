import { links } from "@/constants";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";
import Link from "next/link";
import Logo from "@/icons/Logo";
import Nav from "./Nav";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="py-2 border-b border-primaryGray">
        <ContainerLayout>
          <div className="flex text-sm lg:text-base gap-4 items-center justify-center lg:justify-end ">
            <a
              href="tel:+48504958551"
              className="flex text-secondaryGray gap-2 items-center"
            >
              <Phone className="w-4 h-4" /> + 48 504 958 551
            </a>
            <a
              href="mailto:beve@bevecup.pl"
              className="flex text-secondaryGray gap-2 items-center"
            >
              <Mail className="w-4 h-4" />
              mail: beve@bevecup.com
            </a>
          </div>
        </ContainerLayout>
      </div>
      <ContainerLayout>
        <div className="py-8 flex justify-between">
          <Link href={links.homePage} className=" w-48">
            <Logo />
          </Link>
          <div className="flex items-center ">
            <Nav />
          </div>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;
