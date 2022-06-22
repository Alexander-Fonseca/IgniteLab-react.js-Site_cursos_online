import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oeps4q21lh01z73n0ibzzc/master',
  cache: new InMemoryCache()
})