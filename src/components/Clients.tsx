import React from "react"
import data from "../data/contentData.json"

const Clients: React.FC = () => {
	const { clients } = data
	const numberofClientsToDisplay = 3
	return (
		<section className="bg-white">
			<div id="clients" className="max-w-screen-xl mx-auto grid py-4 px-4 lg:px-16">
				<h1 className="text-4xl font-extrabold text-center pb-6 pt-10 text-gray-dark">
					{clients.title}
				</h1>

				<div
					id="client-logos"
					className={`flex justify-center flex-wrap px-4 py-2 md:py-8 gap-4`}>
					{clients.items.map((client, index) => {
						if (index < numberofClientsToDisplay) {
							return (
								<div key={index} className="flex  p-2">
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
		</section>
	)
}

export default Clients
