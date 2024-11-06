/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import loaiMemoji from "@/assets/images/loai-memoji.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
	const igLink = "https://www.instagram.com/loai.space/";
	const handleRedirect = () => {
		window.location.href = igLink;
	};

	return (
		<div className="py-32 md:py-48 lg:py-55 relative z-10 overflow-x-clip">
			<div className="absolute inset-1 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] z-0">
				<div
					className="absolute inset-0 -z-30 opacity-5"
					style={{
						backgroundImage: `url(${grainImage.src})`,
					}}
				></div>
				{/* Background rings and HeroOrbit components */}
				<div className={"size-[620px] hero-ring"}></div>
				{/* (Add the rest of the rings here) */}
			</div>
			<div className="container relative z-20">
				<div className="flex flex-col items-center">
					<Image src={loaiMemoji} alt="My memoji" className="size-[120px]" />
					<div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
						<div className="bg-green-500 size-2.5 rounded-full relative">
							<div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
						</div>
						<div className="text-sm font-medium">
							Available for new projects
						</div>
					</div>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
						<span>Loai Rebouh</span>
						<br />
						<span>Full Stack Developer</span>
					</h1>
					<p className="font-sans mt-4 text-center text-white/60 md:text-lg">
						I'm a full-stack web developer and entrepreneur, owning an
						e-commerce project for selling decoration and Qotra Development
						Company. I help business owners grow and enhance the aesthetics of
						their businesses
					</p>
				</div>
				<div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
					<button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
						<span className="font-semibold">Explore My Work</span>
						<ArrowDown className="size-4" />
					</button>
					<button
						className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
						onClick={handleRedirect}
						style={{ position: "relative", zIndex: 10 }}
					>
						<span>👋🏻</span>
						<span className="font-semibold">Let's Connect</span>
					</button>
				</div>
			</div>
		</div>
	);
};
