/* eslint-disable @typescript-eslint/no-explicit-any */

import { createTheme } from "@mantine/core";

export const theme = createTheme({
	// Define your color scheme
	colors: {
		brand: [
			"#F0F4FF", // lightest shade
			"#D9E4FF",
			"#B2C7FF",
			"#8AA9FF",
			"#638CFF",
			"#0A2640", // primary shade
			"#2A55CC",
			"#1D3E99",
			"#132666",
			"#0A1333", // darkest shade
		],
	},
	primaryColor: "brand",
	primaryShade: 5,

	// Define font families
	fontFamily: "Open Sans, sans-serif",
	fontFamilyMonospace: "Courier New, monospace",

	// Define global radius
	radius: {
		sm: "4px",
		md: "8px",
		lg: "12px",
	},

	// Define global spacing scale
	spacing: {
		xs: "4px",
		sm: "8px",
		md: "16px",
		lg: "24px",
		xl: "32px",
	},

	// Define default styles for components
	components: {
		Button: {
			defaultProps: {
				size: "md",
				radius: "md",
			},
			styles: (theme: any) => ({
				root: {
					backgroundColor: theme.colors.brand[5],
					"&:hover": {
						backgroundColor: theme.colors.brand[6],
					},
				},
			}),
		},
	},

	// Other theme settings
	headings: {
		fontFamily: "Manrope, sans-serif",
		fontWeight: "700",
		sizes: {
			h1: { fontSize: "48px", lineHeight: "1.2" },
			h2: { fontSize: "30px", lineHeight: "1.3" },
			h3: { fontSize: "24px", lineHeight: "1.4" },
		},
	},
});
