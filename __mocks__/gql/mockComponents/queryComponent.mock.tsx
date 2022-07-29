import React from "react";
import {GetValues} from "./getValues";

interface QueryComponentMockProps {
  outQueryResult: { data?: any, loading?: any, error?: any },
  params: any,
  options?: {},
  query: any,
  fetchPolicy?: string,
  fragments?: {},
  notifyOnNetworkStatusChange?: boolean
}

/*
* This component just serves as a wrapper for any graphql Query to be executed, so that we can use Apollo Client's testing capabilities
*/
const QueryComponentMock = ({
    outQueryResult, // since we cannot access the state or inside variables of the component after render, the out parameter exposes the result.
    params,
    options = {},
    query,
    fetchPolicy = "cache-and-network",
    fragments = {},
    notifyOnNetworkStatusChange = true,
  }: QueryComponentMockProps ) => {
  const { data, loading, error} = GetValues({
      params,
      options,
      query,
      fetchPolicy,
      fragments,
      notifyOnNetworkStatusChange,
  });

  outQueryResult.data = data;
  outQueryResult.loading = loading;
  outQueryResult.error = error;

  return <div>Query Mock</div>;
};

export default QueryComponentMock;
