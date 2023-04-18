// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./utils/style.css";
// import App from "./App";

// const client = new ApolloClient({
//   uri: "http://localhost:4000",
//   cache: new InMemoryCache(),
// });

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import './utils/style.css'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
