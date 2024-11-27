import React from "react"
import data from "../data/contentData.json"

const Services: React.FC = () => {
	const { services } = data
	const { title, subtitle, description, items } = services
	return (
		<div className="services grid max-w-screen-xl px-4 py-2 mx-auto lg:px-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h1 className="text-4xl font-extrabold text-center text-green-light">
						{title}
					</h1>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
						{subtitle}
					</p>
					<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">{description}</p>
				</div>

				<div className="mt-10">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{items.map(service => (
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
				</div>
			</div>
		</div>
	)
}

export default Services
