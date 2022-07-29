import {graphql} from "msw";
import {mutationPayloadMock, mutationResultMock} from "../../entities/mutationMocks";

export const mutationHandlerSuccess = graphql.mutation('TEST_MUTATION', (req, res, ctx) => {
  return res(
    ctx.data({
      test: mutationResultMock
    }),
    ctx.delay(10)
  );
});
