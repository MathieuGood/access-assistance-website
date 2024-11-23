import React, { useState, FormEvent } from "react"

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
		<div className={`py-12`} id="contact">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
					<h2 className="text-2xl font-bold mb-4">Contact</h2>
					{formSubmitted ? (
						<p className="text-green-500">
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

							<div>
								<button
									type="submit"
									disabled={isSubmitting}
									className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background   hover:text-primary md:py-4 md:text-lg md:px-10 ${
										isSubmitting ? "bg-gray-400" : "bg-primary hover:bg-border"
									}`}>
									{isSubmitting ? "Envoi en cours..." : "Envoyer"}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

export default Contact
