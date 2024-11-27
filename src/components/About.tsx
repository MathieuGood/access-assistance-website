import React from "react"
import data from "../data/contentData.json"

const About: React.FC = () => {
	const { about } = data
	return (
		<div className="about py-4 lg:px-16 bg-[#FAFCE5]">
			<h1 className="text-4xl font-extrabold text-center text-black pb-6 pt-10">
				{about.title}
			</h1>

			{about.items.map((paragraph, index) => (
				<div
					key={index}
					className="about-paragraph grid max-w-screen-xl px-4 py-2 mx-auto md:gap-8 xl:gap-0 md:py-8 md:grid-cols-12">
					<div
						className={`about-desc text-base text-gray-light mr-auto place-self-center md:col-span-7 px-4 ${
							index % 2 === 0 ? "order-1 md:order-2" : ""
						}`}>
						{paragraph.description}
					</div>
					<div
						className={`about-media flex mt-2 md:mt-0 md:col-span-5 px-4 md:flex w-auto h-auto ${
							index % 2 === 0 ? "order-2 md:order-1" : ""
						}`}>
						<img src={paragraph.img.src} alt={paragraph.img.alt} />
					</div>
				</div>
			))}
		</div>
	)
}

export default About
