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
          <div className="flex gap-4 justify-end">
            <a href="" className="flex text-secondaryGray gap-2 items-center">
              <Phone className="w-4 h-4" /> + 48 123 456 789
            </a>
            <a href="" className="flex text-secondaryGray gap-2 items-center">
              <Mail className="w-4 h-4" />
              mail: beve@bevecup.pl
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
