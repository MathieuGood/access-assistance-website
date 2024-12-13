import React from "react"
import data from "../data/contentData.json"
import Section from "./Section"

const About: React.FC = () => {
	const { about } = data
	return (
		<Section sectionData={about} bgColor="bg-gray-200" subtitleColor="text-green-medium">
			{about.items.map((paragraph, index) => (
				<div
					key={index}
					className="about-paragraph grid py-2 md:py-8 mx-auto gap-2 md:gap-5 lg:gap-6 xl:gap-8 md:grid-cols-12">
					<div
						className={`mr-auto md:col-span-7 ${
							index % 2 === 0 ? "order-1 md:order-2" : ""
						}`}>
						<div className="about-paragraph-title text-2xl font-bold mb-2">
							{paragraph.title}
						</div>
						<div className="about-paragraph-desc text-base place-self-center">
							{paragraph.description}
						</div>
					</div>
					<div
						className={`about-paragraph-media flex mt-2 md:mt-0 md:col-span-5 md:flex ${
							index % 2 === 0 ? "order-2 md:order-1" : ""
						}`}>
						<img
							src={paragraph.img.src}
							alt={paragraph.img.alt}
							className="object-contain w-full h-auto"
						/>
					</div>
				</div>
			))}
		</Section>
	)
}

export default About
