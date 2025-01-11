import SectionWrapper from "@/components/common/SectionWrapper/SectionWrapper";
import { BoldoLogo2 } from "@/components/svgs/svgs";
import { darkBlue, gray, green } from "@/config/constants";
import {
	Badge,
	Button,
	Flex,
	Group,
	List,
	ListItem,
	Paper,
	Stack,
	Text,
	TextInput,
} from "@mantine/core";
import React from "react";
import { FooterLink, footerLinks } from "./data";
import Link from "next/link";

export default function CTAFooter() {
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
					radius={20}
					className="overflow-hidden"
					pos={"relative"}
					py={100}
					bg={darkBlue}>
					<Stack
						gap={30}
						align="center"
						className="w-fit mx-auto">
						<Text
							c={"white"}
							ta={"center"}
							fz={{ base: 36, md: 40, lg: 48 }}
							className="font-manrope w-full md:w-4/5 lg:w-4/5 xl:w-[55%] mx-auto z-20">
							An enterprise template to ramp up your company website
						</Text>

						<Group
							align="center"
							justify="center"
							className="h-[60px] w-full md:w-4/5 lg:w-3/5 xl:w-[50%] mx-auto">
							<TextInput
								styles={{
									root: { borderRadius: "50px", height: "60px" },
									input: { height: "60px" },
								}}
								placeholder="Your email address"
								radius={50}
								bg={"white"}
								w={400}
								size="lg"
							/>

							<Button
								radius={50}
								py={10}
								h={60}
								px={{ base: 20, sm: 30, lg: 35 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 18 }}
								bg={green}
								fw={700}
								c={"black"}>
								Start now
							</Button>
						</Group>
					</Stack>
					<div className="hidden md:block z-0 bg-[#1C3D5B] w-[900px] h-[900px] rounded-full absolute -right-[300px] -top-[600px]"></div>
				</Paper>

				<Paper
					mb={50}
					py={30}
					w={"100%"}
					mt={120}
					radius={0}
					h={300}>
					<Flex
						gap={{ base: 40, md: 50, lg: 150 }}
						className="h-full">
						<Stack className="flex basis-1/3 h-full">
							<Stack gap={50}>
								<div>
									<BoldoLogo2 />
								</div>

								<Text
									className="w-full lg:w-4/5"
									lh={2}
									c={gray}>
									Social media validation business model canvas graphical user
									interface launch party creative facebook iPad twitter.
								</Text>
							</Stack>
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
							<div className="flex justify-between w-4/5 gap-[40px]">
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