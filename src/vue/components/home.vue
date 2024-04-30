<template>
	<div class="flex flex-col space-y-8">
		<div v-for="(item, index) in $site.post.reverse()" :key="index" class="card space-y-3 p-5">
			<a :href="item.path" :title="item.title" class="blocks truncate">
				<p class="truncate">{{ item.title }}</p>
				<div class="flex flex-row space-x-4">
					<p class="space-x-1">
						<font-awesome-icon icon="calendar-days" />
						<span class="text-xs">{{ formatDate(item.date) }}</span>
					</p>
					<p class="space-x-1">
						<font-awesome-icon icon="folder-open" />
						<span class="text-xs">{{ item.categories }}</span>
					</p>
					<p class="space-x-1">
						<font-awesome-icon icon="tags" />
						<span class="text-xs">{{ item.tags }}</span>
					</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script setup>
import formatDate from "../../js/utils/formatDate.js";
</script>
