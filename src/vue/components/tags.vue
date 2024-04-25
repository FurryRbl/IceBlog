<template>
	<div class="card flex flex-row flex-wrap justify-center gap-12 px-10 py-5">
		<a v-for="(item, index) in allTags" :key="index" :href="`/tags/${encodeURIComponent(item.name)}`">
			<span class="text-lg text-c-blue">{{ item.name }}</span>
			<span class="text-sm text-c-purple">({{ item.num }})</span>
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allTags: null,
		};
	},
	created() {
		const tagCounts = {};
		this.$site.post.forEach((post) => {
			const tag = post.tags.trim();
			tagCounts[tag] = (tagCounts[tag] || 0) + 1;
		});
		this.allTags = Object.keys(tagCounts).map((tag) => ({
			name: tag,
			num: tagCounts[tag],
		}));
	},
};
</script>
