import { createMemoryHistory, createRouter } from "@tanstack/solid-router";
import { renderToString } from "solid-js/web";
import App from "./main";
import { routeTree } from "./routeTree.gen";

export async function render(_url: string) {
  const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
  });

  const path = "/" + _url;

  router.update({
    history: createMemoryHistory({
      initialEntries: [path],
    }),
  });

  await router.load();

  const html = renderToString(() => (
    <App value={{ url: path }} router={router} />
  ));
  return { html };
}
