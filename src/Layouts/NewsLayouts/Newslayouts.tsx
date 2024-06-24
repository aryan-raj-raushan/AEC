import NewsNavbar from "@/src/Components/@news/newsNavbar/newsNavbar";
import NewsTopSearch from "@/src/Components/@news/newsTopSearch/newsTopSearch";
import Footer from "@/src/Shared/Footer/Footer";
import Navbar from "@/src/Shared/Navbar/Navbar";
import ReduxProvider from "@/src/store/provider";
import { FC, ReactNode } from "react";
interface NewsLayoutsProps {
	children: ReactNode;
}

const NewsLayouts: FC<NewsLayoutsProps> = ({ children }) => {
	return (
		<ReduxProvider>
			<main>
				<Navbar />
				<NewsNavbar />
				<div className="-mt-40"><NewsTopSearch /></div>
				<section>{children}</section>
				<Footer />
			</main>
		</ReduxProvider>
	);
};

export default NewsLayouts;
