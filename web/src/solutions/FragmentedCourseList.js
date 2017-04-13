import { gql } from "react-apollo";
import { FragmentedCourseWithInstructors } from "../CourseWithInstructors";

export const query = gql`
  query FragmentedCourseListQuery {
    CoursesV1Resource {
      courses: getAll(limit: 5) {
        elements {
          id
          ...FragmentedCourseWithInstructorsFragment
        }
      }
    }
  }
  ${FragmentedCourseWithInstructors.fragments.course}
`;
