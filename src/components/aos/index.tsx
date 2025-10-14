"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: false, // animação ocorre apenas uma vez
    });
  }, []);

  return <>{children}</>;
}
