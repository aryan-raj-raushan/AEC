"use client";

import ScrollToTopButton from '@/src/Components/scrollTopButton/scrollTopButton';
import Footer from '@/src/Shared/Footer/Footer';
import Navbar from '@/src/Shared/Navbar/Navbar';
// import ReduxProvider from '@/src/store/provider';
import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';

const ReduxProvider = dynamic(() => import("@/src/store/provider"), {
	ssr: false
});


interface RootLayoutsProps {
	children: ReactNode;
}

const RootLayouts: FC<RootLayoutsProps> = ({ children }) => {
	return (
		<ReduxProvider>
			<main>
				<Navbar />
				<section>
					{children}
				</section>
				<ScrollToTopButton />
				<Footer />
			</main >
		</ReduxProvider>
	);
};

export default RootLayouts;