export const SectionHeader = ({
	title,
	eyebrow,
	descreption,
}: {
	title: string;
	eyebrow: string;
	descreption: string;
}) => {
	return (
		<>
			<div className="flex justify-center ">
				<p className="uppercase font-semibold tracking-widset bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
					{eyebrow}
				</p>
			</div>

			<h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
				{title}
			</h2>
			<p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
				{descreption}
			</p>
		</>
	);
};
