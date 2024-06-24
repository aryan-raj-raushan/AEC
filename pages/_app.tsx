import { useApollo } from "@/src/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.scss";
import ReduxProvider from "@/src/store/provider";

function MyApp({ Component, pageProps }: any) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ReduxProvider>
			<ApolloProvider client={apolloClient}>
				<Component {...pageProps} />
			</ApolloProvider>
		</ReduxProvider>
	);
}

export default MyApp;

