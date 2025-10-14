import React from "react";

interface ButtonVariant1Props {
  targetId: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

const ButtonVariant1: React.FC<ButtonVariant1Props> = ({ targetId, offset = 0, children, className = "" }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-11 rounded-md group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-[#0E0E0E] px-10 py-5 text-lg font-bold transition-all duration-300 hover:scale-[1.05] shadow-lg hover:shadow-green-500/30 border-0 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ButtonVariant1;
