import React, { Component } from "react";
import { ListView, Text } from "react-native";
import { branch, compose, mapProps, renderNothing } from "recompose";
import { graphql, gql } from "react-apollo";

import CourseRow from "./CourseRow";

class CourseList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.courses)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={course => <CourseRow course={course} />}
      />
    );
  }
}

export default compose(
  graphql(
    gql`
      # Insert a query here
    `
  ),
  branch(({ data: { loading } }) => loading, renderNothing)
)(CourseList);
