import {useQuery, WatchQueryFetchPolicy} from "@apollo/client";

export const GetValues = ({
                            params,
                            options = {},
                            query,
                            fetchPolicy = 'cache-and-network',
                            fragments = {},
                            notifyOnNetworkStatusChange = true,
                          }: any) => {
  const variables = { params: params, ...options, ...fragments };
  const opts = {
    variables: variables,
    fetchPolicy: fetchPolicy as WatchQueryFetchPolicy,
    notifyOnNetworkStatusChange,
  };
  const result = useQuery(query, opts);
  return { ...result };
}
