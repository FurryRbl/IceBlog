<template>
	<ul class="card list-disc space-y-5 px-10 py-5">
		<li v-for="(item, index) in post" :key="index" class="list-item">
			<a :href="item.path" class="text-c-blue">{{ item.title }}</a>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			post: null,
		};
	},
	created() {
		this.post = this.$site.post.filter((post) => post.tags === decodeURIComponent(this.$route.params.tagsName));
	},
};
</script>
