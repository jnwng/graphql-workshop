import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, renderNothing, renderComponent, branch } from "recompose";

const renderErrors = ({ data: { error } }) => (
  <p>{JSON.stringify(error, null, 2)}</p>
);

const Course = ({ data: { CoursesV1Resource: { course } } }) => (
  <div>{course.slug}</div>
);

export default compose(
  //   graphql(
  //     gql`
  //     query CourseQuery {
  //       # insert your query here
  //     }
  //   `
  //   ),
  branch(({ data: { loading } }) => loading, renderNothing),
  branch(({ data: { error } }) => error, renderComponent(renderErrors))
)(Course);
