import { Graph1, Graph2, Graph3 } from "@/components/svgs/svgs";
import { green } from "@/config/constants";
import classes from "./Hero.module.css";
import { Box, Button, Flex, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
	const images = [
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
	];
	return (
		<div className="z-20 w-full h-fit pt-[160px] pb-[60px]  lg:pt-[200px] lg:pb-[100px]">
			<Box
				className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[1440px] mx-auto"
				px={0}>
				<Flex className="w-full flex items-center justify-center lg:justify-start">
					<Flex
						direction={"column"}
						className="flex flex-col items-center lg:items-start"
						gap={{ base: 10, md: 16, lg: 40 }}>
						<div className="flex flex-col gap-4">
							<Text
								className="w-full font-manrope text-center lg:text-left"
								c={"white"}
								fz={{ base: 36, md: 40, lg: 48 }}
								fw={500}
								component="h1"
								lh={1.5}>
								Save time by building <br />
								fast with Boldo Template{" "}
							</Text>
							<div className="w-full">
								<Text
									className="w-full text-center lg:text-left"
									component="p"
									fw={400}
									c={"white"}>
									Funding handshake buyer business-to-business metrics iPad
									partnership.
								</Text>
								<Text
									className="w-full text-center lg:text-left"
									component="p"
									fw={400}
									c={"white"}>
									First mover advantage innovator success deployment
									non-disclosure.
								</Text>
							</div>
						</div>

						<Group
							wrap="wrap"
							gap={16}>
							<Button
								radius={50}
								py={10}
								h={60}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								bg={green}
								fw={700}
								c={"black"}>
								Buy template
							</Button>
							<Button
								variant="outline"
								py={10}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								color="white"
								h={60}
								radius={50}
								fw={700}>
								Explore
							</Button>
						</Group>
					</Flex>
				</Flex>
				<Flex className="w-full lg:w-fit lg:ml-auto flex items-center justify-center lg:justify-end">
					<Stack className="w-full md:w-4/5 lg:w-fit flex flex-col gap-2 lg:gap-4">
						<div className="w-full ">
							<Graph1 />
						</div>
						<div className="flex gap-4 w-full h-[180px] lg:h-[180px]">
							<div className="w-2/5 h-full">
								<Graph2 />
							</div>
							<div className="w-3/5 h-full">
								<Graph3 />
							</div>
						</div>
					</Stack>
				</Flex>
			</Box>

			<Box
				pos={"relative"}
				className="w-full max-w-[1440px] mx-auto"
				mt={80}
				style={{ overflow: "hidden", background: "transparent" }}>
				<Marquee
					direction="right"
					style={{ background: "transparent" }}
					speed={20}>
					<Flex
						style={{ background: "transparent" }}
						justify={"space-between"}>
						{images.map((img, index) => (
							<div
								style={{ background: "transparent" }}
								className={classes.imageContainer}
								key={index.toString()}>
								<Image
									style={{ background: "transparent" }}
									src={img}
									alt={img}
									fill
									className={classes.image}
								/>
							</div>
						))}
					</Flex>
				</Marquee>

				<div className="absolute top-0 w-full h-[70px] md:h-[80px] lg:h-[100px] xl:h-[100px] 2xl:h-[130px] z-20 ">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 1173 93"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect
							width="1173"
							height="93"
							fill="url(#paint0_linear_1_543)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1_543"
								x1="0"
								y1="93"
								x2="1148"
								y2="92.9998"
								gradientUnits="userSpaceOnUse">
								<stop stop-color="#0A2640" />
								<stop
									offset="0.322917"
									stop-color="#0A2640"
									stop-opacity="0.109375"
								/>
								<stop
									offset="0.744792"
									stop-color="#0A2640"
									stop-opacity="0"
								/>
								<stop
									offset="1"
									stop-color="#0A2640"
								/>
							</linearGradient>
						</defs>
					</svg>
				</div>
			</Box>
		</div>
	);
}
