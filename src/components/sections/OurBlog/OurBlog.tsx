import SectionWrapper from "@/components/common/SectionWrapper/SectionWrapper";
import {
	Accordion,
	Avatar,
	Box,
	Button,
	Card,
	Flex,
	Image,
	rem,
	SimpleGrid,
	Stack,
	Text,
	ThemeIcon,
} from "@mantine/core";
import React from "react";
import { BLOGPOSTS, FAQ } from "./data";
import { darkBlue, gray } from "@/config/constants";
import { IconChevronDown } from "@tabler/icons-react";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import dayjs from "dayjs";

export default function OurBlog() {
	const items = FAQ.map((item, index) => (
		<Accordion.Item
			bg={"transparent"}
			mb={10}
			key={index}
			value={item.question}>
			<Accordion.Control
				bg={"transparent"}
				fz={{ base: 16, md: 18, lg: 20 }}
				py={10}
				c={"black"}>
				{item.question}
			</Accordion.Control>
			<Accordion.Panel
				c={"black"}
				mt={10}>
				{item.answer}
			</Accordion.Panel>
		</Accordion.Item>
	));

	const cards = BLOGPOSTS.map((post, index) => (
		<Card
			className="flex h-auto flex-col gap-5"
			radius={0}
			bg={"transparent"}
			key={index}
			p={0}>
			<div>
				<Box className="w-full h-[280px] rounded-3xl">
					<Image
						radius="md"
						src={post.image}
						h={"100%"}
						w={"100%"}
						alt=""
					/>
				</Box>

				<Stack
					className="w-full "
					mt={20}>
					<Flex gap={10}>
						<Text
							fz={{ base: 14, lg: 16 }}
							c={"black"}
							fw={700}>
							{post.category}
						</Text>
						<Text
							fz={{ base: 14, lg: 16 }}
							c={"black"}
							fw={400}>
							{dayjs(post.createdAt).format("MMMM D, YYYY")}
						</Text>
					</Flex>

					<Text
						fz={{ base: 16, lg: 18 }}
						c={gray}>
						{post.description}
					</Text>
				</Stack>
			</div>
			<Flex className="mt-auto flex gap-4 items-center py-1">
				<Avatar
					src={post.authorAvatar}
					alt={""}
					size={40}
				/>
				<Text
					fz={{ base: 16, lg: 16 }}
					c={"black"}
					fw={400}>
					{post.authorName}
				</Text>
			</Flex>
		</Card>
	));
	return (
		<SectionWrapper>
			<Stack className="w-full lg:w-full xl:w-[90%] mx-auto">
				<Card
					px={0}
					bg={"transparent"}>
					<Card.Section>
						<Image
							alt=""
							src={"/images/blog/img1.png"}
						/>
					</Card.Section>

					<Flex className="flex flex-col md:flex-row w-full my-10 items-center gap-4">
						<Box className="w-full lg:w-1/2 flex items-center md:items-start md:justify-start justify-center text-center md:text-left">
							<Text
								fw={400}
								c={"black"}
								fz={{ base: 24, lg: 36 }}
								className="font-manrope w-[90%] sm:w-3/5 md:w-4/5 mx-auto">
								We connect our customers with the best, and help them keep
								up-and stay open.
							</Text>
						</Box>

						<Box className="w-full sm:w-4/5 lg:w-1/2">
							<Accordion
								bg={"transparent"}
								chevronSize={32}
								transitionDuration={500}
								chevron={
									<ThemeIcon
										color={darkBlue}
										size={32}
										radius="xl">
										<IconChevronDown
											style={{ width: rem(16), height: rem(16) }}
										/>
									</ThemeIcon>
								}>
								{items}
							</Accordion>
						</Box>
					</Flex>
				</Card>

				<Stack className="mt-[50px] lg:mt-[100px]">
					<div className="w-[90%] sm:w-3/4 md:w-full mx-auto">
						<SectionHeader
							tag="Our Blog"
							title="Value proposition accelerator product management venture"
						/>
					</div>

					<SimpleGrid
						mt={40}
						className="w-[90%] sm:w-3/4 md:w-full mx-auto"
						spacing={{ base: 20, lg: 50, xl: 100 }}
						cols={{ base: 1, sm: 3, md: 3, xl: 3 }}>
						{cards}
					</SimpleGrid>

					<Button
						mt={{ base: 30, lg: 50 }}
						w={"fit-content"}
						mx={"auto"}
						radius={50}
						px={35}
						py={15}
						h={50}
						fw={700}
						variant="outline"
						bg={"transparent"}
						color={darkBlue}
						c={darkBlue}>
						Load more
					</Button>
				</Stack>
			</Stack>
		</SectionWrapper>
	);
}
