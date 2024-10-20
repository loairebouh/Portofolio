import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import yasserPic from "@/assets/images/yasser-moula.png";
import ayodaPic from "@/assets/images/abdallah-mehiz.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
	{
		name: "Yasser Moula",
		position: "E-com Owner @ Ys Shop",
		text: "All the technical aspects of my business, Ys Shop, rely on Loai. He’s incredibly helpful and always provides valuable advice while ensuring the job is done efficiently. His attention to detail and deep understanding of our brand are outstanding. We're absolutely delighted with the results!",
		avatar: yasserPic,
	},
	{
		name: "Abdallah Mehiz",
		position: "CEO & Mobile Dev @ Qotra",
		text: "A Great dev in the making You're on an impressive path! Your work as a developer and your eye for design are coming together in a powerful way. Keep it up!",
		avatar: ayodaPic,
	},
	{
		name: "Bassem Djeddi",
		position: "Merchant @ DjeddiFurniture",
		text: "",
		avatar: memojiAvatar3,
	},
	{
		name: "Emily Carter",
		position: "Product Manager @ GlobalTech",
		text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4,
	},
	{
		name: "Michael Brown",
		position: "Director of IT @ MegaCorp",
		text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
		avatar: memojiAvatar5,
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
				<div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
					<div className="flex gap-8 flex-none">
						{testimonials.map((testimonial) => (
							<Card
								key={testimonial.name}
								className="max-w-xs md:max-w-md md:p-8"
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
										<div className={"font-semibold"}>{testimonial.name}</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};
