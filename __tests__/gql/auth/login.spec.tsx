import { render, waitFor } from "@testing-library/react";
import {mockServer} from "../../../__mocks__/gql/server";
import MutationComponentMock from "../../../__mocks__/gql/mockComponents/mutationComponent.mock";
import {mutationPayloadMock} from "../../../__mocks__/entities/mutationMocks";
import {buildApolloTestClient} from "../../../__mocks__/gql/client/mockClient";
import {ApolloProvider} from "@apollo/client";
import {mutationHandler} from "../../../__mocks__/gql/handlers/mutationHandler";
import {TEST_MUTATION} from "../../../gql/mutation";

describe('login mutation', () => {
  it('should login user when using correct credentials', async () => {
    mockServer.use(mutationHandler);

    const apolloClient = buildApolloTestClient();

    const result = { data: undefined }

    render(
      <ApolloProvider client={apolloClient}>
        <MutationComponentMock
          outMutationResult={result}
          params={{
            username: mutationPayloadMock.username,
            password: mutationPayloadMock.password
          }}
          mutation={TEST_MUTATION} />
      </ApolloProvider>
    );

    await waitFor(() => expect(result.data).toBeDefined());
  })
})
