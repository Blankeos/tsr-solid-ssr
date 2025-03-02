import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { createSignal } from "solid-js";

export const Route = createFileRoute("/_layout/_dashboardLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <span>{" | "}</span>
        <Link to="/dashboard/settings">Settings</Link>
        <span>{" | "}</span>
        <Link
          to="/dashboard/profiles/$id"
          params={{
            id: "123",
          }}
        >
          Profiles
        </Link>
        <Counter />
      </aside>
      <Outlet />
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Dashboard Counter {count()}
    </button>
  );
}
