import {graphql} from "msw";
import {mutationPayloadMock, mutationResultMock} from "../../entities/mutationMocks";

export const queryHandlerSuccess = graphql.query('TEST_QUERY', (req, res, ctx) => {
  console.log(req);

  return res(
    ctx.data({
      testQuery: {
        response: {
          id: "fhe2873gf",
          name: 'name',
        },
        errors: {},
      },
    }),
    ctx.delay(10)
  );
});
