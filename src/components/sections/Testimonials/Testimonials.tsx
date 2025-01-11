import SectionWrapper from "@/components/common/SectionWrapper/SectionWrapper";
import { Carousel } from "@mantine/carousel";
import carouselStyle from "../../../styles/carousel.module.css";
import {
	Avatar,
	Box,
	Card,
	Flex,
	Group,
	rem,
	Stack,
	Text,
} from "@mantine/core";
import { Testimonial, TESTIMONIALS } from "./data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { darkBlue } from "@/config/constants";
import { useMediaQuery } from "@mantine/hooks";

export default function Testimonials() {
	const mobile = useMediaQuery("(max-width: 991px)");
	const cards = TESTIMONIALS.map((item, index) => (
		<Carousel.Slide
			className="h-full"
			key={index}>
			<TestimonialCard testimonial={item} />
		</Carousel.Slide>
	));

	return (
		<SectionWrapper>
			<Stack className="w-full lg:w-full xl:w-[90%] mx-auto">
				<Flex className="relative">
					<Text
						c={"white"}
						fz={{ base: 36, md: 40, lg: 48 }}
						className="font-manrope w-full md:w-4/5 lg:w-3/5">
						An enterprise template to ramp up your company website
					</Text>
				</Flex>
				<Carousel
					mt={20}
					withIndicators
					nextControlIcon={
						<IconArrowRight style={{ width: rem(24), height: rem(24) }} />
					}
					previousControlIcon={
						<IconArrowLeft style={{ width: rem(24), height: rem(24) }} />
					}
					slideSize={mobile ? "100%" : "33.3%"}
					slideGap={{ base: rem(2), sm: "lg" }}
					align="start"
					slidesToScroll={mobile ? 1 : 3}
					classNames={carouselStyle}>
					{cards}
				</Carousel>
			</Stack>
		</SectionWrapper>
	);
}

interface TestimonialCardProps {
	testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
	<Card
		radius={12}
		py={40}
		px={40}
		bg={"white"}
		className="h-full">
		<Stack>
			<Text
				c={"black"}
				fz={{ base: 16, lg: 20 }}
				lh={2}>
				&quot;{testimonial.content}
			</Text>

			<Group mt={30}>
				<Avatar
					src={testimonial.image}
					size={70}
				/>

				<Box>
					<Text
						fw={600}
						c={darkBlue}>
						{testimonial.name}
					</Text>
					<Text
						fz={14}
						c={darkBlue}>
						{testimonial.position} @ {testimonial.company}
					</Text>
				</Box>
			</Group>
		</Stack>
	</Card>
);
