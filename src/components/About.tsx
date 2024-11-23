const About: React.FC = () => {
	return (
		<div className="about py-4">
			<h1 className="text-4xl font-extrabold text-center text-green-light">
				Qui sommes-nous ?
			</h1>

			<div className="grid max-w-5xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
				<div className="photo-about flex lg:mt-0 lg:col-span-5 px-4 lg:flex w-auto h-auto">
					<img src="/images/fourgon.svg" alt="Access Assistance" />
				</div>
				<div className="text-about mr-auto place-self-center lg:col-span-7 px-4">
					Bla bla this is just random text to fill in this part of the website Bla bla
					this is just random text to fill in this part of the website Bla bla this is
					just random text to fill in this part of the website Bla bla this is just random
					text to fill in this part of the website Bla bla this is just random text to
					fill in this part of the website Bla bla this is just random text to fill in
					this part of the website
				</div>
			</div>

			<div className="grid max-w-5xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
				<div className="text-about mr-auto place-self-center lg:col-span-7 px-4">
					Bla bla this is just random text to fill in this part of the website Bla bla
					this is just random text to fill in this part of the website Bla bla this is
					just random text to fill in this part of the website Bla bla this is just random
					text to fill in this part of the website Bla bla this is just random text to
					fill in this part of the website Bla bla this is just random text to fill in
					this part of the website
				</div>
				<div className="photo-about flex lg:mt-0 lg:col-span-5 px-4 lg:flex w-auto h-auto">
					<img src="/images/photo-batiment.jpg" alt="Bureaus Access Assistance" />
				</div>
			</div>
		</div>
	)
}

export default About
