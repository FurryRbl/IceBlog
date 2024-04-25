<template>
	<div class="relative">
		<div :class="{ fixed: ifRouteName('post'), 'w-72': ifRouteName('post') }" class="space-y-10">
			<toc v-if="ifRouteName('post')"></toc>
			<info v-if="!ifRouteName('post') && !ifRouteName('404')"></info>
			<LatestArticles v-if="!ifRouteName('post') && !ifRouteName('404')"></LatestArticles>
		</div>
	</div>
</template>

<script>
import toc from "./toc.vue";
import info from "./info.vue";
import LatestArticles from "./latestArticles.vue";

export default {
	components: {
		toc,
		info,
		LatestArticles,
	},
	methods: {
		ifRouteName(name) {
			return name === this.$route.name;
		},
	},
};
</script>
