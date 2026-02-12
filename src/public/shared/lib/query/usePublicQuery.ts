import {
  useQuery,
  UseQueryOptions,
  DefaultError,
  QueryClient,
} from "@tanstack/react-query";
import { TAGS } from "./tags";

const usePublicQuery = <
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
>(
  { queryKey, ...options }: UseQueryOptions<TQueryFnData, TError, TData>,
  queryClient?: QueryClient,
) =>
  useQuery(
    {
      ...options,
      queryKey: [TAGS.PUBLIC, ...(queryKey || [])],
    },
    queryClient,
  );

export { usePublicQuery };
