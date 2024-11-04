import { PropsWithChildren } from "react";
import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
	children,
	size,
	rotation,
	spinDuration,
	orbitDuration,
	shouldOrbit = false,
	shouldSpin = false,
}: PropsWithChildren<{
	size: number;
	rotation: number;
	spinDuration?: string;
	orbitDuration?: string;
	shouldOrbit?: boolean;
	shouldSpin?: boolean;
}>) => {
	return (
		<div>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
				<div
					className={twMerge(shouldOrbit === true && "animate-spin")}
					style={{
						animationDuration: orbitDuration,
					}}
				>
					<div
						className="flex items-start justify-start  "
						style={{
							height: `${size}px`,
							width: `${size}px`,
							transform: `rotate(${rotation}deg)`,
						}}
					>
						<div
							className={twMerge(
								shouldSpin === true && "animate-spin [animation-duration:10s]"
							)}
							style={{
								animationDuration: spinDuration,
							}}
						>
							<div
								className=" inline-flex"
								style={{
									transform: `rotate(${rotation * -1}deg)`,
								}}
							>
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
