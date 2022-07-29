import { render, waitFor } from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import {mockServer} from "../../__mocks__/gql/server";
import {mutationHandlerFail} from "../../__mocks__/gql/handlers/mutationHandlerFail";
import {buildApolloTestClient} from "../../__mocks__/gql/client/mockClient";
import MutationComponentMock from "../../__mocks__/gql/mockComponents/mutationComponent.mock";
import {mutationPayloadMock} from "../../__mocks__/entities/mutationMocks";
import {TEST_MUTATION} from "../../gql/mutation";

describe('login mutation', () => {
  it('should login user when using correct credentials', async () => {
    mockServer.use(mutationHandlerFail);

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
