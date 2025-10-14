import Portfolio from "@/components/portfolio";
import Servicos from "@/components/servicos";
import Sobre from "@/components/sobre";
import TellMe from "@/components/tellme";

export default function Home() {
  return (
    <div className="w-full">
      <Portfolio />
      <Servicos />
      <Sobre  />
      <TellMe />
    </div>
  );
}
