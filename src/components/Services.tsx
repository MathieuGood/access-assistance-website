import React from "react"
import data from "../data/contentData.json"

const Services: React.FC = () => {
	const { services } = data
	const { title, subtitle, items } = services
	return (
		<div id="services" className="grid max-w-screen-xl px-4 py-4 mx-auto">
			<div className="mx-auto px-4 sm:px-6 lg:px-8 pb-6 pt-10">
				<div className="">
					<h1 className="text-5xl font-extrabold tracking-wide text-green-light">{title}</h1>
					<p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
						{subtitle}
					</p>
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
