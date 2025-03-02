/* @refresh reload */
import { createRouter } from "@tanstack/solid-router";
import { hydrate } from "solid-js/web";
import "./index.css";
import App from "./main";
import { routeTree } from "./routeTree.gen";

hydrate(
  () => {
    const router = createRouter({
      routeTree,
      defaultPreload: "intent",
      scrollRestoration: true,
    });

    return <App router={router} />;
  },
  document.getElementById("root") as HTMLElement,
);
