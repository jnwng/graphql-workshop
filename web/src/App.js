import React, { Component } from "react";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import Course from "./Course";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://www.coursera.org/graphql",
    opts: {
      mode: "cors"
    }
  })
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the GraphQL Workshop!</h2>
        </div>
        <Course />
      </div>
    );
  }
}

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
