import Navbar from "./NavbarFooter";

export default function Footer({...props})
{
	return(
		<div className="footer content-center">
			<div className="flex flex-row o-container o-container--centered">
				<div className="w-1/2 flex flex-col mt-8">
					<img src="../dist/images/logo-aurelien.png" alt="" className="pb-10" />
					<p>Créé par Aurélien PIOTTE, étudiant 2ème année de Licence</p>
					<br />
					<p>Licence Professionnelle - Métiers de l'Informatique, Applications Web</p>
				</div>
				<div className="w-1/2 flex flex-col">
					<div className="text-center unilim" />
					<p className="text-center">Référent stage : Philippe Leproux</p>
					<div className="flex flex-row mt-5">
						<Navbar />
					</div>
				</div>
			</div>
		</div>
	)
}