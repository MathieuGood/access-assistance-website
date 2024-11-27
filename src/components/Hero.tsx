const Hero: React.FC = () => {
	return (
		<section className="bg-white">
			<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:px-16 lg:grid-cols-12">
				<div className="mr-auto place-self-center lg:col-span-6">
					<h1 className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl">
						Une idée ou un besoin ?
					</h1>
					<h1 className="max-w-2xl mb-4 text-4xl text-green-light font-extrabold md:text-5xl xl:text-6xl">
						On peut le faire !
					</h1>
					<p className="max-w-2xl mb-6 text-gray-light lg:mb-8 md:text-lg lg:text-xl">
						Votre partenaire à taille humaine pour tous vos besoins en nettoyage dans le
						département du Bas-Rhin.
					</p>
					<a
						href="tel:+33388871515"
						className="bg-green-light inline-flex items-center justify-center px-7 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
						03 88 87 15 15
					</a>
					<a
						href="#"
						className="inline-flex items-center justify-center px-7 py-3 text-base font-medium text-center text-green-dark border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-green-dark">
						Demander un devis
					</a>
				</div>
				<div className=" flex mt-4 lg:mt-0 lg:col-span-6 lg:flex w-auto h-auto">
					<img
						src="/images/photo-nettoyage-exterieur.jpg"
						alt="Agent Access Assistance"
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
