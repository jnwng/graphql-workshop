import React, { Component } from "react";
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from "./Course";
import CourseWithInstructors from "./CourseWithInstructors";
import CourseList from "./CourseList";
import FragmentedCourseList from "./FragmentedCourseList";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "/graphql"
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
        <ul style={{ width: "300px", margin: "0 auto", float: "left" }}>
          <li>
            <Link to="/step-1">First Step: Queries</Link>
          </li>
          <li>
            <Link to="/step-2">Second Step: Traversing the Graph</Link>
          </li>
          <li>
            <Link to="/step-3">Third Step: Connections</Link>
          </li>
          <li>
            <Link to="/step-4">First Step: Fragments</Link>
          </li>
        </ul>
        <div style={{ float: "left" }}>
          <Route path="/step-1" component={Course} />
          <Route path="/step-2" component={CourseWithInstructors} />
          <Route path="/step-3" component={CourseList} />
          <Route path="/step-4" component={FragmentedCourseList} />
        </div>
      </div>
    );
  }
}

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);
