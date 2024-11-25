const Header: React.FC = () => {
	return (
		<div className="grid bg-white max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10">
			<nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
				<img
					src="/images/logo-access-assistance.png"
					alt="Logo Access Assistance"
					className="h-16 w-auto sm:h-16"
				/>
				<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 hover:transition-shadow">
					<a href="#" className="font-medium text-gray-light hover:text-green-light">Notre société</a>
					<a href="#"className="font-medium text-gray-light hover:text-green-light ">Prestations</a>
					<a href="#" className="font-medium text-gray-light hover:text-green-light">Contact</a>

				</div>
			</nav>
		</div>
	)
}

export default Header
