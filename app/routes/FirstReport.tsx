import type { EmblaOptionsType } from "embla-carousel";
import Ariane from "~/components/Ariane";
import EmblaCarousel from "~/components/FirstCarousel";
import Navbar from "~/components/Navbar";
import type { Route } from "../+types/root";
import Footer from "~/components/FooterPage";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Rapport de Stage - Premier rapport" },
        { name: "description", content: ">Premier rapport de Rapport de stage" },
    ];
}


export default function FirstReport() {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 7
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div className="first-report">
            <header>
                <Navbar />
                <Ariane title='Rapport de lancement' subtitle='Larochefoucauld et début Osaba'  />
                <div className="marque">
                    <div data-text='  PANDA ONE  -  PMG BATIMENT ATLANTIQUE  -  LAROCHEFOUCAULD  -  OSABA  -  ' />
                </div>
            </header>
            <div className="first-report__container o-container o-container--centered">
                <div className="flex flex-row home-sliced">

                    <div className="w-1/2 home-box">
                        <h2 className="c-title">Panda-One</h2>
                        <p className="c-content">
                            est une petite entreprise de la côte basque créée en 2008 par 
                            David Vergez et Stéphane Garcia. Cette dernière est basée à 
                            Anglet et propose des services de création de site statique, 
                            administrable et e-commerce. 
                        </p>
                    </div>

                    <div className="w-1/2 home-box">
                        <img src="../dist/images/Photo-avant-panda.png" 
                            alt="Photographie de la deventure de Panda One vue de la rue" 
                        />
                    </div>
                </div>

                <div className="c-content--centered spacer">
                    <p className="c-content">
                        Composée de 
                        <span className="text-blue-900 c-bold">
                            &nbsp;3 employés titulaires
                        </span>
                        , Panda-One fournit des sites à plusieurs clients, 
                        des applications et sites web pour leurs clients.
                    </p>
                </div>

                <div className="c-content mt-10">
                    <div className="c-part-header">
                        <h2 className="c-title c-title--centered">Projet allant être traité lors du stage</h2>
                        <p className="c-content c-content--centered">Le stage abordera deux projets majeurs :</p>
                    </div>
                    
                    <div className="c-title">
                        <h3>Larochefoucauld Immobilier</h3>
                    </div>
                    <div className="flex flex-row gap-30 pt-10">
                        <div className="w-1/2 home-box">
                            <p>
                                Larochefoucauld est une agence immobilière basée à Anglet, ayant 
                                demandé à Panda One de récupérer leur site internet et d’apporter 
                                des modifications à ce dernier.
                                Les tâches sous ma responsabilité étaient : 
                            </p>

                        </div>
                        <div className="w-1/2 home-box">
                            <ul className="c-list">
                                <li>Modification de textes</li>
                                <li>Modification d’Images</li>
                                <li>Créer deux nouvelles pages, Honoraires de l’agence et Recrutement</li>
                                <li>Ajout de filtres dans la page “trouver un bien”</li>
                            </ul>
                        
                        </div>

                    </div>

                </div>
            </div>

            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            <div className="o-container o-container--centered">
                
                <div className="c-title">
                    <h3>Osaba Immobilier</h3>
                </div>    

                <div className="flex flex-row gap-20 c-content">
                    <div className="w-1/2">
                        <p>
                            Osaba immobilier est une agence immobilière basée au Pays basque, 
                            ces derniers ont demandé la création d’un site à Panda-One à partir 
                            d’un modèle qui devait être repproduit dans son entiereté avec 
                            le framework interne pour intérger un back-end fonctionnel et des 
                            fonctionnalités personnalisées.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <ul className="c-list">
                            <li>Reproduire le modèle fourni par le client pour son site</li>
                            <li>Respecter les animations du modèle d’origine</li>
                            <li>Respecter les sliders du modèle d’origine</li>
                            <li>Le réadapter à ses attentes et aux textes qu’il demande en collaboration avec le chef de projet</li>
                            <li>Ajouter une fonction d’article back-end</li>
                        </ul>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}