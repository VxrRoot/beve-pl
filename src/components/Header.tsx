import { links } from "@/constants";
import ContainerLayout from "@/layouts/ContainerLayout";
import React from "react";
import Link from "next/link";
import Logo from "@/icons/Logo";
import Nav from "./Nav";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="">
      <div className="py-2 border-b border-primaryGray overflow-hidden">
        <ContainerLayout>
          <div className="flex text-sm lg:text-base gap-4 items-center  justify-center lg:justify-end ">
            <a
              href="tel:+48504958551"
              className="flex text-secondaryGray text-xs md:text-base gap-2 items-center"
            >
              <Phone className="w-4 h-4" />
              <span className="whitespace-nowrap">+ 48 504 958 551</span>
            </a>
            <a
              href="mailto:beve@bevecup.pl"
              className="flex text-secondaryGray gap-2 text-xs md:text-base items-center"
            >
              <Mail className="w-4 h-4" />
              <span className="whitespace-nowrap">mail: beve@bevecup.com</span>
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
