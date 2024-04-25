<template>
	<div class="flex min-h-10 flex-col space-y-8">
		<div v-for="(item, index) in searchResult" :key="index" class="card space-y-3 p-5">
			<a :href="item.item.path" :title="item.item.title" class="blocks truncate">
				<p class="truncate" v-html="item.item.title"></p>
				<div class="flex flex-row space-x-4">
					<p class="space-x-1">
						<font-awesome-icon icon="calendar-days" />
						<span class="text-xs">{{ formatDate(item.item.date) }}</span>
					</p>
					<p class="space-x-1">
						<font-awesome-icon icon="folder-open" />
						<span class="text-xs">{{ item.item.categories }}</span>
					</p>
					<p class="space-x-1">
						<font-awesome-icon icon="tags" />
						<span class="text-xs">{{ item.item.tags }}</span>
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
import Fuse from "fuse.js";
import formatDate from "../../js/utils/formatDate.js";

let fuse;

export default {
	data() {
		return {
			searchResult: null,
		};
	},
	created() {
		fuse = new Fuse(this.$site.post, {
			isCaseSensitive: true,
			keys: ["title"],
		});

		this.search();
		this.$watch("$route", () => this.search());
	},
	methods: {
		formatDate,
		search() {
			if (this.$route.params.searchData) {
				this.searchResult = fuse.search(decodeURIComponent(atob(this.$route.params.searchData)));
			}
		},
	},
};
</script>
