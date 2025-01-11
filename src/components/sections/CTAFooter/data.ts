interface SubLinks {
	label: string;
	href: string;
	badgeText?: string;
}

export interface FooterLink {
	category: string;
	subLinks: SubLinks[];
}

export const footerLinks: FooterLink[] = [
	{
		category: "Landing",
		subLinks: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Products",
				href: "/products",
			},
			{
				label: "Services",
				href: "/services",
			},
		],
	},
	{
		category: "Company",
		subLinks: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Careers",
				href: "/careers",
				badgeText: "Hiring!",
			},
			{
				label: "Services",
				href: "/services",
			},
		],
	},
	{
		category: "Resources",
		subLinks: [
			{
				label: "Blog",
				href: "/blog",
			},
			{
				label: "Products",
				href: "/products",
			},
			{
				label: "Services",
				href: "/services",
			},
		],
	},
];
