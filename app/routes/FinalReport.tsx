import type { EmblaOptionsType } from "embla-carousel";
import Ariane from "~/components/Ariane";
import EmblaCarousel from "~/components/FinalCarousel";
import Navbar from "~/components/Navbar";

import type { Route } from "../+types/root";
import Footer from "~/components/FooterPage";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Rapport de Stage - Rapport Final" },
        { name: "description", content: ">Rapport Final de Rapport de stage" },
    ];
}

export default function FinalReport() {

    const OPTIONS: EmblaOptionsType = { loop: true }
    const SLIDE_COUNT = 8
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    
    return (
        <div className="flex flex-col">
            <header>
                <Navbar />
                <Ariane title='Rapport Final' subtitle='Larochefoucauld, PMG Atlantique & Osaba' />
                <div className="marque">
                    <div data-text='  PANDA ONE  -  PMG BATIMENT ATLANTIQUE  -  LAROCHEFOUCAULD  -  OSABA  -  ' />
                </div>

            </header>

            <div className="temp">
                <div className="sticky-menu flex flex-col gap-10">
                    <ul className="font-white mini-menu-final">
                        <li><a href="#top">Haut de page</a></li>
                        <li><a href="#osaba-immobilier">Osaba Immobilier</a></li>
                        <ul>
                            <li><a href="#footer">Footer</a></li>
                            <li><a href="#navbar">Navbar</a></li>
                            <li><a href="#debrief">Debrief Osaba</a></li>
                            <li><a href="#difficulte">Difficultés rencontrées</a></li>
                            <li><a href="#bilan">Bilan de fin de stage</a></li>
                            <li><a href="#remerciements">Remerciements</a></li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="final-report__container o-container o-container--centered">
                <div className="flex flex-row gap-20">
                    <div className="w-1/2 home-box">
                        <div className="final-report__container">
                            <div className="c-title" id="osaba-immobilier">
                                <h2>Larochefoucauld</h2>
                            </div>
                            <div className="c-content">
                                <ul className="c-list">
                                    <li>Modification de textes</li>
                                    <li>Modification d’Images</li>
                                    <li>Créer deux nouvelles pages, Honoraires de l’agence et Recrutement</li>
                                    <li>Ajout de filtres dans la page “trouver un bien”</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 home-box">
                        <img src="../dist/images/Larochefoucauld_monogram_blueoval.png" alt="" className="max-w-80 justify-self-center" />
                    </div>
                </div>
                <div className="c-content c-spacing">
                    <p>
                        Lors de ce projet, j’ai eu l’occasion de découvrir toute l’architecture de mon environnement de travail pour les deux prochains mois étant le premier projet à m’être confié. Dans le cas présent, voici les tâches qui m’étaient incomblé sur ce projet :
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 001212.png" alt="capture d'écran avec les tâches présentés du projet larochefoucauld listé sur l'application clickup" />
                    <p>
                        Par ce dernier, mon maître de stage m’a apporté les détails nécessaires à la mise en place des modifications mais également de l’utilisation de Susanoo, la librairie interne, tout en me guidant vers la réalisation des tâches en question. 
                    </p>
                    <p>
                        Commençons par l’ajout des pages “Recrutement” et “Honoraires de l’agence” :
                        <br />
                        Ces deux pages doivent être répertorié dans un fichier particulier pour fonctionner, par défaut, il faut créer un fichier pour ces dernières qui sera lui-même dans un dossier au nom de la page. Ce dossier ainsi que cette page devaient être répertorié dans le fichier app.jsx, le but étant de créer une route pour que la page soit accessible par l’url.
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 001558.png" alt="Capture d'écran du document app.jsx permettant de créer des routes vers les pages pour l'url du projet" />
                    <p>
                        Par la suite, une fois créé, la page doit contenir une architecture de base, un export de fonction pour afficher la page elle-même, qu’on retrouvera dans tous les documents pour permettre à leur utilisation, par exemple dans le cas de composants, qu’on appelle dans la page principal, pour éviter de rentrer le code imbuvable mais aussi et surtout, lisible de tous.
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 001759.png" alt="Extrait du document PropertyCard, un composant pour afficher les biens immobliers" />
                    <p>
                        Les deux pages en question étaient des pages statiques, récupérer le texte du client et le disposer sur la page et l’adapter à la charte graphique du site. Le dernier point étant le plus compliqué de mon point de vue car adapter un texte qui n’est lui-même pas adapté au code du site est d’autant plus compliqué.
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Scr10.png" alt="Prévisualisation de la page recrutement du projet larochefoucauld" />
                    <img src="../dist/images/larochefoucauld-screens/scr11.png" alt="Prévisualisation de la page recrutement du projet larochefoucauld" />
                    <img src="../dist/images/larochefoucauld-screens/scr12.png" alt="Prévisualisation de la page recrutement du projet larochefoucauld" />
                    <br />
                    <p>
                        Par la suite, j’ai dû établir des filtres pour les propriétés y compris récupérer celles qui étaient déjà vendues, il m’a fallu modifier l’import de la base de donnée simplement pour récupérer l’entiereté des biens et non seulement les disponibles, tout en les récupérant sur une page pour les afficher.
                        <br />
                        Dans un premier temps, les filtres. La tâche a été plutôt facilité par le précédent développeur ayant travaillé sur le sujet, un principe que j’ai conservé sur le prochain projet majeur sur lequel j’ai travaillé. Dans le cas présent, un composant pour lister les filtres à été créé :
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 002358.png" alt="" />
                    <p className="c-spacing">
                        Cela était surtout pour un affichage et un ajout dynamique de futurs nouveaux filtres pour le front. Evidemment l’import de base de données était déjà présent avant les ajouts nécessaires donc pas à refaire cependant, des nouveaux étaient à réaliser pour les nouveaux filtres présents, un pour récupérer le prix du bien et un pour récupérer la localisation du bien particulièrement pour établir la liste des villes dans lesquelles des biens étaient disposés.
                    </p>
                    <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 003103.png" alt="" className="c-spacing" />                        
                    <div className="flex flex-row c-spacing">
                        <div className="w-1/2 home-box">
                            <img src="../dist/images/larochefoucauld-screens/Capture d'écran 2025-07-23 003857.png" alt="" />
                        </div>
                        <div className="w-1/2 home-box">
                            <p>
                                Dans la partie orange de l’image au-dessus est traité seulement l’affichage des propriétés pour tous les futurs filtres qui vont être ajoutés.
                                <br />
                                Dans la partie rose, le return, donc la partie qui figurera sur la page finale, en commençant par l’import du document PropertiesFilter.jsx pour avoir la liste affichée, et un if pour afficher seulement le champs adapté au filtre sélectionné, par évidence, nous n'affichant pas le select pour les villes lorsqu'un autre filtre est sélectionné. On peut voir la même chose par exemple dans la partie verte.
                                <br />
                                Ensuite, pour la dernière partie, en rouge, simplement le retour si aucune propriété est présente ainsi qu’un loader le temps que les propriétés chargent pour ne pas afficher le message d’aucun bien présent alors que ce n’est pas le cas, les propriétés étant affichés par le “cards” après les deux points (étant un if else comprimé, honnêtement très pratique). 
                            </p>
                        </div>
                    </div>
                    <p>
                        Pour le reste des tâches à éxécuter sur ce projet, elles étaient relativement simples, à base de changement de texte, de modification d’image mais en conservant le ratio initial, et c’est tout globalement. 
                        C’était un projet intéressant avec lequel s’introduire au fonctionnement et aux bonnes manières de l’entreprise.

                    </p>
                </div>
                
                <div className="flex flex-row gap-20">
                    <div className="w-1/2 home-box">
                        <div className="final-report__container">
                            <div className="c-title" id="osaba-immobilier">
                                <h2>PMG Atlantique</h2>
                            </div>
                            <div className="c-content">
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
                    <div className="w-1/2 home-box">
                        <img src="../dist/images/logo-pmg.png" alt="" />
                    </div>
                </div>
                <div className="c-content">
                    <p>
                        PMG était un petit projet que j’ai eu l’occasion de me pencher au milieu du projet Osaba abordé dans la partie suivante.
                        <br />
                        Il m’a seulement consisté à savoir comment les sites template en statique sont abordés étant la solution par évidence la moins cher proposé par l’entreprise. 
                        <br />
                        Pour faire un résumé n’ayant pas d’images pour illustrer car réalisé avec boostrap et extrêmement long et mal optimisé comparé aux principes introduit lors du premier projet, tout l’html sur une seule page, un code pour ainsi dire illisible, le ctrl F étant le meilleur ami de l’Homme. 
                        <br />
                        On m’a indiqué que ce projet est un très vieux projet qui est donc avec des anciennes technologies mais également basé sur un modele donc moins optimisé que si ce dernier avait été reproduit selon les méthodes actuelles. 
                        <br />
                        Dans ce contexte, j’ai dû modifier la grande majorité du texte, les images en modifiant beaucoup de codes et rajouter une catégorie dans les images diffusés, et changer leur logo dans la navbar, cette étape était le plus longue car nécessite de refaire le responsive de la navbar car le logo est plus haut que le précédent.
                        <br />
                        Je pense que ce projet était l’exemple parfait de “optimiser un code, c’est bien, surtout pour le prochain qui s’y collera” et de faire attention à mes documents.
                    </p>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="w-1/2 home-box">
                        <div className="final-report__container">
                            <div className="c-title" id="osaba-immobilier">
                                <h2>Osaba Immobilier</h2>
                            </div>
                            <div className="c-content">
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
                    <div className="w-1/2 home-box">
                        <img src="../dist/images/logo-osaba-immobilier.svg" alt="" />
                    </div>
                </div>
            </div>
{/*             <div className="c-slider">
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div> */}
            <div className="bg-stone-100 pt-10 pb-10 mt-10">
                <div className="o-container o-container--centered">
                    <div className="c-content" id="footer">
                        <p>
                            Dans un premier temps lors du projet, j’ai amorcé la création de la navbar ainsi que du footer, les deux éléments qui allaient être présents sur toutes les pages, le footer fut relativement vite fait.
                        </p>
                        <img src="../dist/images/slider-final/footer.png" alt=" Footer du site Osaba immobilier" />
                        <p>
                            Entièrement en flex, 2 colonnes, dans la première 4 autres colonnes avec des listes, dans la deuxième seulement les mentions légales.
                        </p>
                    </div>
                    <div className="c-content flex flex-row" id="navbar">
                        <div className="home-box w-1/2">
                            <img src="../dist/images/final-report-code/scr65.png" alt="Extrait de code de la page navbar du projet osaba" />
                        </div>

                        <div className="home-box w-1/2">
                            <p>
                                Ce qui m’a pris le plus de temps est la barre de navigation. En m’inspirant de celle du projet précédent, j’ai essayé de faire en sorte qu’elle soit modifiable seulement par l’ajout d’un élément dans le tableau du composant, ce fut relativement long mais j’y suis arrivé tout de même.
                            </p>
                            <br />
                            <p>
                                Réaliser le menu lui-même n’était en soit pas le plus compliqué, il suffisait de lire le tableau initial et de noter les informations dans des "li", le moment ou c’est devenu plus compliqué, c’est à partir de la déclaration de la sous-liste.
                            </p>
                        </div>
                        
                    </div>
                    <div className="c-content--centered c-spacing">
                        <p className="c-content max-w-250">                        
                            Il m'a fallu dans un premier temps déclarer les éléments du tableau de navigation, en commençant par les pages primaires non contenues dans un sous-menu. 
                        </p>
                        <img src="../dist/images/final-report-code/Capture d'écran 2025-07-15 222719.png" alt="" />
                    </div>
                    <div className="c-content text-center">
                        <p>
                            Par la suite, déclarer le bouton pour ouvrir le dit menu.
                        </p>
                    </div>
                    <div className="c-content flex flex-row gap-20">
                        <div className="w-1/2 home-box">
                            <p>
                                Ici on peut retrouver deux boutons, le premier permet d’ouvrir le menu de manière classique sur un écran de PC, le deuxième bouton en dessous est une flèche visible seulement en responsive permettant d’ouvrir et de fermer le menu. La fonction “ArrowDownResponsive” a pour but de faire en sorte que le texte soit seulement cliquable lorsque la page est d’une certaine dimension 
                                <br />
                                (le texte ne devant pas l’être lorsqu’en format téléphone, mais seulement la flèche), 
                                ce qui n’était pas possible d’adapter seulement en CSS comme ça a été fait avec la flèche et sa seule présence.

                            </p>
                        </div>
                        <div className="w-1/2 home-box">
                            <img src="../dist/images/final-report-code/Capture d'écran 2025-07-15 222803.png" alt="" />
                        </div>
                    </div>
                    <div className="c-content flex flex-row gap-20">
                        <div className="w-1/2 home-box">
                            <p>
                                Et simplement déclarer les élément de la sous-liste une fois tout cela fait.
                            </p>
                        </div>
                        <div className="w-1/2 home-box">
                            <img src="../dist/images/final-report-code/Capture d'écran 2025-07-15 222900.png" alt="" />
                        </div>
                    </div>
                    <div className="c-content c-content--centered c-spacing">
                        <p>
                            Petit aparté sur le calcul de dimension de la page :
                        </p>
                    </div>
                    <div className="flex flex-row two-images">
                        <div className="w-1/2 two-images two-images-one-slider">
                            <img src="../dist/images/final-report-code/Capture d'écran 2025-07-15 224351.png" alt="" />
                        </div>
                        <div className="w-1/2 two-images two-images-one-slider">
                            <img src="../dist/images/final-report-code/Capture d'écran 2025-07-15 224439.png" alt="" />
                        </div>
                    </div>

            </div>
            </div>    
            <div className="o-container o-container--centered">
                <div className="c-content" id="debrief">
                    <p>
                        Après avoir passé un très long moment sur la navigation et son aspect responsive que j'ai eu du mal à maîtriser, surtout garder les mêmes éléments d’une interface à l’autre, je suis passé sur le contenu des pages elles-mêmes.
                    </p>
                    <br />
                    <p>
                        La page d'accueil étant la plus remplie mais également la première que j’ai réalisée, elle fut naturellement la plus longue, cependant allongée par mes lacunes dans mes connaissances basiques désormais corrigées. Entre autres, le manque de réutilisation de règles CSS entre les éléments, un mauvais choix de librairie pour les sliders (corrigé ultérieurement, cependant cela à pris du temps de tous les refaire).
                    </p>
                    <br />
                    <p>
                        Par la suite, un autre élément m’ayant beaucoup ralenti était les animations présentes sur le template demandé, autant on m’a autorisé à les récupérer dessus, autant les mettre en place fut quelque chose de long car le modèle utilisait des fichiers png pour des simples cercles monochromes, ce qu’on m’a indiqué, et légitimement, de devoir les refaire à partir d’une div, à l’instar des autres formes, en svg, pour gagner de l’espace au plus possible. 

                    </p>
                    <br />
                    <p>
                        Le résultat final était satisfaisant, même si toutes les pages n’ont pas eu le temps de bénéficier d'animations avant la fin de mon stage, estimant sur la fin qu’il était plus important de terminer les tâches primaires plutôt que de me focaliser sur les animations qui étaient tout de même un puit à temps. 

                    </p>
                    <br />
                    <p>
                        Sans faire l’apologie de la créaction front de chaque page qui à été relativement longue pour moi, avant de reprendre de bonnes pratiques et être capable d’en réaliser plus rapidement et efficacement sur la fin, ces dernières m'ont imposées aucune contrainte particulière à part des habitudes et une gestion du temps pour les réaliser au plus possible. Pour certaines d’entre elles, y compris la HomePage, il fallait avoir une librairie de sliders, comme mentionné plus tôt, changé au cours du projet pour des facilités d’exploitation, nous sommes partis vers EmblaSlider, une librairie qui bénificie, en plus de sa documentation relativement complète, d’un système de génération de sliders suivant des paramètres, cela a simplifié la transition entre les deux librairies et a permis de perdre moins de temps que escompté.

                    </p>
                    <br />
                    <p>
                        Il m'a été confié, sur la fin du stage, de traiter du système de gestion d’articles, donc gérer les articles en base de donnée, permettre leur création en back-end, et leur affiche en front-end, tel était la tâche initiale. Après avoir réalisé plusieurs fois l’approche, j’ai eu l’aide de mon maître de stage pour réaliser cette partie, j’avais du mal à comprendre comment formuler les choses et les mettre en œuvre. Le système d’articles en back-end était désormais mis en place mais je n’ai pas eu le temps de l’intégrer en front-end avant mon départ de l’entreprise.

                    </p>
                    <br />
                    <p>
                        Concernant mon départ, plusieurs aspects du projet étaient à compléter, que ce soit sur le contenu que sur les fonctionnalités. Toutes les pages étaient réalisées, cependant, l’affichage d’articles ne l’était pas comme dit plus haut, mais également l’affichage des biens immobiliers car ayant pris du temps sur le projet. Nous n’avons pas demandé les informations de l’API de biens immobiliers d'Osaba, ni également le temps d’utiliser l’API pour récupérer les avis Google pour les montrer potentiellement directement sur leur site à leur demande.

                    </p>
                    <br />
                    <p>
                        Par conséquent, la page “nos biens” n’était pas fonctionnelle, à l’instar de la page “actualités” qui n’affichait rien.
                    </p>
                    <br />
                    <p>
                        Cependant, ce fut un projet enrichissant qui m’a permis de collaborer pleinement avec le chef de projet, pour traiter des textes à intégrer sur la page, et réduire potentiellement certains car le client avait BEAUCOUP écrit, allant parfois au-delà de ce que sa demande était capable d'accueillir. 
                    </p>
                </div>
                <div className="c-title c-spacing" id="difficulte">
                    <h2>
                        Difficultés rencontrées
                    </h2>
                </div>
                <div className="c-content">
                    <p>
                        Mes difficultés majeurs personnelles étaient :
                    </p>
                    <ul className="c-list">
                        <li>La gestion du temps</li>
                        <li>Les lacunes de connaissances de base</li>
                        <li>Manque de pratique</li>
                    </ul>
                    <br />
                    <p>
                        L’année de redoublement que j’ai eu l’occasion de vivre était un problème vis-à-vis de mes méthodes d'apprentissages et mes motivations personnelles, en effet, je ne suis pas une personne qui arrive à travailler sans que ce travail n'ait de but, je perds la motivation et ne m’y penche plus associé à mes problèmes pathologiques de cocentration. Je n’ai donc pas assez pratiqué durant cette dernière et ai perdu beaucoup de connaissances de bases que j’ai du réacquir lors de ce stage. 
                    </p>
                    <br />
                    <p>
                        Ce stage m’aura permis de me rendre compte des difficultés de pratique qui sont encore à corriger même suite au stage : 
                    </p>
                    <ul className="c-list">
                        <li>Back-end</li>
                    </ul>
                    <br />
                    <p>
                        J’ai eu d'avantage de mal à réaliser l’aspect back-end du projet, dans le cas présent. Le front-end est censé être l’aspect “facile” du projet, et le back-end traite autant de la gestion des données que de la sécurité, ce qui en fait un élément primordial du site, cependant, j’ai des lacunes de connaissances en ce domaine et doit y remédier pour progresser de nouveau.
                    </p>
                </div>
                <div className="c-title" id="bilan">
                    <h2>Bilan de fin de stage</h2>
                </div>
                <div className="c-content">
                    <p>
                        De ce stage, je retire des enseignements extrêmement importants vis-à-vis du métier de manière générale. Je doit traiter mon travail autrement et plus efficacement, comparé à avant/au début du stage, où je faisais énormément d’erreurs d’architecture. La plupart étant des erreurs de débutant, des lacunes que j’ai conservé pendant trop longtemps, désormais, je suis enfin en capacité de les voir.
                    </p>
                    <br />
                    <p>
                        Lors de ce stage, j’ai travaillé sur trois projets, complété deux, et laissé le troisième à la, précédemment stagiaire désormais nouvelle contractuelle qui a repris le projet derrière moi. Cependant, j’ai essayé de faire au mieux, les résultats n’ont pas convenus à l’entreprise en particulier sur mon temps de travail, je dois mettre en cause mon inactivité lors de l’année de césure par redoublement sur ce point n’ayant pas assez pratiqué pendant cette dernière et par extension, avoir beaucoup perdu sur ma pratique de notre discipline.
                    </p>
                    <br />
                    <p>
                        Lors du stage, pour rentrer dans les détails, j’ai appris une rigueur de travail que je n’avais pas, un ordre de travail plus fonctionnel et précis que ce que je m’étais défini auparavant. J'ai appris à utiliser des composants pour ne pas répéter leurs contenus à chaque ittération, transmettre des infos entre ces derniers pour faciliter la création, préciser mes variables pour aider les futurs développeurs à traiter mon code. Mais également, j'ai découvert React, une bibliothèque dont je ne savais pas encore me servir, donc le temps de prendre cette dernière en main.
                    </p>
                    <br />
                    <p>
                        Au début du stage, je ne m’étais pas fixé d’objectifs particuliers autre que compléter ce dernier et apprendre des gens qui m’entourent, de ce fait, j’ai réussi ces points selon moi. Même si difficilement déscriptible à l’écrit, j’ai appris à considérer le point de vu client dans l’équation, à développer autrement, mais également, à étudier le code de quelqu’un d’autre et rendre le mien, au même titre, exploitable.
                    </p>
                    <br />
                    <p>
                        J’ai eu l'occasion de mentionner mon problème face à mes lacunes et par conséquent les délais. Au début du stage, il m’était extrèmement compliqué de définir un délai et de m’y tenir. En début de stage, il m'arrivait souvent de sur-estimer mes connaissances face aux tâches qui m'étaient confié, ce qui, par conséquent, m'empéchait de définir des délais clairs et de m'y tenir. Une fois arrivé à l'échéance du stage, j’ai mieux réussi à considérer ces points, réduisant mon écart avec mes estimations de jusqu’à quatre fois la valeur initiale à seulement, maximum une heure de décalage, que ce soit en excès ou en défaut.
                    </p>
                    <br />
                    <p>
                        Lors du stage, j'ai pu améliorer mes connaissances quant-à l'utilisation de Visual Studio Code. J’ai appris des raccourcis pour améliorer mon temps de travail mais également le confort de ce dernier, et des snippets permettant de réduire mon temps de développement pour les tâches redondantes, des tampons en somme. J'ai appris également à avoir plus confiance dans mes connaissances envers git, que je redoutais utiliser pour ne pas endommager le travail de mes collaborateurs.
                    </p>
                    <br />
                    <p>
                        Je pense que la mentalité de l'organisation me correspond. Il me reste à corriger mes lacunes personnelles et approfondir mon savoir en particulier sur le back-end étant désormais mon point faible principal. Mais une fois cela fait, je pense que j'atteindrai de nouveau un niveau adapté à ce qui est attendu.
                    </p>
                    <br />
                    <p>
                        Ce stage m’a permis, comparé au premier qui était dans un domaine différent très enrichissant, de comprendre à quel domaine j’aspirais par cette formation sur une échelle professionnelle, que ce soit dans la rigueur, dans les délais, dans l’organisation ainsi que la communication, tout en voyant l’importance d’un chef de projet pour faciliter les échanges avec le client. Pour en revenir au fait initial, je pense avoir bien choisir ma filière, il ne tient qu'à moi de m’améliorer pour l'honnorer. 
                    </p>
                </div>
                <div className="c-title" id="remerciements">
                    <h2>Remerciements</h2>
                </div>
                <div className="c-content">
                    <br />
                    <p>
                        Pour ce stage je tiens à remercier plusieurs personnes, à commencer par Messieurs David Vergez et Stéphane Garcia, Présidents de Panda One, ayant accepté de m’intégrer pendant deux mois dans le cadre d’un stage malgré le fait que je soit un élève redoublant, ce qui à refroidi plusieurs entreprises à mon égard. 

                    </p>
                    <br />
                    <p>
                        J’aimerais également remercier Marylou Lohier, précédemment stagiaire, et désormais contractuelle de Panda One, de m'avoir aidé à comprendre énormément de choses lors de ce stage, quitte à se pencher avec moi sur des problèmes de développement auquel j’ai fait face pour les résoudre, son aide fut précieuse. 

                    </p>
                    <br />
                    <p>
                        Pour terminer avec les remerciements du côté de Panda One, la personne à qui je dois le plus est mon maître de stage, un puit de savoir qui le met à disponibilité des autres, une personne passionnée par son domaine et pédagogue en ce dernier. Ainsi je remercie Monsieur Vincent Echavidre, mon maître de stage.

                    </p>
                    <br />
                    <p>
                        Pour conclure cette partie de remerciements, je me permet de l’inclure indépendamment que cela concerne quelqu’un d’extérieur à mon stage, mais j’aimerais remercier ma propre mère, Sandrine Piotte Coutant, de m’avoir aidé à trouver ce stage, dans mon cas ayant des difficultés sociales et une grande difficulté à contacter les organismes, surtout suite à l’année précédente redoublée ou j’ai essuyé refus sur refus, elle a su m’aider cette année et par ses connaissances, me faire intégrer un organisme, elle a mis fin à un cauchemar, je ne l’en remercierai jamais assez.

                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}