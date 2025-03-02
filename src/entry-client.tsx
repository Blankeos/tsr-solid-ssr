/* @refresh reload */
import { hydrate } from "solid-js/web";
import "./index.css";
import App from "./main";

hydrate(() => <App />, document.getElementById("root") as HTMLElement);
