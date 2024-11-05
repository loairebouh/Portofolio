/* eslint-disable react/jsx-key */
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import qotraWebPage from "@/assets/images/qotraimage.png";
import nexaWebPage from "@/assets/images/nexadecopage.png";
import Image from "next/image";
import CheckBox from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const portfolioProjects = [
	{
		company: "E COM",
		year: "2024",
		title: "Ys Shop Wesbite",
		results: [
			{ title: "Enhanced user experience by 40%" },
			{ title: "Improved site speed by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://youtu.be/4k7IdSLxh6w",
		image: darkSaasLandingPage,
	},
	{
		company: "Qotra",
		year: "2024",
		title: "Main website of Qotra's co",
		results: [
			{ title: "Enhanced user experience by 10%" },
			{ title: "Expanded customer reach by 35%" },
			{ title: "Increased brand awareness by 15%" },
		],
		link: "https://qotra.dev",
		image: qotraWebPage,
	},
	{
		company: "Nexa",
		year: "2021",
		title: "Decoration Online Startup",
		results: [
			{ title: "Enhanced decoraton experience in algeria" },
			{ title: "Improved brand reach by 50%" },
			{ title: "Increased mobile traffic by 35%" },
		],
		link: "https://nexa-deco.com",
		image: nexaWebPage,
	},
];

export const ProjectsSection = () => {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<div className="flex justify-center ">
					<p className="uppercase font-semibold tracking-widset bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
						Real World Results
					</p>
				</div>

				<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
					Feautured Project
				</h2>
				<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
					See how I turn ideas into captivating and functional digital
					experiences
				</p>
				<div className="flex flex-col mt-10 md:mt-20 gap-20">
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className=" px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
							style={{
								top: `calc(64px + ${projectIndex * 40} px `,
							}}
						>
							<div className="lg:grid lg:grid-cols-2 lg:gap-16">
								<div className="lg:pb-16">
									<div className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex gap-2 font-bold uppercase tracking-widest text-sm ">
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>
									<h3 className="font-serif text-2xl md:text-4xl md:mt-5 pb-0">
										{project.title}
									</h3>
									<hr className="border-t-2 border-white/5 mt-2 md:mt-5" />
									<ul className="flex flex-col gap-4 mt-4 md:mt-5">
										{project.results.map((result) => (
											<li
												key={project.title}
												className="flex gap-2 text-sm md:text-base text-white/50"
											>
												<CheckBox className="size-5 md:size-6" />
												<span>{result.title}</span>
											</li>
										))}
									</ul>
									<a href={project.link}>
										<button className="bg-white text-gray-950 h-12 w-full md:w-auto      md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
											<ArrowUpRight className="size-4" />
											<span>View Live Project</span>
										</button>
									</a>
								</div>
								<div className="relative">
									<Image
										src={project.image}
										alt={project.title}
										className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full  lg:max-w-none lg:w-auto"
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
