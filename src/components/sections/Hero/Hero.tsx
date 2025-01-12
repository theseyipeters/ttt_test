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
		"/images/presto.svg",
	];
	return (
		<div className="z-20 w-full h-fit pt-[160px] pb-[60px]  lg:pt-[200px] lg:pb-[100px]">
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
								fz={{ base: 36, md: 40, lg: 46 }}
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
								h={{ base: 50, md: 60 }}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								bg={green}
								fw={700}
								c={"black"}>
								Buy template
							</Button>
							<Button
								variant="outline"
								py={{ base: 8, md: 10 }}
								px={{ base: 20, sm: 30, lg: 50 }}
								fz={{ base: 16, sm: 16, md: 16, lg: 18, xl: 20 }}
								color="white"
								h={{ base: 50, md: 60 }}
								radius={50}
								fw={700}>
								Explore
							</Button>
						</Group>
					</Flex>
				</Flex>
				<Flex className="w-full lg:w-fit lg:ml-auto flex items-center justify-center lg:justify-end">
					<Stack className="mt-5 lg:mt-0 w-full sm:w-[90%] md:w-fit lg:w-fit flex flex-col gap-2 lg:gap-4 pl-0 lg:pl-4">
						<div className="w-full flex items-center justify-center">
							{/* <Graph1 /> */}

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
								{/* <Graph2 /> */}
								<div
									className={`w-full py-4 flex items-center justify-center relative ${classes.graph2}`}>
									<div className="w-[80%] xl:w-[60%]">
										<svg
											width="100%"
											height="100%"
											viewBox="0 0 141 107"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<rect
												width="9.30457"
												height="23.2668"
												rx="4.65228"
												transform="matrix(1 0 0 -1 0.908569 106.528)"
												fill="#0DBBFC"
											/>
											<rect
												width="9.30457"
												height="13.4841"
												rx="4.65228"
												transform="matrix(1 0 0 -1 19.5178 96.7453)"
												fill="#0DBBFC"
											/>
											<rect
												x="38.1268"
												y="20.8639"
												width="9.30457"
												height="62.3972"
												rx="4.65228"
												fill="#0DBBFC"
											/>
											<rect
												x="56.736"
												y="40.1647"
												width="9.30457"
												height="43.0964"
												rx="4.65229"
												fill="#0DBBFC"
											/>
											<rect
												x="75.3452"
												y="0.241089"
												width="9.30457"
												height="83.02"
												rx="4.65229"
												fill="#95ABBC"
											/>
											<rect
												x="93.9542"
												y="24.5654"
												width="9.30457"
												height="58.6957"
												rx="4.65229"
												fill="#0DBBFC"
											/>
											<rect
												x="112.563"
												y="13.1965"
												width="9.30456"
												height="70.0647"
												rx="4.65228"
												fill="#0DBBFC"
											/>
											<rect
												x="131.173"
												y="51.2693"
												width="9.30456"
												height="31.9918"
												rx="4.65228"
												fill="#0DBBFC"
											/>
										</svg>
									</div>

									<div className="flex gap-2 absolute left-3 top-3">
										<div className="w-3 h-3 rounded-full bg-[#FC5B00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#ECAA00]"></div>
										<div className="w-3 h-3 rounded-full bg-[#009D10]"></div>
									</div>
								</div>
							</div>
							<div className="w-3/5 h-full">
								{/* <Graph3 /> */}
								<div
									className={`relative py-4  flex items-center justify-center w-full ${classes.graph3}`}>
									<div className="w-[80%] xl:w-[60%]">
										<svg
											width="100%"
											height="100%"
											viewBox="0 0 203 94"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<rect
												x="198.041"
												y="21.5327"
												width="8.00001"
												height="72"
												rx="4"
												transform="rotate(90 198.041 21.5327)"
												fill="#95ABBC"
											/>
											<rect
												x="194.041"
												y="43.665"
												width="8.00001"
												height="68"
												rx="4"
												transform="rotate(90 194.041 43.665)"
												fill="#95ABBC"
											/>
											<rect
												x="202.041"
												y="65.7973"
												width="8.00001"
												height="76"
												rx="4"
												transform="rotate(90 202.041 65.7973)"
												fill="#95ABBC"
											/>
											<g clip-path="url(#clip0_1_555)">
												<path
													d="M86.6865 47.2946C86.6865 69.346 68.8542 87.1966 46.8882 87.1966C24.9222 87.1966 7.08984 69.346 7.08984 47.2946C7.08984 25.2433 24.9222 7.39258 46.8882 7.39258C68.8542 7.39258 86.6865 25.2433 86.6865 47.2946Z"
													stroke="#0A2640"
													stroke-width="13.3928"
												/>
												<mask
													id="mask0_1_555"
													maskUnits="userSpaceOnUse"
													x="-28"
													y="-17"
													width="74"
													height="122">
													<path
														d="M45.405 42.9976L27.2687 -16.1593L-27.6346 53.5731L1.54823 104.468L45.405 42.9976Z"
														fill="#C4C4C4"
													/>
												</mask>
												<g mask="url(#mask0_1_555)">
													<path
														d="M86.6874 47.294C86.6874 69.3454 68.855 87.196 46.889 87.196C24.9231 87.196 7.0907 69.3454 7.0907 47.294C7.0907 25.2426 24.9231 7.39197 46.889 7.39197C68.855 7.39197 86.6874 25.2426 86.6874 47.294Z"
														stroke="#0DBBFC"
														stroke-width="13.3928"
													/>
												</g>
												<mask
													id="mask1_1_555"
													maskUnits="userSpaceOnUse"
													x="21"
													y="-22"
													width="91"
													height="85">
													<path
														d="M51.5436 48.1817L111.54 62.8726L79.8347 -20.0867L21.2717 -21.0402L51.5436 48.1817Z"
														fill="#C4C4C4"
													/>
												</mask>
												<g mask="url(#mask1_1_555)">
													<path
														d="M26.4888 81.5347C7.59658 70.2494 1.39636 45.7627 12.6427 26.8416C23.889 7.92042 48.3215 1.73235 67.2138 13.0177C86.106 24.303 92.3062 48.7896 81.0599 67.7108C69.8136 86.6319 45.381 92.82 26.4888 81.5347Z"
														stroke="#69E6A6"
														stroke-width="13.3928"
													/>
												</g>
											</g>
											<defs>
												<clipPath id="clip0_1_555">
													<rect
														width="93.0378"
														height="93.0378"
														fill="white"
														transform="translate(0.305176 0.772705)"
													/>
												</clipPath>
											</defs>
										</svg>
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
