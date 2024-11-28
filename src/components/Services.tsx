import React from "react"
import data from "../data/contentData.json"
import Section from "./Section"

const Services: React.FC = () => {
	const { services } = data
	return (
		<Section sectionData={services} bgColor="bg-white">
			<dl className="space-y-10 md:space-y-0  md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10">
				{services.items.map(service => (
					<div key={service.name} className="relative ">
						<dt>
							<div
								className={`absolute flex items-center justify-center h-auto w-14 bg-background text-tertiary`}>
								<img
									className={`inline-block h-18 w-18 mt-2`}
									src={service.icon}
									alt={service.name}
								/>
							</div>
							<p className="ml-20 text-lg leading-6 font-medium text-gray-900">
								{service.name}
							</p>
						</dt>
						<dd className="mt-2 ml-20 text-base text-gray-500">
							{service.description}
						</dd>
					</div>
				))}
			</dl>
		</Section>
	)
}

export default Services
