import React from "react"
import data from "../data/contentData.json"
import MapWithCities from "./map/MapWithCities"
import Section from "./Section"

const Local: React.FC = () => {
	const { local } = data
	return (
		<Section sectionData={local}>
			<div className="grid max-w-screen-xl mx-auto gap-2 py-2 md:pb-8md:gap-5 lg:gap-6 xl:gap-8 md:grid-cols-12">
				<div className="mr-auto md:col-span-7 flex justify-center">
					{local.items[0].title && (
						<div className="local-title text-2xl font-bold mb-2">
							{local.items[0].title}
						</div>
					)}
					<div className="local-desc text-base md:text-xl place-self-center">
						{local.items[0].description}
					</div>
				</div>
				<div className="local-media flex mt-2 md:mt-0 md:col-span-5 md:flex">
					<MapWithCities />
				</div>
			</div>
		</Section>
	)
}

export default Local
