import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const Skills = [
	"JavaScript",
	"TypeScript",
	"NextJS",
	"NodeJS",
	"ExpressJS",
	"ReactJs",
	"Tailwind",
	"MongoDB",
	"PostgreSQL",
	"Figma",
	"C++",
	"Java",
	"Flutter",
	"Python",
	"C#",
	"Photoshop",
	"Premier Pro",
];

export const TapeSection = () => {
	return (
		<div>
			<div className="flex flex-col items-center">
				<p className="uppercase font-semibold tracking-widset bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
					What can i do
				</p>
				<div className="font-serif text-3xl md:text-5xl text-center mt-6">
					My Skills
				</div>
				<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md sm:mx-10 lg:mx-auto md:mx-10">
					Bringing innovative solutions to life with versatile skills, crafting
					each project with creativity, precision, and a focus on results
				</p>
			</div>

			<div className="py-16 lg:py-24 overflow-x-clip">
				<div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
					<div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
						<div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
							{[...new Array(2)].fill(0).map((_, idx) => (
								<Fragment key={idx}>
									{Skills.map((skill) => (
										<div key={skill} className="inline-flex gap-8 items-center">
											<span className="text-gray-900 uppercase font-extrabold text-sm">
												{skill}
											</span>
											<StarIcon className="size-6 text-gray-900 -rotate-12" />
										</div>
									))}
								</Fragment>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
