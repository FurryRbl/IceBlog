<template>
	<div class="card space-y-3 p-5">
		<p>
			<font-awesome-icon class="text-lg" icon="history" />
			最新文章
		</p>
		<div class="space-y-4">
			<div v-for="(item, index) in $site.post.slice(-3).reverse()" :key="index" class="space-y-3">
				<a :href="item.path" :title="item.title" class="blocks truncate">
					<p class="text-xs">{{ formatDate(item.date) }}</p>
					<p class="truncate">{{ item.title }}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
import formatDate from "../../../js/utils/formatDate.js";
</script>
