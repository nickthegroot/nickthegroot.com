import { hydrate, prerender as ssr } from "preact-iso";
import App from "./app";

hydrate(<App />);

export async function prerender() {
  return await ssr(<App />);
}
