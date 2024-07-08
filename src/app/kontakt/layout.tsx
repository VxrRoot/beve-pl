import ContactNav from "@/components/ContactNav";
import ContainerLayout from "@/layouts/ContainerLayout";
import ContactFooterSection from "@/sections/ContactFooterSection";
import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-gradient-to-r from-primaryGreen to-secondaryGreen pt-14 pb-16">
      <ContainerLayout>
        <ContactNav />
        <div className={`bg-white p-10 mt-[-12px] rounded-[13px] mb-8`}>
          {children}
        </div>
        <ContactFooterSection />
      </ContainerLayout>
    </main>
  );
};

export default ContactLayout;
