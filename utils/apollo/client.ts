import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2",
  }),
  cache: new InMemoryCache(),
});
