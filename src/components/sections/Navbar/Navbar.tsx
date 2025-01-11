import { BoldoLogo } from "@/components/svgs/svgs";
import { darkBlue } from "@/config/constants";
import { Button, Flex } from "@mantine/core";
import { links } from "./data";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full bg-transparent py-5 flex items-center justify-between max-w-[1440px] mx-auto">
			<div className="w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px]">
				<BoldoLogo />
			</div>
			<Flex
				align={"center"}
				gap={40}>
				<Flex gap={40}>
					{links.map((link, index) => (
						<Link
							className="text-white font-semibold"
							href={link.href}
							key={index}>
							{link.label}
						</Link>
					))}
				</Flex>
				<Button
					radius={50}
					px={40}
					fw={700}
					h={45}
					bg={"white"}
					c={darkBlue}>
					Log In
				</Button>
			</Flex>
		</nav>
	);
}
