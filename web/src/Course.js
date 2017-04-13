import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, renderNothing, branch } from "recompose";

const Course = ({ data: { CoursesV1Resource: { course } } }) => (
  <div>{course.name}</div>
);

export default compose(
  graphql(
    gql`
    query CourseQuery {
      CoursesV1Resource {
        slug(slug: "machine-learning") {
          name
        }
      }
    }
  `
  ),
  branch(({ data: { loading } }) => loading, renderNothing)
)(Course);
