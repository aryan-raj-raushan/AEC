import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { BASE_GQL_URL } from "../Utils/Network/Network";

let apolloClient: ApolloClient<any>;

const httpLink = createHttpLink({
  uri: BASE_GQL_URL,
});

export function createApolloClient() {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return apolloClient;
}

export function useApollo(initialState: any) {
  return initializeApollo(initialState);
}