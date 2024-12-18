import React, { useState, FormEvent } from "react"
import Section from "./Section"

interface FormData {
	name: string
	email: string
	message: string
}
const Contact = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: ""
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [formSubmitted, setFormSubmitted] = useState(false)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value
		})
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Mocking the form submission. Replace this with your email sending logic.
		try {
			await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating network delay
			setFormSubmitted(true)
		} catch (error) {
			console.error("Failed to send the form:", error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Section sectionData={{ title: "Contact" }} bgColor="">
			<div className="py-4 md:px-56">
				{formSubmitted ? (
					<p>
						Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs
						délais.
					</p>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700">
								Nom
							</label>
							<input
								type="text"
								name="name"
								id="name"
								required
								value={formData.name}
								onChange={handleInputChange}
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								value={formData.email}
								onChange={handleInputChange}
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								name="message"
								id="message"
								rows={4}
								required
								value={formData.message}
								onChange={handleInputChange}
								className="mt-1 p-2 w-full border rounded-md"
							/>
						</div>

						<div className="flex justify-center">
							<button
								type="submit"
								disabled={isSubmitting}
								className={`bg-green-medium inline-flex items-center justify-center px-4 sm:px-7 py-3 mr-3 text-base font-medium text-center text-green-dark rounded-lg focus:ring-4 focus:ring-primary-300 hover:shadow-md  ${
									isSubmitting ? "bg-gray-400" : "bg-primary hover:bg-border"
								}`}>
								{isSubmitting ? "Envoi en cours..." : "Envoyer"}
							</button>
						</div>
					</form>
				)}
			</div>
		</Section>
	)
}

export default Contact
