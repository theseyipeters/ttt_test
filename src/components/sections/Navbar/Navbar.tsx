import { BoldoLogo } from "@/components/svgs/svgs";
import { darkBlue } from "@/config/constants";
import {
	Box,
	Burger,
	Button,
	Drawer,
	Flex,
	rem,
	ScrollArea,
	Stack,
} from "@mantine/core";
import { links } from "./data";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
	const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
		useDisclosure(false);
	return (
		<nav className="w-full bg-transparent py-5 flex items-center justify-between max-w-[1440px] mx-auto">
			<div className="w-[120px] md:w-[120px] lg:w-[140px] xl:w-[160px]">
				<BoldoLogo />
			</div>
			<Flex
				className={classes.navLinks}
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
			<Burger
				opened={drawerOpened}
				onClick={toggleDrawer}
				hiddenFrom="sm"
				color={"white"}
			/>

			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				closeButtonProps={{ size: "xl" }}
				size="100%"
				padding="md"
				hiddenFrom="sm"
				zIndex={1000000}
				closeOnClickOutside>
				<ScrollArea
					py={50}
					h={`calc(100vh - ${rem(80)})`}
					mx="-md">
					<Stack gap={40}>
						{links.map((link, index) => (
							<Link
								className="text-[#0A2640] font-semibold px-10 text-2xl"
								href={link.href}
								key={index}>
								{link.label}
							</Link>
						))}
					</Stack>

					<Box
						mt={30}
						px={20}>
						<Button
							w={"100%"}
							radius={50}
							px={40}
							fw={700}
							fz={20}
							h={60}
							c={"white"}
							bg={darkBlue}>
							Log In
						</Button>
					</Box>
				</ScrollArea>
			</Drawer>
		</nav>
	);
}
