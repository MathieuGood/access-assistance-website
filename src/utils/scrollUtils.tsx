export const scrollToSection = (sectionId: string) => {
	console.log("FUNCTION scrollToSection")
	const section = document.getElementById(sectionId)
	console.log(`Section corresponding to '${sectionId}' : ${section}`)
	if (section) {
		section.scrollIntoView({ behavior: "smooth" })
	}
}
