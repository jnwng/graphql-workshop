import { gql } from "react-apollo";
export const query = gql`
  query CourseQuery {
    CoursesV1Resource {
      courses: getAll(limit: 5) {
        elements {
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
  }`;
