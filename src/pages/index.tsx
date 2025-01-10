import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div
			className={`${manrope.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-manrope)]`}></div>
	);
}
