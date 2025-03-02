import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/_layout/_dashboardLayout/dashboard/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/_dashboardLayout/settings"!</div>
}
