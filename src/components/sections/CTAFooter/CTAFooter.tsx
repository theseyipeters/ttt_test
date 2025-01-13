import SectionWrapper from "@/components/common/SectionWrapper/SectionWrapper";
import { BoldoLogo2 } from "@/components/svgs/svgs";
import { darkBlue, gray, green } from "@/config/constants";
import {
	Badge,
	Box,
	Button,
	Flex,
	List,
	ListItem,
	Paper,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import classes from "./CTAFooter.module.css";
import { FooterLink, footerLinks } from "./data";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

export default function CTAFooter() {
	const mobile = useMediaQuery("(max-width: 768px)");
	const items = footerLinks.map((item, index) => (
		<FooterCategory
			item={item}
			key={index}
		/>
	));
	return (
		<SectionWrapper>
			<Stack w={"full"}>
				<Paper
					h={"fit-content"}
					radius={20}
					className="overflow-hidden"
					pos={"relative"}
					py={{ base: 50, lg: 100 }}
					px={{ base: 20, md: 30 }}
					bg={darkBlue}>
					<Stack
						gap={30}
						align="center"
						className="w-fit mx-auto">
						<Text
							c={"white"}
							ta={"center"}
							fz={{ base: 26, sm: 30, md: 40, lg: 48 }}
							lh={{ base: 1.2, lg: 1.8 }}
							className="font-manrope w-full md:w-4/5 lg:w-4/5 xl:w-[55%] mx-auto z-20">
							An enterprise template to ramp up your company website
						</Text>

						<Flex className="z-20 flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4 items-center justify-center h-fit w-full md:w-4/5 lg:w-3/5 xl:w-[50%] mx-auto">
							<TextInput
								classNames={{
									root: classes.input_root,
									input: classes.input_input,
								}}
								placeholder="Your email address"
								radius={50}
								bg={"white"}
								w={{ base: "80%", sm: "80%", md: 300, lg: 400 }}
								size={mobile ? "md" : "lg"}
							/>

							<Button
								mt={{ base: 5, md: 0 }}
								radius={50}
								py={10}
								h={{ base: 40, lg: 60 }}
								px={{ base: 20, sm: 30, lg: 35 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 18 }}
								bg={green}
								fw={{ base: 500, lg: 700 }}
								c={"black"}>
								Start now
							</Button>
						</Flex>
					</Stack>
					<div className="hidden md:block z-0 bg-[#1C3D5B] w-[900px] h-[900px] rounded-full absolute -right-[300px] -top-[600px]"></div>
				</Paper>

				<Paper
					mb={50}
					py={30}
					w={"100%"}
					mt={{ base: 50, lg: 100 }}
					radius={0}
					h={"fit-content"}>
					<Flex className="flex flex-col-reverse lg:flex-row h-full gap-10 md:gap-[50px] lg:gap-[150px]">
						<Stack className="flex basis-1/3 h-full">
							<Box className="flex flex-col gap-[30px] lg:gap-[50px]">
								<div>
									<BoldoLogo2 />
								</div>

								<Text
									className="w-full lg:w-full xl:w-4/5"
									lh={2}
									c={gray}>
									Social media validation business model canvas graphical user
									interface launch party creative facebook iPad twitter.
								</Text>
							</Box>
							<Flex className="mt-auto">
								<Text
									className="w-full lg:w-4/5 "
									lh={2}
									c={gray}>
									All rights reserved
								</Text>
							</Flex>
						</Stack>

						<Flex className="flex basis-2/3">
							<div className="grid grid-cols-2 sm:flex sm:flex-row justify-between w-4/5 gap-[40px]">
								{items}
							</div>
						</Flex>
					</Flex>
				</Paper>
			</Stack>
		</SectionWrapper>
	);
}

interface FooterCategoryProps {
	item: FooterLink;
}

const FooterCategory = ({ item }: FooterCategoryProps) => {
	return (
		<Stack gap={30}>
			<Text
				fz={{ base: 16, md: 18, lg: 20 }}
				fw={700}>
				{item.category}
			</Text>

			<List className="flex flex-col gap-3 mt-8">
				{item.subLinks.map((link, index) => (
					<ListItem key={index}>
						<Flex
							py={10}
							pos={"relative"}
							w={130}>
							<Link
								className="text-base md:text-lg lg:text-xl text-[#777777]"
								href={link.href}>
								{link.label}
							</Link>
							{link.badgeText && (
								<Badge
									bg={green}
									c={darkBlue}
									pos={"absolute"}
									className="absolute -right-3">
									{link.badgeText}
								</Badge>
							)}
						</Flex>
					</ListItem>
				))}
			</List>
		</Stack>
	);
};
