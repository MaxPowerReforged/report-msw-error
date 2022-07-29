import { gql } from "graphql-tag";

export const TEST_MUTATION = gql`
  mutation TEST_MUTATION($username: String!, $password: String!) {
    test(username: $username, password: $password) {
      accessToken
      errors
    }
  }
`;
