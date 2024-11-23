const Services: React.FC = () => {
	return (
		<div className="services py-4">
			<h1 className="text-4xl font-extrabold text-center text-green-light">Prestations</h1>

			<div className="grid max-w-5xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-2">
				<div>
					<div className="service-icon">ICON</div>
					<div className="service-desc">DESCRIPTION</div>
				</div>
			</div>

			<div className="grid max-w-5xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12">
				<div className="service-icon flex lg:mt-0 lg:col-span-5 px-4 lg:flex w-auto h-10">
					<img src="/images/cleaner-mop.svg" alt="Access Assistance" />
				</div>
				<div className="service-desc mr-auto place-self-center lg:col-span-7 px-4">
					Bla bla this is just random text to fill in
				</div>
			</div>
		</div>
	)
}

export default Services
