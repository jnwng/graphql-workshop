import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";

import CourseList from "./components/CourseList";

const App = () => <CourseList />;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "https://api.coursera.org/graphql"
  })
});

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
