import { gray } from "@/config/constants";
import { Box, Text } from "@mantine/core";

export default function SectionHeader({
	tag,
	title,
}: {
	tag: string;
	title: string;
}) {
	return (
		<Box className="w-full mx-auto md:w-4/5 lg:w-3/5 flex flex-col items-start  md:items-center gap-[5px]">
			<Text c={gray}>{tag}</Text>
			<Text
				c={"black"}
				fz={{ base: 30, md: 40, lg: 48 }}
				lh={{ base: 1.2, lg: 1.8 }}
				className="font-manrope text-left md:text-center">
				{title}
			</Text>
		</Box>
	);
}
