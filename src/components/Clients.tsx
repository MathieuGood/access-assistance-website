import React from "react"
import data from "../data/contentData.json"
import Section from "./Section"

const Clients: React.FC = () => {
	const { clients } = data
	const numberofClientsToDisplay = 3
	return (
		<Section sectionData={clients} bgColor="bg-gray-100" subtitleColor="text-green-medium">
			<div
				id="client-logos"
				className={`flex justify-center flex-wrap px-4 py-2 md:pt-4 md:pb-6  gap-4`}>
				{clients.items.map((client, index) => {
					if (index < numberofClientsToDisplay) {
						return (
							<div key={index} className="flex  p-2">
								<img
									src={client.img.src}
									alt={client.img.alt}
									className="object-contain max-h-24 max-w-56 drop-shadow-lg"
								/>
							</div>
						)
					}
					return null
				})}
			</div>
		</Section>
	)
}

export default Clients
