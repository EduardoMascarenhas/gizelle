import React from "react";

interface ButtonVariant2Props {
  targetId: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
  aos?: string;
  aosDuration?: string;
}

const ButtonVariant2: React.FC<ButtonVariant2Props> = ({
  targetId,
  offset = 0,
  children,
  className = "",
  aos = "fade-left",
  aosDuration = "2000",
}) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      if (offset > 0) {
        // Scroll com offset
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        // Scroll padrão
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      data-aos={aos}
      data-aos-duration={aosDuration}
      onClick={handleClick}
      className={`cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-11 rounded-md group border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 px-10 py-5 text-lg transition-all duration-300 hover:scale-[1.05] bg-black/30 backdrop-blur-sm relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default ButtonVariant2;
