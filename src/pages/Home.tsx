import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Local from "../components/Local"

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Hero />
			<About />
			<Services />
			<Local />
			<Contact />
		</div>
	)
}

export default Home
