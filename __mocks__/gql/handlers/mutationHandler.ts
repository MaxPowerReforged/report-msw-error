import {graphql} from "msw";
import {mutationPayloadMock, mutationResultMock} from "../../entities/mutationMocks";

export const mutationHandler = graphql.mutation('TEST_MUTATION', (req, res, ctx) => {
  console.log(req, ctx); // log the request that has been forwarded to the handler

  // The variables object is empty
  const { username, password } = req.variables;

  if (username == mutationPayloadMock.username && password == mutationPayloadMock.password)
  {
    return res(
      ctx.data({
        login: mutationResultMock
      }),
      ctx.delay(10)
    );
  } else {
    return res(
      ctx.errors([
        { message: 'some error' }
      ]),
      ctx.status(500),
      ctx.delay(10)
    );
  }
});
