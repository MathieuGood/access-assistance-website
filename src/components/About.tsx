import React from "react"
import data from "../data/contentData.json"
import Section from "./Section"

const About: React.FC = () => {
	const { about } = data
	return (
		<Section sectionData={about} bgColor="bg-gray-100">
			<div className="about-paragraph grid py-2 md:pb-8 mx-auto gap-2 md:gap-5 lg:gap-6 xl:gap-8 md:grid-cols-12">
				<div className={`mr-auto md:col-span-7 md:order-2 flex flex-col justify-center `}>
					<div>
						<div className="about-paragraph-title text-xl font-bold mb-2">
							{about.items[0].title}
						</div>
						<p className="about-paragraph-desc text-base place-self-center md:text-md">
							{about.items[0].description}
						</p>
					</div>
					<div className="mt-6">
						<div className="about-paragraph-title text-xl font-bold mb-2">
							{about.items[1].title}
						</div>
						<p className="about-paragraph-desc text-base place-self-center md:text-md">
							{about.items[1].description}
						</p>
					</div>
				</div>
				<div
					className={`about-paragraph-media flex items-center mt-2 md:mt-0 md:col-span-5 md:order-1`}>
					<img
						src={about.items[0].img.src}
						alt={about.items[0].img.alt}
						className="object-cover max-h-48 md:max-h-max w-full"
					/>
				</div>
			</div>
		</Section>
	)
}

export default About
