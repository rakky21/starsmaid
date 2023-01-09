import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Specials from "./components/Specials";
import Footer from "./components/Footer";
import Nav from "./components/Nav/";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SingleAppointment from "./pages/SingleAppointment";
import NoMatch from "./pages/NoMatch";
import Schedule from "./components/Schedule";

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
        <div className="flex-column justify-flex-start min-100-vh">
          <Nav />
          <div className="container">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route
                exact
                path="/appointment/:id"
                component={SingleAppointment}
              />

              <Route component={NoMatch} />
            </Routes>
          </div>
          <About />
          <Specials />
          <Schedule />
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
