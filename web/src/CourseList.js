import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, renderNothing, renderComponent, branch } from "recompose";

import { CourseWithInstructors } from "./CourseWithInstructors";

const renderErrors = ({ data: { error } }) => (
  <p>{JSON.stringify(error, null, 2)}</p>
);

const CourseList = ({ data: { CoursesV1Resource: { courses } } }) => (
  <div>
    {courses.elements.map(course => (
      <CourseWithInstructors key={course.id} course={course} />
    ))}
  </div>
);

export default compose(
  // graphql(
  //   gql`
  //   query CourseQuery {
  //     CoursesV1Resource {
  //       # Insert your query here
  //     }
  //   }
  // `
  // ),
  branch(({ data: { loading } }) => loading, renderNothing),
  branch(({ data: { error } }) => error, renderComponent(renderErrors))
)(CourseList);
