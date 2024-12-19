import data from "../data/contentData.json"
import { scrollToSection } from "../utils/scrollUtils"

const Hero: React.FC = () => {
	const { hero } = data
	return (
		<section className="bg-white shadow-md pb-2">
			<div className="grid max-w-screen-xl px-4 py-2 pb-4 md:py-8 mx-auto md:gap-8 lg:pb-12 lg:px-16 md:grid-cols-12">
				<div className="hero-left place-self-center md:col-span-7">
					<p className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl tracking-tighter lg:tracking-normal">
						Une idée ? Un besoin ?
					</p>
					<p className="max-w-2xl mb-4 text-4xl text-green-medium font-extrabold md:text-5xl xl:text-6xl tracking-tighter lg:tracking-normal">
						On peut le faire !
					</p>
					<h1 className="max-w-2xl md:mt-8 mb-6 text-gray-light  font-semibold lg:mb-8 md:text-lg lg:text-xl">
						Votre partenaire à taille humaine pour tous vos besoins en nettoyage dans le
						département du Bas-Rhin.
					</h1>
					<a
						href="tel:+33388871515"
						className="bg-green-medium inline-flex items-center justify-center px-4 sm:px-7 py-3 mr-3 text-base font-medium text-center text-green-dark rounded-lg focus:ring-4 focus:ring-primary-300 hover:shadow-md ">
						03 88 87 15 15
					</a>
					<a
						href="#"
						onClick={() => scrollToSection("Contact")}
						className="inline-flex items-center justify-center px-4 sm:px-7 py-3 text-base font-medium text-center text-green-dark border border-gray-300 rounded-lg focus:ring-4 focus:ring-primary-300 hover:shadow-md ">
						Demander un devis
					</a>
				</div>
				<div className="hero-right mt-4 lg:mt-0 md:col-span-5 items-center flex">
					{/* <div className="relative"> */}
					{/* TODO : Resolve bug on Safari  */}
					{/* <div className="absolute -inset-1 rounded-lg blur-sm backdrop-blur-sm bg-green-medium translate-x-1 -translate-y-1 "></div> */}
					<img
						src={hero.img.src}
						alt={hero.img.alt}
						// className="object-contain rounded-lg relative z-10 w-auto h-full"
						className="object-cover object-[center_-80px] rounded-lg relative z-10 max-h-52 md:max-h-max w-full"
					/>
					{/* </div> */}
				</div>
			</div>
		</section>
	)
}

export default Hero
