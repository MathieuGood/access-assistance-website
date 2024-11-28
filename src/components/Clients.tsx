import React from "react"
import data from "../data/contentData.json"

const Clients: React.FC = () => {
	const { clients } = data
	const numberofClientsToDisplay = 4
	return (
		<div id="clients" className="py-4 lg:px-16 bg-white">
			<h1 className="text-4xl font-extrabold text-center text-black pb-6 pt-10 text-gray-dark">
				{clients.title}
			</h1>

			<div
				id="client-logos"
				className={`flex flex-wrap justify-self-center max-w-screen-xl px-4 py-2 md:py-8 gap-4`}>
				{clients.items.map((client, index) => {
					if (index < numberofClientsToDisplay) {
						return (
							<div key={index} className="flex p-2">
								<img
									src={client.img.src}
									alt={client.img.alt}
									className="object-contain max-h-24 max-w-56"
								/>
							</div>
						)
					}
					return null
				})}
			</div>
		</div>
	)
}

export default Clients
