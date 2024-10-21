import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import yasserPic from "@/assets/images/yasser-moula.png";
import ayodaPic from "@/assets/images/ayoda.png";
import catFatherPic from "@/assets/images/cat-father.png";
import mouadhHarounPic from "@/assets/images/mouadh-haroun.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

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
								className="max-w-xs p-6 md:max-w-md md:p-8"
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
