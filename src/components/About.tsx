import React from "react"
import data from "../data/contentData.json"

const About: React.FC = () => {
	const { about } = data
	return (
		<div className="about py-4">
			<h1 className="text-4xl font-extrabold text-center text-green-light pb-3 pt-8">
				{about.title}
			</h1>

			{about.items.map((paragraph, index) => (
				<div
					key={index}
					className="about-paragraph grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
					<div
						className={`about-desc  mr-auto place-self-center lg:col-span-7 px-4 ${
							index % 2 === 0 ? "order-1 lg:order-2" : ""
						}`}>
						{paragraph.description}
					</div>
					<div
						className={`about-media flex lg:mt-0 lg:col-span-5 px-4 lg:flex w-auto h-auto ${
							index % 2 === 0 ? "order-2 lg:order-1" : ""
						}`}>
						<img src={paragraph.img.src} alt={paragraph.img.alt} />
					</div>
				</div>
			))}
		</div>
	)
}

export default About
