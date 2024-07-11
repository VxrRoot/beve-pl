import Logo from "@/icons/Logo";
import { Mail, Phone } from "lucide-react";
import React from "react";

const ContactFooterSection = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="bg-white rounded-[13px]  flex-1 flex flex-col md:flex-row p-10">
        <div className="flex-1">
          <Logo width={178} height={47} />
          <div className="text-black">
            <a href="" className="flex mt-10 gap-2 items-center">
              <Phone className="w-4 h-4" /> + 48 123 456 789
            </a>
            <a href="" className="flex  gap-2 mt-4 items-center">
              <Mail className="w-4 h-4" />
              mail: beve@bevecup.pl
            </a>
          </div>
        </div>
        <div className="flex-1 bg-red-500 min-h-10"></div>
      </div>
      <div className="flex-1 lg:pl-16 pt-16 lg:pt-0 items-center grid grid-rows-4 gap-8 lg:grid-rows-2 lg:grid-cols-2">
        <div className="flex flex-col text-white">
          <span className="font-bold mb-4">Projekty graficzne</span>
          <a href="" className="flex  gap-2 items-center">
            <Mail className="w-4 h-4" />
            mail: beve@bevecup.pl
          </a>
        </div>
        <div className="flex flex-col  text-white">
          <span className="font-bold mb-4">System kaucyjny</span>
          <a href="" className="flex  gap-2 items-center">
            <Mail className="w-4 h-4" />
            mail: beve@bevecup.pl
          </a>
        </div>
        <div className="flex flex-col  text-white">
          <span className="font-bold mb-4">Sprzedaż/Wynajem/Mycie</span>
          <a href="" className="flex  gap-2 items-center">
            <Mail className="w-4 h-4" />
            mail: beve@bevecup.pl
          </a>
        </div>
        <div className="flex flex-col  text-white">
          <span className="font-bold mb-4">Outsourcing personelu</span>
          <a href="" className="flex  gap-2 items-center">
            <Mail className="w-4 h-4" />
            mail: beve@bevecup.pl
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFooterSection;
