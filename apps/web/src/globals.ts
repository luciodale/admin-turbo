// Global Definitions
export const SENTRY_DSN =
  "https://bd593a3a3051c2ccb39b3f1471819177@o4505007010414592.ingest.sentry.io/4505691086520320";
export const LOGTAIL_KEY = "CtiESwx98SffQ2Ph3nhpyRdS";

export const GIT_SHA = "NONE";
export const RELEASE_TIME = "NONE";
export const ENV_NAME = "NONE";
export const CONTEXT = "NONE";

export function AUTH0_MGMT(env: string) {
  return `/api/mgmt/env?env=${env}`;
}

export const AUTH0_CLIENT_ID = "LAzJ2VscYs6zUso0nBVXJD51VdFxkYtA";
export const AUTH0_DOMAIN = "umi.eu.auth0.com";

// DEV Environment
export const DEV_HASURA_URL = "https://dev-folio-db.hasura.app/v1/graphql";
export const DEV_AUTH0_USERS_URL = "https://artisworksdev.eu.auth0.com";
export const DEV_AUTH0_GLOBAL_ORG_ID = "org_3R60rCG9HWYwPpC0";

// UAT Environment
export const UAT_HASURA_URL = "https://uat.hasura.app/v1/graphql";
export const UAT_AUTH0_USERS_URL = "https://artisworks.eu.auth0.com";
export const UAT_AUTH0_GLOBAL_ORG_ID = "org_uajc8Wr0rLFlqXz8";

// PROD Environment
export const GLOBAL_PROD_HASURA_URL =
  "https://artis-staging.hasura.app/v1/graphql";
export const PROD_AUTH0_USERS_URL = "https://artisfoliostaging.eu.auth0.com";
export const AUTH0_GLOBAL_ORG_ID = "org_kUN3WbpsHzp0hbX6";

// TPICAP Environment
export const TPICAP_PROD_HASURA_URL =
  "https://prod-folio-tpicap.hasura.app/v1/graphql";
export const TPICAP_AUTH0_USERS_URL = "https://artisfoliostaging.eu.auth0.com";
export const AUTH0_TPICAP_ORG_ID = "org_XYwWBaz6vrPdxjeW";
