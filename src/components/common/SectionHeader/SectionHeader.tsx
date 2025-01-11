import { gray } from "@/config/constants";
import { Stack, Text } from "@mantine/core";

export default function SectionHeader({
	tag,
	title,
}: {
	tag: string;
	title: string;
}) {
	return (
		<Stack
			className="w-full mx-auto md:w-4/5 lg:w-3/5"
			align="center"
			gap={5}>
			<Text c={gray}>{tag}</Text>
			<Text
				c={"black"}
				ta={"center"}
				fz={{ base: 36, md: 40, lg: 48 }}
				className="font-manrope">
				{title}
			</Text>
		</Stack>
	);
}
