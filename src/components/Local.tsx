import React from "react"
import data from "../data/contentData.json"
import MapWithCities from "./MapWithCities"
import Section from "./Section"

const Local: React.FC = () => {
	const { local } = data
	return (
		<Section sectionData={local} bgColor="bg-green-light">
			<div className="grid max-w-screen-xl mx-auto gap-2 md:gap-5 lg:gap-6 xl:gap-8 md:py-8 md:grid-cols-12">
				<div className="mr-auto md:col-span-7">
					<div className="local-title text-2xl font-bold mb-2">{local.items[0].title}</div>
					<div className="local-desc text-base md:text-xl text-gray-light place-self-center">
						{local.items[0].description}
					</div>
				</div>
				<div className="local-media flex mt-2 md:mt-0 md:col-span-5 md:flex">
					{/* <img
						src={local.img.src}
						alt={local.img.alt}
						className="object-contain w-full h-auto"
					/> */}
					<MapWithCities />
				</div>
			</div>
		</Section>
	)
}

export default Local