import { Environment, Network, RecordSource, Store } from "relay-runtime";

const HTTP_ENDPOINT = " https://flexhire.com/api/v2";

const createFetchFn = (apiKey) => {
  const fetchFn = async (request, variables) => {
    const resp = await fetch(HTTP_ENDPOINT, {
      method: "POST",
      headers: {
        Accept:
          "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
        "Content-Type": "application/json",
        "FLEXHIRE-API-KEY": apiKey
        // <-- Additional headers like 'Authorization' would go here
      },
      body: JSON.stringify({
        query: request.text, // <-- The GraphQL document composed by Relay
        variables,
      }),
    });
    return await resp.json();
  }
  return fetchFn
}

export default function createRelayEnvironment(apiKey) {
  return new Environment({
    network: Network.create(createFetchFn(apiKey)),
    store: new Store(new RecordSource()),
  });
}
