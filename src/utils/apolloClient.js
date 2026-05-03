import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Your deployed OR local backend
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL
});
// Attach JWT token to every request
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;