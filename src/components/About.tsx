const About: React.FC = () => {
	return (
		<div className="about py-4">
			<h1 className="text-4xl font-extrabold text-center text-green-light">
				Qui sommes-nous ?
			</h1>

			<div className="grid max-w-5xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
				<div className="photo-about flex lg:mt-0 lg:col-span-6 lg:flex w-auto h-auto">
					<img src="/images/fourgon.svg" alt="Access Assistance" />
				</div>
				<div className="text-about mr-auto place-self-center lg:col-span-6">
					Bla bla this is just random text to fill in this part of the website
				</div>
			</div>
		</div>
	)
}

export default About
