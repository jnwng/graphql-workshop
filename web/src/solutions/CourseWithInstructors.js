import { gql } from "react-apollo";

export const query = gql`
    query CourseQuery {
      CoursesV1Resource {
        course: get(id: "GdeNrll1EeSROyIACtiVvg") {
          name
          instructors {
            elements {
              id
              firstName
              lastName
            }
          }
        }
      }
    }
`;

export const fragment = gql`
  fragment FragmentedCourseWithInstructorsFragment on CoursesV1 {
    name 
    instructors {
      elements {
        id
        firstName
        lastName
      }
    }
  }
`;
