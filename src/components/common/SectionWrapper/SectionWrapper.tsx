import { Box } from "@mantine/core";

export default function SectionWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box
			className={`w-full relative font-sans px-4 md:px-[50px] lg:px-[100px] overflow-hidden py-[40px] md:py-[60px] lg:py-[100px]`}>
			<Box className="w-full max-w-[1440px] mx-auto">{children}</Box>
		</Box>
	);
}
