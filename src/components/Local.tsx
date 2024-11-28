import React from "react"
import data from "../data/contentData.json"

const Local: React.FC = () => {
	const { local } = data
	return (
		<div id="local" className="py-4 lg:px-16 bg-green-medium">
			<h1 className="text-4xl font-extrabold text-center text-black pb-6 pt-10 text-gray-dark">
				{local.title}
			</h1>

			<div className="about-paragraph grid max-w-screen-xl px-4 py-2 mx-auto md:gap-2 xl:gap-0 md:py-8 md:grid-cols-12">
				<div className="mr-auto md:col-span-7 px-4">
					<div className="local-title text-2xl font-bold mb-2">
						{local.subtitle}
					</div>
					<div className="local-desc text-base md:text-xl text-gray-light place-self-center">
						{local.description}
					</div>
				</div>
				<div className="local-media flex mt-2 md:mt-0 md:col-span-5 px-4 md:flex">
					<img
						src={local.img.src}
						alt={local.img.alt}
						className="object-contain w-full h-auto"
					/>
				</div>
			</div>
		</div>
	)
}

export default Local
