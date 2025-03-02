import { createFileRoute, useParams } from "@tanstack/solid-router";

export const Route = createFileRoute(
  "/_layout/_dashboardLayout/dashboard/profiles/$id",
)({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({
    from: "/_layout/_dashboardLayout/dashboard/profiles/$id",
  });

  return (
    <div>
      Hello "/_layout/_dashboardLayout/dashboard/profiles/$id"!
      {JSON.stringify(params())}
    </div>
  );
}
