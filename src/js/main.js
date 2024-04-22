import axios from "axios";
import "../less/main.less";
import { createApp } from "vue";
import routes from "./routes.js";
import App from "../vue/app.vue";
import Init from "../vue/init.vue";
import "@fontsource/noto-serif-sc";
import "@fontsource/noto-color-emoji";
import "@fontsource-variable/noto-serif";
import "sweetalert2/src/sweetalert2.scss";
import "@fontsource-variable/jetbrains-mono";
import "highlight.js/scss/atom-one-dark.scss";
import errorDialog from "./utils/errorDialog.js";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbars } from "overlayscrollbars";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createRouter, createWebHistory } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab, far);

document.addEventListener("DOMContentLoaded", function (event) {
	OverlayScrollbars(document.body, {
		scrollbars: {
			autoHide: "scroll",
			autoHideDelay: 400,
		},
	});
});

let app = createApp(Init);
app.mount("#app");

axios
	.get("/site/index.json")
	.then((response) => {
		app.unmount();

		app = createApp(App);
		app.use(
			createRouter({
				history: createWebHistory(),
				routes,
			}),
		);
		app.component("font-awesome-icon", FontAwesomeIcon); // Font awesome图标库
		app.config.globalProperties.$site = response.data;
		app.mount("#app");
	})
	.catch((error) => {
		errorDialog(error);
	});
