import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";

export const ToolBoxItems = ({
	items,
	className = "",
	itemsWrapperClassName = "",
}: {
	items: {
		title: string;
		iconType: React.ElementType;
	}[];
	className?: string;
	itemsWrapperClassName?: string;
}) => {
	return (
		<>
			<div
				className={twMerge(
					"flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
					className
				)}
			>
				<div
					className={twMerge(
						"flex flex-none py-0.5 gap-6 pr-6",
						itemsWrapperClassName
					)}
				>
					{items.map((tool) => (
						<div
							key={tool.title}
							className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
						>
							<TechIcon component={tool.iconType} />
							<span>{tool.title}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
