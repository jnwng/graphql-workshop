import { gql } from "react-apollo";

export const query = gql`
  query CourseQuery {
    CoursesV1Resource {
      course: get(id: "GdeNrll1EeSROyIACtiVvg") {
        slug
      }
    }
  }
`;
