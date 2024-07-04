import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beve - wielorazowe kubki na wydarzenia",
  description: "Wielorazowe kubki na wydarzenie bez zbędnych formalności",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.className} bg-white text-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
