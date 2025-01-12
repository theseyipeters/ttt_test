import { darkBlue } from "@/config/constants";
import { Box } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

export default function Banner() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<Box
			bg={darkBlue}
			className={`w-full relative font-sans px-4 md:px-[50px] lg:px-[100px] overflow-hidden`}>
			<Box
				pos={"relative"}
				size={"lg"}
				className="z-20 w-full">
				<div
					className={`${
						isScrolled
							? "bg-[#0A2640] pt-[10px]"
							: "bg-transparent pt-[10px] lg:pt-[40px]"
					}  z-40  fixed top-0 left-0 right-0 w-full px-4 md:px-[50px] lg:px-[100px] transition-all duration-200`}>
					<Navbar />
				</div>
				<Hero />
			</Box>
			<div className="hidden md:block z-0 bg-[#1C3D5B] w-[1200px] h-[1200px] rounded-full absolute -right-[600px] -top-[700px]"></div>
		</Box>
	);
}
