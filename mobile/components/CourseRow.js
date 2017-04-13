import React from "react";
import { Text } from "react-native";
import { gql } from "react-apollo";
import withFragments from "./withFragments";

function CourseRow(
  {
    course
  }
) {
  return <Text>{course.name}</Text>;
}

export default withFragments({
  course: gql`
    # Insert fragment here
  `
})(CourseRow);
