import React from "react";
import { gql, graphql } from "react-apollo";
import {
  compose,
  renderNothing,
  renderComponent,
  branch,
  mapProps
} from "recompose";

const withFragments = require("./withFragments");

const renderErrors = ({ data: { error } }) => (
  <p>{JSON.stringify(error, null, 2)}</p>
);

const InstructorNames = ({ instructors }) => (
  <ul style={{ width: "500px", margin: "0 auto" }}>
    {instructors.map(instructor => (
      <li key={instructor.id}>{instructor.firstName} {instructor.lastName}</li>
    ))}
  </ul>
);

export const CourseWithInstructors = ({ course }) => (
  <div
    style={{
      width: "800px",
      margin: "0 auto",
      borderRadius: "3px",
      borderWidth: "3px",
      borderStyle: "solid",
      borderColor: "rebeccapurple"
    }}
  >
    <div>{course.name}</div>
    <InstructorNames instructors={course.instructors.elements} />
  </div>
);

export default compose(
  // graphql(
  //   gql`
  //   query CourseWithInstructorsQuery {
  //     CoursesV1Resource {
  //     # Insert your query here!
  //     }
  //   }
  // `
  // ),
  branch(({ data: { loading } }) => loading, renderNothing),
  branch(({ data: { error } }) => error, renderComponent(renderErrors)),
  mapProps(({ data: { CoursesV1Resource: { course } } }) => ({
    course
  }))
)(CourseWithInstructors);

export const FragmentedCourseWithInstructors = withFragments(
  {
    // course: gql`
    // fragment FragmentedCourseWithInstructorsFragment on CoursesV1 {
    //   # insert your fragment here!
    // }
    // `
  }
)(CourseWithInstructors);
