import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Local from "../components/Local"
import Clients from "../components/Clients"
import Footer from "../components/Footer"
import Ecology from "../components/Ecology"

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<Hero />
			<About />
			<Services />
			<Ecology />
			<Local />
			<Clients />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
