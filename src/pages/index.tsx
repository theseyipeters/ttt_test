import Banner from "@/components/sections/Banner/Banner";
import CTAFooter from "@/components/sections/CTAFooter/CTAFooter";
import OurBlog from "@/components/sections/OurBlog/OurBlog";
import OurServices from "@/components/sections/OurServices/OurServices";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import { darkBlue } from "@/config/constants";
import { Box, Stack } from "@mantine/core";
// import { Manrope, Open_Sans } from "next/font/google";

// const manrope = Manrope({
// 	variable: "--font-manrope",
// 	subsets: ["latin"],
// });
// const openSans = Open_Sans({
// 	variable: "--font-open-sans",
// 	subsets: ["latin"],
// });

export default function Home() {
	return (
		<Stack
			gap={0}
			bg={"transparent"}>
			<Banner />
			<OurServices />
			<Box bg={darkBlue}>
				<Testimonials />
			</Box>
			<OurBlog />
			<CTAFooter />
		</Stack>
	);
}
