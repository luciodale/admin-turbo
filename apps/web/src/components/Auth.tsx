import {
  Auth0Provider,
  useAuth0,
  withAuthenticationRequired,
} from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID, DEV_HASURA_URL } from "../globals";
import { Box, CircularProgress } from "@mui/material";
import { Dashboard } from "./Dashboard";
import { useNavigate } from "@tanstack/react-router";
import {
  Client,
  cacheExchange,
  fetchExchange,
  Provider,
  subscriptionExchange,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";

const wsClient = createWSClient({
  url: "ws://dev-folio-db.hasura.app/v1/graphql",
  connectionParams: () => {
    return {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im02Wkp6V2NwT3hjcmpkUU52NThHViJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlci1hZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyLWFkbWluIiwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY1NTI1Mjk0N2E4ZTI2NWJiZGFkYzQ3OCJ9LCJpc3MiOiJodHRwczovL3VtaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjU1MjUyOTQ3YThlMjY1YmJkYWRjNDc4IiwiYXVkIjpbImhhc3VyYSIsImh0dHBzOi8vdW1pLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTk5ODY4NTEsImV4cCI6MTcwMDA3MzI1MSwiYXpwIjoiTEF6SjJWc2NZczZ6VXNvMG5CVlhKRDUxVmRGeGtZdEEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.ao7uLUqm9PRgmmb7z_01lOQVTrZZQXA9tRVBkQXtHIIgCkrKRkzgPuGwgMjWOe4PD4AXjl77LMBqs-S_b-aa7XckWKWA40CKAfkwpiNMj1aqwfIOMtM0cRSL_leD3rBrqVgFd7XQwppPS4sVttQB0AwnjJWvlWKtSOTWOnRBq5dgLKyFdEa3tXWIT6samObGihUKW8acHoLDDU10t8PN6zzsa-FoOeBi8YxrwTK_9b5f71TRsiF76I3w-gy315gjCLajGGLjHc092JexfAvZT_Srawme0zIRk9v-79KghF752ICyGp7J97glaUSSGVPvYjBWDqIBb-zAy7U1kPKaNg`,
      },
    };
  },
});

const UrqlClient = new Client({
  url: DEV_HASURA_URL,
  exchanges: [
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(request) {
        const input = { ...request, query: request.query || "" };
        return {
          subscribe(sink) {
            const unsubscribe = wsClient.subscribe(input, sink);
            return { unsubscribe };
          },
        };
      },
    }),
  ],
  fetchOptions: () => {
    return {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im02Wkp6V2NwT3hjcmpkUU52NThHViJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlci1hZG1pbiJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyLWFkbWluIiwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY1NTI1Mjk0N2E4ZTI2NWJiZGFkYzQ3OCJ9LCJpc3MiOiJodHRwczovL3VtaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjU1MjUyOTQ3YThlMjY1YmJkYWRjNDc4IiwiYXVkIjpbImhhc3VyYSIsImh0dHBzOi8vdW1pLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2OTk5ODY4NTEsImV4cCI6MTcwMDA3MzI1MSwiYXpwIjoiTEF6SjJWc2NZczZ6VXNvMG5CVlhKRDUxVmRGeGtZdEEiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIn0.ao7uLUqm9PRgmmb7z_01lOQVTrZZQXA9tRVBkQXtHIIgCkrKRkzgPuGwgMjWOe4PD4AXjl77LMBqs-S_b-aa7XckWKWA40CKAfkwpiNMj1aqwfIOMtM0cRSL_leD3rBrqVgFd7XQwppPS4sVttQB0AwnjJWvlWKtSOTWOnRBq5dgLKyFdEa3tXWIT6samObGihUKW8acHoLDDU10t8PN6zzsa-FoOeBi8YxrwTK_9b5f71TRsiF76I3w-gy315gjCLajGGLjHc092JexfAvZT_Srawme0zIRk9v-79KghF752ICyGp7J97glaUSSGVPvYjBWDqIBb-zAy7U1kPKaNg`,
      },
    };
  },
});

const WithAuth = withAuthenticationRequired(Dashboard);

function AuthHandler() {
  const { isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={50} />
      </Box>
    );

  return (
    <Provider value={UrqlClient}>
      <WithAuth />
    </Provider>
  );
}

export function Auth() {
  const navigate = useNavigate();
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      onRedirectCallback={(state) =>
        navigate({ to: state?.returnTo || window.location.pathname })
      }
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
      cacheLocation="localstorage"
      authorizationParams={{
        audience: "hasura",
        useRefreshTokens: true,
        redirect_uri: window.location.origin,
      }}
    >
      <AuthHandler />
    </Auth0Provider>
  );
}
