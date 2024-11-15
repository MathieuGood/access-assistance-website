import React from "react"
import Hero from "../components/Hero"
import Header from "../components/Header"
import About from "../components/About"

const Home: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
            <Header />
			<Hero />
			<About />
		</div>
	)
}

export default Home
