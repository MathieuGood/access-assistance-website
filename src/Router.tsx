import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App: React.FC = () => {
	return (
		<Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App
