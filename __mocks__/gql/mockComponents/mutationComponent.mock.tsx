import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";

interface MutationComponentMockProps {
  outMutationResult: { data?: any, loading?: any, error?: any },
  params: any,
  mutation: any,
}

/*
* This component just serves as a wrapper for any graphql Query to be executed, so that we can use Apollo Client's testing capabilities
*/
const MutationComponentMock = ({
                              outMutationResult, // since we cannot access the state or inside variables of the component after render, the out parameter exposes the result.
                              params,
                              mutation,
                            }: MutationComponentMockProps ) => {
  const [isMutationDone, setIsMutationDone] = useState<boolean>(false);

  const [mutate, { data, loading, error }] = useMutation(mutation);

  outMutationResult.data = data;
  outMutationResult.loading = loading;
  outMutationResult.error = error;

  useEffect(() => {
    if (!isMutationDone)
      makeMutation();
  }, [])

  const makeMutation = async () => {
    await mutate({
      variables: {
        params
      }
    });
    setIsMutationDone(true);
  }

  return <div>Mutation Mock</div>;
};

export default MutationComponentMock;
