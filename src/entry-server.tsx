import { renderToString } from "solid-js/web";
import App from "./main";

export function render(_url: string) {
  const html = renderToString(() => <App />);
  return { html };
}
