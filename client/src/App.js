import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { Nav } from "./components";

import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  uri: "graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Routes>
        </Nav>
        <Home />
      </Router>
    </ApolloProvider>
  );
}

export default App;
