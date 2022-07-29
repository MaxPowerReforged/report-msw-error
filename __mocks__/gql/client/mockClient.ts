import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import fetch from "isomorphic-unfetch";

const testHttpLink = new HttpLink({ fetch, uri: 'http://localhost:3001/graphql' });

export const buildApolloTestClient = () => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: testHttpLink,
  });
}
