import type { Route } from "./+types/home";
import HomeSpacer     from "~/components/next/home/HomeSpacer";
import Navbar         from "~/components/Navbar";
import Footer         from "~/components/FooterPage";
import Ariane         from "~/components/Ariane";
import HomeFP         from "~/components/next/home/HomeFP";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rapport de Stage" },
    { name: "description", content: ">HomePage de Rappor de stage" },
  ];
}

export default function Home() {
  return(
    <div className="home-page">
      <header>
        <Navbar />
        <Ariane title='Rapport de stage' subtitle='Entreprise Panda-One' />
        <div className="marque">
          <div data-text='  PANDA ONE  -  PMG BATIMENT ATLANTIQUE  -  LAROCHEFOUCAULD  -  OSABA  -  ' />
        </div>
      </header>
      <div className="home-page__container pt-20">
        <HomeFP />
        <HomeSpacer />
        <Footer />
      </div>
    </div>
  );
}
