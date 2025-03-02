import { RouterProvider, createRouter } from "@tanstack/solid-router";

import { ParentProps } from "solid-js";
import { routeTree } from "./routeTree.gen";

const _router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof _router;
  }
}

type AppRenderContext = {
  value?: {
    url: string;
  };
  router: typeof _router;
};

export default function App(props: ParentProps<AppRenderContext>) {
  return (
    <>
      <RouterProvider router={props.router} />
    </>
  );
}

// const rootElement = document.getElementById("app");
// if (rootElement) {
//   render(() => <App />, rootElement);
// }
