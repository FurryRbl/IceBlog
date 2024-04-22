<template>
	<main class="flex flex-col space-y-5">
		<div v-for="(item, index) in $site.FriendshipLink" :key="index" class="space-y-3">
			<p class="text-2xl text-c-blue">{{ item.name }}</p>
			<div class="flex flex-wrap gap-12 px-5 max-sm:justify-center">
				<a v-for="(link, linkIndex) in item.data" :key="linkIndex" :href="link.link">
					<div class="card h-72 w-48 bg-white hover:shadow-c-blue_green">
						<div class="px-10 pt-10">
							<img :src="link.avatar" :alt="link.name" class="h-full w-full rounded-full" />
						</div>
						<div class="card-body text-center">
							<p class="truncate" :title="link.name">{{ link.name }}</p>
							<p class="truncate" :title="link.description">{{ link.description }}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</main>
</template>

<!-- 解决一个玄学问题 -->
<script></script>
