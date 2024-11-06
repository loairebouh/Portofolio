"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import BookImage from "@/assets/images/book-cover.png";
import { isContext } from "vm";
import JavaIcon from "@/assets/icons/java-icon-l.svg";
import PhotoShopIcon from "@/assets/icons/photoshop-icon-l.svg";
import TailwindIcon from "@/assets/icons/tailwind-icon-l.svg";
import ReactIcon from "@/assets/icons/react-icon-l.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MongoDBIcon from "@/assets/icons/mongodb-icon-l.svg";
import { TechIcon } from "@/components/TechIcon";
import MapImage from "@/assets/images/algeria-map-image.png";
import SmileMemoji from "@/assets/icons/smile-loai copy.png";
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxitems = [
	{
		title: "Java",
		iconType: JavaIcon,
	},
	{
		title: "MongoDB",
		iconType: MongoDBIcon,
	},
	{
		title: "React",
		iconType: ReactIcon,
	},
	{
		title: "TailwindCSS",
		iconType: TailwindIcon,
	},
	{
		title: "Github",
		iconType: GithubIcon,
	},
];

const hobbies = [
	{
		title: "Traveling",
		emoji: "🌍",
		left: "5",
		top: "5",
	},
	{
		title: "Equestrian",
		emoji: "🐎",
		left: "50",
		top: "5",
	},

	{
		title: "Fragrances",
		emoji: "✨",
		left: "35",
		top: "40",
	},
	{
		title: "Gym",
		emoji: "🏋️‍♂️",
		left: "10",
		top: "35",
	},
	{
		title: "Playing",
		emoji: "🎮",
		left: "70",
		top: "45",
	},
	{
		title: "Quran",
		emoji: "🤍",
		left: "5",
		top: "65",
	},
	{
		title: "Searching",
		emoji: "🔍",
		left: "45",
		top: "75",
	},
];

export const AboutSection = () => {
	const constraintRef = useRef(null);
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader
					eyebrow="About me"
					title="A Glimpse Into My World"
					descreption="Learn More About Who I'm, What i do, and what inspires me"
				/>
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid sm:grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 md:gap-8 ">
						<Card className="h-[320px] md:col-span-2 lg:col-span-1">
							<CardHeader
								title="My Reads"
								descreption="Explore the books shaping my prespectives."
							/>
							<div className="w-40 mx-auto mt-2 md:mt-0">
								<Image src={BookImage} alt="Book Image" />
							</div>
						</Card>
						<Card className="h-[320px]  md:col-span-3 lg:col-span-2 ">
							<CardHeader
								title="My ToolBox"
								descreption="Explore the technologies and tools I use to craft exeptional
								digital experience"
								className=""
							/>
							<ToolBoxItems
								items={toolboxitems}
								className=""
								itemsWrapperClassName="animate-move-left [animation-duration:20s]"
							/>
							<ToolBoxItems
								items={toolboxitems}
								className="mt-6"
								itemsWrapperClassName="animate-move-right [animation-duration:20s]"
							/>
						</Card>
					</div>
					<div className="grid gap-8 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
						<Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
							<CardHeader
								title="Beyond the Work"
								descreption="Explore my interests and hobbies beyond the world of work."
								className="px-6 py-6"
							/>
							<div className="relative flex-1" ref={constraintRef}>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute "
										style={{
											left: `${hobby.left}%`,
											top: `${hobby.top}%`,
										}}
										drag
										dragConstraints={constraintRef}
									>
										<span>{hobby.emoji}</span>
										<span className="font-medium text-gray-950 ">
											{hobby.title}
										</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
							<Image
								src={MapImage}
								alt={"Map Image"}
								className="h-full w-full object-cover object-left-top"
							/>
							<div className="absolute top-1/2 left-1/2 -translate-x-2 translate-y-10 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
								<div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
								<div className="asbolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
								<Image
									src={SmileMemoji}
									alt={"Smile Memoji"}
									className="size-20 mt-1.5"
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
