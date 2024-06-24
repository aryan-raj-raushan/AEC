import ScrollToTopButton from "@/src/Components/scrollTopButton/scrollTopButton";
import Footer from "@/src/Shared/Footer/Footer";
// import ReduxProvider from "@/src/store/provider";
import dynamic from "next/dynamic";

import { FC, ReactNode, useEffect, useState } from "react";

const ReduxProvider = dynamic(() => import("@/src/store/provider"), {
	ssr: false
});

interface HomeLayoutsProps {
	children: ReactNode;
}
type StreamArray = {
	icon: ReactNode;
	path: string;
};

const HomeLayouts: FC<HomeLayoutsProps> = ({ children }) => {
	return (
		<ReduxProvider>
			<main>
				<section>{children}</section>
				<ScrollToTopButton />
				<Footer />
			</main>
		</ReduxProvider >
	);
};

export default HomeLayouts;
