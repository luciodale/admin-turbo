#!/bin/bash
HASURA_URL="https://${VITE_HASURA_NAME}.hasura.app/v1/graphql"
# check graphqurl is installed
if ! command -v graphqurl &> /dev/null
then
    echo "graphqurl could not be found - please run 'npm install -g graphqurl' to install it"
    exit
fi

# check HASURA_URL and HASURA_ADMIN_SECRET are set
if [ -z "$VITE_HASURA_NAME" ] || [ -z "$HASURA_ADMIN_SECRET" ]; then
    echo "VITE_HASURA_NAME and HASURA_ADMIN_SECRET must be set"
    exit
fi

gq $HASURA_URL -H "X-Hasura-Admin-Secret: $HASURA_ADMIN_SECRET" --introspect > schema.graphql
yarn codegen