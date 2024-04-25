<template>
	<div class="card flex flex-col items-center px-2 py-5">
		<div class="border-slate-400 pb-3">
			<h1 class="text-2xl">文章目录</h1>
		</div>
		<OverlayScrollbarsComponent id="toc-root" class="w-full" v-html="tocData" defer></OverlayScrollbarsComponent>
	</div>
</template>

<script>
import tocEffect from "../../../js/utils/toc/tocEffect.js";
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

const InitialData = window.toc;

export default {
	data() {
		return {
			tocData: "",
		};
	},
	beforeCreate() {
		const intervalId = setInterval(() => {
			this.tocData = window.toc;
			tocEffect();

			if (InitialData !== window.toc) {
				clearInterval(intervalId);
			}
		}, 500);
	},
	components: {
		OverlayScrollbarsComponent,
	},
};
</script>
