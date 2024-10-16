export const Header = () => {
	return (
		<div className="flex justify-center items-center relative top-3">
			<nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
				<a href="#home" className="nav-item">
					Home
				</a>
				<a href="#projects" className="nav-item">
					Projects
				</a>
				<a href="#about" className="nav-item">
					About
				</a>
				<a
					href="#contact"
					className="nav-item bg-white text-gray-900 hover: bg-white/70 "
				>
					Contact
				</a>
			</nav>
		</div>
	);
};
