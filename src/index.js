import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./App.js";
import client from "./apolloClient.js"
import "./utils/index.css";

// React root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
