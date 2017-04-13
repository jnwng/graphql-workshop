import React from "react";
import _ from "lodash";
import { filter, propType } from "graphql-anywhere";

// module.exports = withFragments({
//   course: gql`
//     fragment SomeCourseFragment on CoursesV1 {
//       name
//       slug
//     }
//   `
// })(SomeComponent);

// This function will handle data masking and validating whether or not enough data is being
// passed to this component.

const filterProps = (unfilteredProps, fragments) => {
  return _.mapValues(unfilteredProps, (value, key) => {
    if (fragments[key]) {
      return filter(fragments[key], value);
    }
    return value;
  });
};

const getDisplayName = Component => {
  return Component.displayName || Component.name || "Component";
};

const withFragments = fragments =>
  Component => {
    class WithFragments extends React.Component {
      static displayName = `WithFragments(${getDisplayName(Component)})`;
      static propTypes = _.mapValues(fragments, fragment => propType(fragment));
      static fragments = fragments;

      render() {
        const filteredProps = filterProps(this.props, fragments);

        return <Component {...filteredProps} />;
      }
    }

    return WithFragments;
  };

export default withFragments;
