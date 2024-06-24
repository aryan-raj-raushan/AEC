import NewsTopSearch from "@/src/Components/@news/newsTopSearch/newsTopSearch";
import Footer from "@/src/Shared/Footer/Footer";
import Navbar from "@/src/Shared/Navbar/Navbar";
import ReduxProvider from "@/src/store/provider";
import { FC, ReactNode } from "react";

interface BlogsLayoutsProps {
	children: ReactNode;
}

const BlogsLayouts: FC<BlogsLayoutsProps> = ({ children }) => {
	return (
		<ReduxProvider>
			<main>
				<Navbar />
				<NewsTopSearch />
				<section className="mt-10">{children}</section>
				<Footer />
			</main>
		</ReduxProvider>
	);
};

export default BlogsLayouts;
