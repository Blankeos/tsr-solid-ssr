import { createFileRoute, useParams } from "@tanstack/solid-router";
import { For } from "solid-js";

export const Route = createFileRoute(
  "/_layout/_dashboardLayout/dashboard/profiles/$id",
)({
  component: RouteComponent,
  loader: async () => {
    return [
      {
        id: "apple",
        name: "Apple",
      },
      {
        id: "google",
        name: "Google",
      },
      {
        id: "microsoft",
        name: "Microsoft",
      },
    ];
  },
});

function RouteComponent() {
  const params = useParams({
    from: "/_layout/_dashboardLayout/dashboard/profiles/$id",
  });

  const companies = Route.useLoaderData();

  return (
    <div>
      Hello "/_layout/_dashboardLayout/dashboard/profiles/$id"!
      <div>
        Params: {JSON.stringify(params())}
        <For each={companies()}>{(company) => <div>{company.name}</div>}</For>
      </div>
    </div>
  );
}
