import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const links = [
	{
		title: "Facebook",
		href: "https://web.facebook.com/loaixrebouh/",
	},
	{
		title: "Instagram",
		href: "https://www.instagram.com/loai.space/",
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/loai-rebouh-01b37b285/",
	},
	{
		title: "Github",
		href: "https://github.com/loairebouh",
	},
];

export const Footer = () => {
	return (
		<footer className="relative overflow-x-clip">
			{/* Removed the absolute background interference */}
			<div className="container relative z-20">
				<div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center gap-8 relative z-20">
					<div className="text-white/40">&copy; 2024. All rights reserved.</div>
					<nav className="flex flex-col items-center md:flex-row md:justify-between gap-8 relative z-20">
						{links.map((link) => (
							<a
								href={link.href}
								key={link.title}
								className="inline-flex items-center gap-1.5 relative z-20"
							>
								<span className="font-semibold">{link.title}</span>
								<ArrowUpRight className="size-4" />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
