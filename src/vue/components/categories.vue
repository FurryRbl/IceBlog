<template>
	<div class="card flex flex-row flex-wrap justify-center gap-12 px-10 py-5">
		<a v-for="(item, index) in allCategories" :key="index" :href="`/categories/${encodeURIComponent(item.name)}`">
			<span class="text-lg text-c-blue">{{ item.name }}</span>
			<span class="text-sm text-c-purple">({{ item.num }})</span>
		</a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allCategories: null,
		};
	},
	created() {
		const CategoriesCounts = {};
		this.$site.post.forEach((post) => {
			const categories = post.categories.trim();
			CategoriesCounts[categories] = (CategoriesCounts[categories] || 0) + 1;
		});
		this.allCategories = Object.keys(CategoriesCounts).map((categories) => ({
			name: categories,
			num: CategoriesCounts[categories],
		}));
	},
};
</script>
