import {
  Auth0Provider,
  useAuth0,
  withAuthenticationRequired,
} from "@auth0/auth0-react";
import { AUTH0_DOMAIN, AUTH0_CLIENT_ID } from "../globals";
import { Box, CircularProgress } from "@mui/material";
import { Dashboard } from "./Dashboard";
import { useNavigate } from "@tanstack/react-router";

const WithAuth = withAuthenticationRequired(Dashboard);

function AuthHandler() {
  const { isLoading } = useAuth0();

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

  return <WithAuth />;
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
