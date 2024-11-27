import data from "../data/contentData.json"

const Header: React.FC = () => {
	const { navigation } = data
	return (
		<div className="grid bg-white max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:px-16">
			<nav className="relative flex items-center  sm:h-10 justify-start">
				<img
					src="/images/logo-access-assistance.png"
					alt="Logo Access Assistance"
					className="h-16 w-auto sm:h-16"
				/>
				<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 hover:transition-shadow">
					{navigation.map((section, index) => {
						return (
							<a
								key={index}
								href={section.href}
								className="font-medium text-gray-light hover:text-green-light">
								{section.name}
							</a>
						)
					})}
				</div>
			</nav>
		</div>
	)
}

export default Header
