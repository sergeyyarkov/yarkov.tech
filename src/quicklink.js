import { listen } from "quicklink/dist/quicklink.mjs";
window.addEventListener("load", () => {
	listen({ el: document.querySelector("body > header") });
	listen({ el: document.querySelector("body > main article header") });
});
