import { green } from "@/config/constants";
import classes from "./Hero.module.css";
import { Box, Button, Flex, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Graph2, Graph3 } from "@/components/svgs/svgs";

export default function Hero() {
	const images = [
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
		"/images/presto.svg",
		"/images/boldo.svg",
		"/images/presto.svg",
	];
	return (
		<div className="z-20 w-full h-fit pt-[130px] md:pt-[160px] pb-[60px]  lg:pt-[200px] lg:pb-[100px]">
			<Box
				className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[1440px] mx-auto"
				px={0}>
				<Flex className=" w-full flex items-center justify-center lg:justify-start">
					<Flex
						direction={"column"}
						className="flex flex-col gap-[20px] md:gap-[20px] lg:gap-[60px] items-center lg:items-start">
						<div className="flex flex-col gap-4 ">
							<Text
								className="w-full lg:w-[95%] font-manrope text-center lg:text-left"
								c={"white"}
								fz={{ base: 30, md: 40, lg: 46 }}
								lts={-0.5}
								fw={500}
								component="h1"
								lh={1.5}>
								Save time by building <br />
								fast with Boldo Template{" "}
							</Text>
							<div className="w-full flex flex-col gap-2">
								<Text
									className="w-full text-center lg:text-left"
									component="p"
									fz={{ base: 14, md: 16 }}
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
								py={{ base: 8, md: 10 }}
								h={{ base: 40, md: 60 }}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								bg={green}
								fw={{ base: 500, md: 700 }}
								c={"black"}>
								Buy template
							</Button>
							<Button
								variant="outline"
								py={{ base: 8, md: 10 }}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								color="white"
								h={{ base: 40, md: 60 }}
								radius={50}
								fw={{ base: 500, md: 700 }}>
								Explore
							</Button>
						</Group>
					</Flex>
				</Flex>
				<Flex className="w-full lg:w-fit lg:ml-auto flex items-center justify-center lg:justify-end">
					<Stack className="mt-5 lg:mt-0 w-full sm:w-[90%] md:w-fit lg:w-fit flex flex-col gap-2 lg:gap-4 pl-0 lg:pl-4">
						<div className="w-full flex items-center justify-center">
							<div className={`w-full px-5 py-10 relative ${classes.graph1}`}>
								<Stack>
									<Flex
										gap={20}
										align={"center"}>
										<div className="w-[15%] rounded-lg bg-[#95ABBC] h-2 sm:h-3"></div>
										<div className="w-[85%] flex gap-2 items-center">
											<div className="w-[80%] rounded-lg bg-[#8FB6D5] h-2 sm:h-3"></div>
											<Text c={"white"}>80%</Text>
										</div>
									</Flex>
									<Flex
										gap={20}
										align={"center"}>
										<div className="w-[15%] rounded-lg bg-[#95ABBC] h-2 sm:h-3"></div>
										<div className="w-[85%] flex gap-2 items-center">
											<div className="w-[30%] rounded-lg bg-[#0DBBFC] h-2 sm:h-3"></div>
											<Text c={"white"}>30%</Text>
										</div>
									</Flex>
									<Flex
										gap={20}
										align={"center"}>
										<div className="w-[15%] rounded-lg bg-[#95ABBC] h-2 sm:h-3"></div>
										<div className="w-[85%] flex gap-2 items-center">
											<div className="w-[100%] rounded-lg bg-[#FFFFFF] h-2 sm:h-3"></div>
											<Text c={"white"}>100%</Text>
										</div>
									</Flex>
									<Flex
										gap={20}
										align={"center"}>
										<div className="w-[15%] rounded-lg bg-[#95ABBC] h-2 sm:h-3"></div>
										<div className="w-[85%] flex gap-2 items-center">
											<div className="w-[75%] rounded-lg bg-[#65E4A3] h-2 sm:h-3"></div>
											<Text c={"white"}>75%</Text>
										</div>
									</Flex>
								</Stack>
								<div className="flex gap-2 absolute left-3 top-3">
									<div className="w-3 h-3 rounded-full bg-[#FC5B00]"></div>
									<div className="w-3 h-3 rounded-full bg-[#ECAA00]"></div>
									<div className="w-3 h-3 rounded-full bg-[#009D10]"></div>
								</div>
							</div>
						</div>
						<div className="flex gap-4 w-full items-start justify-between h-[180px] lg:h-[180px]">
							<div className="w-2/5 h-full">
								<div
									className={`w-full py-4 flex items-center justify-center relative ${classes.graph2}`}>
									<div className="w-[80%] xl:w-[60%]">
										<Graph2 />
									</div>

									<div className="flex gap-2 absolute left-3 top-3">
										<div className="w-3 h-3 rounded-full bg-[#FC5B00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#ECAA00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#009D10]"></div>
									</div>
								</div>
							</div>
							<div className="w-3/5 h-full">
								<div
									className={`relative py-4  flex items-center justify-center w-full ${classes.graph3}`}>
									<div className="w-[80%] xl:w-[60%]">
										<Graph3 />
									</div>
									<div className="flex gap-2 absolute left-3 top-3">
										<div className="w-3 h-3 rounded-full bg-[#FC5B00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#ECAA00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#009D10]"></div>
									</div>
								</div>
							</div>
						</div>
					</Stack>
				</Flex>
			</Box>

			<Box
				pos={"relative"}
				style={{
					overflow: "hidden",
					background: "transparent",
					maskImage:
						"linear-gradient(to right, rgba(0, 0, 0, 0), black 20%, black 80%, rgba(0, 0, 0, 0))",
					WebkitMaskImage:
						"linear-gradient(to right, rgba(0, 0, 0, 0), black 20%, black 80%, rgba(0, 0, 0, 0))",
				}}
				className="w-full max-w-[1440px] mx-auto"
				mt={{ base: 60, lg: 120 }}>
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
			</Box>
		</div>
	);
}
