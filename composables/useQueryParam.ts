export default function useQueryParam(paramName: string) {
  const route = useRoute();
  const paramValue = route.query[paramName];

  invariant(
    paramValue !== undefined,
    `Query parameter "${paramName}" is missing`,
  );

  return paramValue;
}
