import { FETCH_ALL_EVENTS } from "@/utils/graphql";
import { request } from "graphql-request";
import useSWR from "swr";

export default function useFetchEvents() {
  const { data, error } = useSWR(FETCH_ALL_EVENTS, (query) =>
    request("/api/graphql", query)
  );

  return [data, error];
}
