import { render, waitFor } from "@testing-library/react";
import {ApolloProvider} from "@apollo/client";
import {mockServer} from "../../__mocks__/gql/server";
import {buildApolloTestClient} from "../../__mocks__/gql/client/mockClient";
import MutationComponentMock from "../../__mocks__/gql/mockComponents/mutationComponent.mock";
import {mutationPayloadMock} from "../../__mocks__/entities/mutationMocks";
import {TEST_MUTATION} from "../../gql/mutation";
import {queryHandlerSuccess} from "../../__mocks__/gql/handlers/queryHandler";
import QueryComponentMock from "../../__mocks__/gql/mockComponents/queryComponent.mock";
import {TEST_QUERY} from "../../gql/query";

describe('test query', () => {
  it('success', async () => {
    mockServer.use(queryHandlerSuccess);

    const apolloClient = buildApolloTestClient();

    const result = { data: undefined }

    render(
      <ApolloProvider client={apolloClient}>
        <QueryComponentMock
          outQueryResult={result}
          params={{
            id: 'euhfiow2435y2374y',
          }}
          query={TEST_QUERY}
        />
      </ApolloProvider>
    );

    await waitFor(() => expect(result.data).toBeDefined());
  })
})
