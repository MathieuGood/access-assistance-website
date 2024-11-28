import React from "react"
import data from "../data/contentData.json"

const LegalModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
	const { legal } = data
	const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
			onClick={handleBackgroundClick}>
			<div className="relative bg-white w-10/12 md:w-3/4 lg:w-3/4 max-w-[700px] max-h-screen p-6 rounded-lg shadow-lg overflow-y-auto">
				<h2 className="text-2xl font-bold mb-4">{legal.title}</h2>

				{legal.paragraphs.map((paragraph, index) => {
					return (
						<div key={index} className="mt-4">
							<h3 className="text-base font-semibold">{paragraph.title}</h3>
							{paragraph.content.map((content, index) => {
								return (
									<p key={index} className="text-xs text-gray-600">
										{content}
									</p>
								)
							})}
						</div>
					)
				})}

				<div className="flex justify-center mt-6 sticky bottom-0 bg-white py-4">
					<button
						onClick={onClose}
						className="inline-flex items-center justify-center px-8 py-2 mt-4 text-m font-medium text-center text-gray-900 border bg-green-medium border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 transition duration-300">
						Fermer
					</button>
				</div>
			</div>
		</div>
	)
}

export default LegalModal
