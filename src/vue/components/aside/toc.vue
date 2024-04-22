<template>
	<div class="card items-center px-2 py-5">
		<div class="border-slate-400 pb-3 text-center">
			<h1 class="text-2xl">文章目录</h1>
		</div>
		<OverlayScrollbarsComponent id="toc-root" defer></OverlayScrollbarsComponent>
	</div>
</template>

<script>
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";

export default {
	components: {
		OverlayScrollbarsComponent,
	},
};
</script>
