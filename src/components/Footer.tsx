import React, { useState, useEffect } from "react"
import LegalModal from "./LegalModal"

const Footer: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "auto"
		}

		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isModalOpen])

	return (
		<footer className="footer bg-green-medium">
			<div className="max-w-screen-xl p-4 py-8 mx-auto lg:py-12 md:p-8">
				<div className="text-center text-sm space-y-2">
					<p>Access Assistance, 5 rue Frédéric Bartholdi, 67130 Wasselonne</p>
					<p
						onClick={openModal}
						className="ml-2 text-primary-1 hover:underline cursor-pointer">
						Mentions légales
					</p>

					<p className="block text-sm text-center text-gray-light">
						© 2024 <a href="https://www.mathieubon.com">Mathieu Bon</a>
					</p>
				</div>
			</div>
			{isModalOpen && <LegalModal onClose={closeModal} />}
		</footer>
	)
}

export default Footer
