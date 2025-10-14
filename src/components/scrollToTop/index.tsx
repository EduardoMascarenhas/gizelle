"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 cursor-pointer p-3 w-[50px] h-[50px] rounded-full bg-custom-black dark:bg-custom-white text-custom-white dark:text-custom-black shadow-lg hover:bg-custom-brown transition-all"
          aria-label="Voltar ao topo"
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      )}
    </>
  );
}
