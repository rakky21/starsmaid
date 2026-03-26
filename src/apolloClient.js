import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

//handle errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      console.error(`[GraphQL error]: Message: ${message}, Path:${path}`);
      alert(`Graphql error ${message}`);
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// HTTP link to GraphQL PC
const httpLink = createHttpLink({
  uri: "/graphql",
});

//Athentication link to attach the token to every request
const authLink = setContext((_, { headers }) => {
  //get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Apollo Client
const client = new ApolloClient({
  // Set up our client to execute the 'authLink' middleware prior to making the network request
  link: authLink.concat(httpLink, errorLink),
  cache: new InMemoryCache(),
});

export default client;
