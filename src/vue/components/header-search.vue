<template>
	<form @submit.prevent="handleSearch" class="relative flex items-center justify-center">
		<font-awesome-icon icon="magnifying-glass" class="top-50 absolute left-2" />
		<input v-model="searchTerm" @input="handleSearch" type="text" name="搜索" class="input input-bordered h-8 w-full max-w-xs rounded-lg border px-7 hover:border-c-blue focus:border-c-blue focus:outline-c-cyan" placeholder="搜索..." />
	</form>
</template>

<script>
export default {
	data() {
		return {
			searchTerm: "",
		};
	},
	created() {
		this.$watch("$route", () => {
			if (this.$route.name === "search") {
				this.searchTerm = decodeURIComponent(atob(this.$route.params.searchData || ""));
			}
		});
	},
	methods: {
		handleSearch() {
			if (this.searchTerm.trim() === "") {
				return;
			}

			const base64SearchTerm = btoa(encodeURIComponent(this.searchTerm.trim()));

			this.$router.push({
				name: "search",
				params: {
					searchData: base64SearchTerm,
				},
			});
		},
	},
};
</script>
