/* eslint-disable react/jsx-key */
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import yasserPic from "@/assets/images/yasser-moula.png";
import ayodaPic from "@/assets/images/ayoda.png";
import catFatherPic from "@/assets/images/cat-father.png";
import mouadhHarounPic from "@/assets/images/mouadh-haroun.png";
import khalidAlMansoriPic from "@/assets/images/khalid-mansouri.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
	{
		name: "Mouadh Haroun Abdallah",
		position: "Perfumes Collector & Seller @Morphumes",
		text: "Loai is one of the most professional persons I have ever met. The perfection he seeks in his business is incredibly impressive.Loai helps the client decide what's best for his project; he helps with everything he is able to.He is honest, reliable, strict about his deadlines, serious, and the real meaning of perfectionist.All the pleasure is mine.",
		avatar: mouadhHarounPic,
	},
	{
		name: "Cat Father Dz",
		position: "Owner of @Cat_father_dz",
		text: "This is my first time I work with Loai , His work is professional except organizing time but I'm still proud of his work , and he is a good and disciplined person. I recommend.",
		avatar: catFatherPic,
	},
	{
		name: "Abdallah Mehiz",
		position: "CEO & Mobile Dev @Qotra",
		text: "A Great dev in the making You're on an impressive path! Your work as a developer and your eye for design are coming together in a powerful way. Keep it up!",
		avatar: ayodaPic,
	},
	{
		name: "Yasser Moula",
		position: "E-com Owner @YsShop",
		text: "All the technical aspects of my business, Ys Shop, rely on Loai. He’s incredibly helpful and always provides valuable advice while ensuring the job is done efficiently. His attention to detail and deep understanding of our brand are outstanding. We're absolutely delighted with the results!",
		avatar: yasserPic,
	},
	{
		name: "Khalid Al-Mansouri",
		position: "Lead Software Engineer @InnovaTech",
		text: "Loai, your growth has been inspiring to watch! Your dedication to honing your skills and your innovative approach to problem-solving are setting you on a path to greatness. The progress you’ve made is impressive, and I can see how much passion you put into your work. Keep pushing forward—your efforts are truly making a difference, and I’m excited to see what you achieve next!",
		avatar: khalidAlMansoriPic,
	},
];

export const TestimonialsSection = () => {
	return (
		<div className="py-16 lg:py-24">
			<div className="container">
				<SectionHeader
					title="What People Say About Me"
					eyebrow="Happy Clients"
					descreption="Dont just take my word for it, See what my clients have to say about my
				work"
				/>
				<div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
					<div className="flex gap-8 flex-none">
						<div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
							{[...new Array(2)].fill(0).map((_, idx) => (
								<Fragment>
									{testimonials.map((testimonial) => (
										<Card
											key={testimonial.name}
											className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
										>
											<div className="flex gap-4 items-center">
												<div
													className={
														"size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0"
													}
												>
													<Image
														src={testimonial.avatar}
														alt="client pic"
														className={"mt-5"}
													/>
												</div>
												<div className="">
													<div className={"font-semibold"}>
														{testimonial.name}
													</div>
													<div className={"text-sm text-white/40"}>
														{testimonial.position}
													</div>
												</div>
											</div>
											<p className={"mt-4 text-sm md:text-base "}>
												{testimonial.text}
											</p>
										</Card>
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
