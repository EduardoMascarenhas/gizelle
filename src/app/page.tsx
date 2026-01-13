import Disclaimer from "@/components/disclaimer";
import Intro from "@/components/intro";
import Portfolio from "@/components/portfolio";
import Sobre from "@/components/sobre";
import TellMe from "@/components/tellme";

export default function Home() {
  return (
    <div className="w-full">
      <Intro />
      <Sobre  />
      <Disclaimer />
      <Portfolio />
      <TellMe />
    </div>
  );
}
