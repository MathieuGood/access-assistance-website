import React, { ReactNode } from "react"

const Section: React.FC<{
	sectionData: { title: string; subtitle?: string }
	bgColor?: string
	titleColor?: string
	subtitleColor?: string
	children: ReactNode
}> = ({ sectionData, bgColor, titleColor, subtitleColor, children }) => {
	return (
		<section className={`${bgColor} shadow-md mb-2`}>
			<div className="max-w-screen-xl mx-auto grid py-8 lg:py-10 px-4 lg:px-16">
				<div className="pb-10 pt-6 text-center">
					<h1 className={`text-5xl font-extrabold tracking-wide ${titleColor}`}>
						{sectionData.title}
					</h1>
					{sectionData.subtitle && (
						<h2
							className={`mt-2 text-2xl leading-8 font-extrabold tracking-tight sm:text-3xl ${subtitleColor}`}>
							{sectionData.subtitle}
						</h2>
					)}
				</div>
				<div id="section-content" className="px-4">
					{children}
				</div>
			</div>
		</section>
	)
}

export default Section
