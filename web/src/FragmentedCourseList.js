import React from "react";
import { gql, graphql } from "react-apollo";
import { compose, renderNothing, renderComponent, branch } from "recompose";

import { FragmentedCourseWithInstructors } from "./CourseWithInstructors";

const renderErrors = ({ data: { error } }) => (
  <p>{JSON.stringify(error, null, 2)}</p>
);

const FragmentedCourseList = ({ data: { CoursesV1Resource: { courses } } }) => (
  <div>
    {courses.elements.map(course => (
      <FragmentedCourseWithInstructors key={course.id} course={course} />
    ))}
  </div>
);

export default compose(
  // graphql(
  //   gql`
  //   query FragmentedCourseListQuery {
  //     CoursesV1Resource {
  //       # Add your query here!
  //     }
  //   }
  // `
  // ),
  branch(({ data: { loading } }) => loading, renderNothing),
  branch(({ data: { error } }) => error, renderComponent(renderErrors))
)(FragmentedCourseList);
