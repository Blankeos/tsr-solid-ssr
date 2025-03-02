import { createFileRoute, Link, Outlet } from "@tanstack/solid-router";
import { createSignal } from "solid-js";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span>{" | "}</span>
        <Link to="/dashboard">Dashboard</Link>
        <span>{" | "}</span>
        <Counter />
      </nav>
      <Outlet />
    </div>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Root Counter {count()}
    </button>
  );
}
