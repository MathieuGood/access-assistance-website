import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Hero />
			<About />
			<Services />
			<Contact />
		</div>
	)
}

export default Home
