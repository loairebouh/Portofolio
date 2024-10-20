/* eslint-disable react/jsx-key */
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckBox from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
	{
		company: "Acme Corp",
		year: "2022",
		title: "Dark Saas Landing Page",
		results: [
			{ title: "Enhanced user experience by 40%" },
			{ title: "Improved site speed by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://youtu.be/4k7IdSLxh6w",
		image: darkSaasLandingPage,
	},
	{
		company: "Innovative Co",
		year: "2021",
		title: "Light Saas Landing Page",
		results: [
			{ title: "Boosted sales by 20%" },
			{ title: "Expanded customer reach by 35%" },
			{ title: "Increased brand awareness by 15%" },
		],
		link: "https://youtu.be/7hi5zwO75yc",
		image: lightSaasLandingPage,
	},
	{
		company: "Quantum Dynamics",
		year: "2023",
		title: "AI Startup Landing Page",
		results: [
			{ title: "Enhanced user experience by 40%" },
			{ title: "Improved site speed by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://youtu.be/Z7I5uSRHMHg",
		image: aiStartupLandingPage,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16">
			<div className="container">
				<div className="flex justify-center ">
					<p className="uppercase font-semibold tracking-widset bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
						Real World Results
					</p>
				</div>

				<h2 className="font-serif text-3xl text-center mt-6">
					Feautured Project
				</h2>
				<p className="text-center text-white/60 mt-4">
					See how I turn ideas into captivating and functional digital
					experiences
				</p>
				<div className="flex flex-col mt-10 gap-20">
					{portfolioProjects.map((project) => (
						<div
							key={project.title}
							className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none"
						>
							<div
								className="absolute inset-0 -z-10 opacity-5"
								style={{
									backgroundImage: `url(${GrainImage.src})`,
								}}
							></div>
							<div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex gap-2 font-bold uppercase tracking-widest text-sm ">
								<span>{project.company}</span>
								<span>&bull;</span>
								<span>{project.year}</span>
							</div>
							<h3 className="font-serif text-2xl">{project.title}</h3>
							<hr className="border-t-2 border-white/5 mt-2" />
							<ul className="flex flex-col gap-4 mt-4">
								{project.results.map((result) => (
									<li
										key={project.title}
										className="flex gap-2 text-sm text-white/50"
									>
										<CheckBox className="size-5" />
										<span>{result.title}</span>
									</li>
								))}
							</ul>
							<a href={project.link}>
								<button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
									<ArrowUpRight className="size-4" />
									<span>View Live Project</span>
								</button>
							</a>
							<Image
								src={project.image}
								alt={project.title}
								className="mt-8 -mb-4"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
