import { RouterProvider, createRouter } from "@tanstack/solid-router";

import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// const rootElement = document.getElementById("app");
// if (rootElement) {
//   render(() => <App />, rootElement);
// }
