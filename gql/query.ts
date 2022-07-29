import { gql } from "graphql-tag";

export const TEST_QUERY = gql`
  query TEST_QUERY($id: String!) {
    testQuery(id: $id) {
      response
      errors
    }
  }
`;
