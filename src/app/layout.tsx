import Footer from "@/components/footer/intex";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scrollToTop";
import type { Metadata } from "next";
import { Playfair_Display, Heebo } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/components/aos";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: [ "400", "600" , "700", "800", "900"],
});
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Giselle Alves",
  description: "Fotógrafa e publicitária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light scroll-smooth">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${heebo.variable} antialiased`}
      >
        <AOSProvider>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </AOSProvider>
      </body>
    </html>
  );
}
