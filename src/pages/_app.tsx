import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider
			theme={theme}
			defaultColorScheme="light">
			<div className="bg-white">
				<Component {...pageProps} />
			</div>
		</MantineProvider>
	);
}
