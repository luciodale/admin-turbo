import { RootRoute, Route, Router } from "@tanstack/react-router";
import { Users } from "./components/Users";
import { Auth } from "./components/Auth";
import React from "react";
import { Home } from "./components/Home";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

const rootRoute = new RootRoute({
  component: () => (
    <>
      <Auth />
      <TanStackRouterDevtools />
    </>
  ),
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
  errorComponent: () => "Oh crap!",
});

const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: () => <Users />,
  errorComponent: () => "Oh crap!",
});

const fooRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/foo",
  component: () => <div>foo</div>,
  errorComponent: () => "Oh crap!",
});

const routeTree = rootRoute.addChildren([homeRoute, usersRoute, fooRoute]);

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
});
