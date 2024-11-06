import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
	return (
		<div className="py-16 pt-12 lg:py-24">
			<div className="container">
				<div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl md:text-left text-center relative overflow-hidden z-10">
					<div
						className="absolute inset-0 opacity-5 -z-10"
						style={{
							backgroundImage: `url(${GrainImage.src})`,
						}}
					></div>
					<div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">
								Let&apos;s create something amzaing together
							</h2>
							<p className="text-sm md:text-base mt-2">
								Ready to bring your next project to life? Let&apos;s connect and
								discuss how i can help you to acheive your goals.
							</p>
						</div>
						<div>
							<a href="https://api.whatsapp.com/send/?phone=213557699531&text&type=phone_number&app_absent=0">
								<button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
									<span className="font-semibold">Contact Me</span>
									<ArrowUpRightIcon className="size-4" />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
