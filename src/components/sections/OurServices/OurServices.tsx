import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import SectionWrapper from "@/components/common/SectionWrapper/SectionWrapper";
import {
	Box,
	Card,
	Flex,
	Group,
	Image,
	List,
	ThemeIcon,
	rem,
	SimpleGrid,
	Stack,
	Text,
	Button,
} from "@mantine/core";
import { features, list1, list2 } from "./data";
import { darkBlue, gray } from "@/config/constants";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function OurServices() {
	const cards = features.map((feature, index) => (
		<Card
			bg={"transparent"}
			key={index}
			p={0}>
			<Card.Section>
				<Image
					src={feature.img}
					h={"100%"}
					w={"100%"}
					alt=""
				/>
			</Card.Section>

			<Group
				mt="md"
				mb="xs">
				<Text
					fz={{ base: 20, lg: 24 }}
					c={"black"}
					fw={400}>
					{feature.title}
				</Text>
			</Group>

			<Text
				fz={{ base: 16, lg: 18 }}
				c={gray}>
				{feature.description}
			</Text>

			<Link
				className="w-fit flex gap-3 py-2 border-b border-[#0A2640] text-[#0A2640] mt-4"
				href={feature.href}>
				<Text
					fz={{ base: 16, lg: 18 }}
					c={darkBlue}
					fw={600}>
					Explore page
				</Text>
				<svg
					width="24"
					height="26"
					viewBox="0 0 24 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5 14H19"
						stroke="#0A2640"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 7L19 14L12 21"
						stroke="#0A2640"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</Link>
		</Card>
	));
	return (
		<SectionWrapper>
			<Stack className="w-full">
				<SectionHeader
					tag="Our Services"
					title="Handshake infographic mass market crowdfunding iteration."
				/>

				<Box className="w-full sm:w-3/5 lg:w-full xl:w-4/5 mx-auto mt-[80px]">
					<SimpleGrid
						spacing={{ base: 20, lg: 50, xl: 100 }}
						cols={{ base: 1, sm: 3, md: 3, xl: 3 }}>
						{cards}
					</SimpleGrid>
				</Box>
				<Box className="w-4/5 mx-auto mt-[180px]">
					<SimpleGrid
						spacing={100}
						cols={{ base: 1, md: 2 }}>
						<Flex
							pos={"relative"}
							align={"center"}
							justify={"flex-start"}>
							<Image
								src={"/images/services/img4.png"}
								alt=""
								w={"100%"}
								h={"100%"}
							/>

							<Box className="w-[150px] md:w-[200px] lg:w-[300px] absolute right-10 -bottom-8 lg:-bottom-[100px]">
								<Image
									src={"/images/services/graph1.png"}
									alt=""
									w={"100%"}
									h={"100%"}
								/>
							</Box>
						</Flex>

						<Flex align={"center"}>
							<Stack>
								<Box>
									<Text
										fw={400}
										c={"black"}
										fz={{ base: 24, lg: 36 }}
										className="font-manrope">
										We connect our customers with the best, and help them keep
										up-and stay open.
									</Text>

									<List
										mt={40}
										spacing="lg"
										icon={
											<ThemeIcon
												color={darkBlue}
												size={32}
												radius="xl">
												<IconCheck
													style={{ width: rem(16), height: rem(16) }}
												/>
											</ThemeIcon>
										}>
										{list1.map((item, index) => (
											<List.Item
												c={"black"}
												key={index}>
												<Text
													ml={10}
													fz={{ base: 16, md: 18, lg: 20 }}>
													{item}
												</Text>
											</List.Item>
										))}
									</List>
								</Box>

								<Button
									mt={30}
									w={"fit-content"}
									radius={50}
									px={40}
									fw={700}
									h={50}
									bg={darkBlue}
									c={"white"}>
									Start now
								</Button>
							</Stack>
						</Flex>
					</SimpleGrid>
				</Box>
				<Box className="w-4/5 mx-auto mt-[180px]">
					<SimpleGrid
						spacing={100}
						cols={{ base: 1, md: 2 }}>
						<Flex align={"center"}>
							<Stack>
								<Box>
									<Text
										fw={400}
										c={"black"}
										fz={{ base: 24, lg: 36 }}
										className="font-manrope">
										We connect our customers with the best, and help them keep
										up-and stay open.
									</Text>

									<List
										mt={50}
										spacing="lg">
										{list2.map((item, index) => (
											<Card
												key={index}
												mb={20}
												shadow="md"
												bg={item?.bgcolor}>
												<List.Item
													icon={
														<Icon
															icon={item?.icon || ""}
															fontSize={24}
														/>
													}
													c={item?.color}>
													<Text
														ml={10}
														fz={{ base: 16, md: 18, lg: 20 }}>
														{item?.label}
													</Text>
												</List.Item>
											</Card>
										))}
									</List>
								</Box>
							</Stack>
						</Flex>
						<Flex
							className="mb-10 lg:mb-20"
							pos={"relative"}
							align={"center"}
							justify={"flex-start"}>
							<Image
								src={"/images/services/img5.png"}
								alt=""
								w={"100%"}
								h={"100%"}
							/>

							<Box className="w-[180px] md:w-[200px] lg:w-[300px] absolute right-10 -bottom-8 lg:-bottom-[100px]">
								<Image
									src={"/images/services/graph2.png"}
									alt=""
									w={"100%"}
									h={"100%"}
								/>
							</Box>
						</Flex>
					</SimpleGrid>
				</Box>
			</Stack>
		</SectionWrapper>
	);
}
