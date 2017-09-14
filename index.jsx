// import ApolloClient from "apollo-client";
// import HttpLink from "apollo-link-http";
// import InMemoryCache from "apollo-cache-inmemory";

// const client = new ApolloClient({
//   link: new HttpLink({ uri: "/graphql" }),
//   cache: new InMemoryCache(),
// });

import ApolloClient from 'apollo-client'
import WebSocketLink from 'apollo-link-ws'
import InMemoryCache from 'apollo-cache-inmemory'

const client = new ApolloClient({
    link: new WebSocketLink('ws://localhost:8003', options),
    cache: new InMemoryCache()
})