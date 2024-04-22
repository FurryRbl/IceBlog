<template>
	<div class="card items-center px-5 py-16">
		<div class="flex flex-col items-center space-y-3">
			<div class="flex flex-col items-center">
				<img src="/site/avatar.webp" alt="站点 Logo" class="h-2/4 w-2/4 rounded-full" />
				<p class="text-c-blue">锐冰龙</p>
			</div>
			<div class="space-x-4 text-2xl">
				<a href="https://github.com/FurryRbl" title="Github">
					<font-awesome-icon icon="fa-brands fa-github" />
				</a>
				<a href="https://github.com/FurryRbl" title="哔哩哔哩">
					<font-awesome-icon icon="fa-brands fa-bilibili" style="color: #74c0fc" />
				</a>
				<a href="https://SharpIce.top" title="个人博客">
					<font-awesome-icon class="text-c-blue" icon="blog" />
				</a>
			</div>
			<div class="flex flex-row space-x-5">
				<p class="flex flex-col items-center">
					<span class="text-lg">{{ $site.post.length }}</span>
					<span class="text-sm">文章</span>
				</p>
				<p class="flex flex-col items-center">
					<span class="text-lg">{{ [...$site.post.map((post) => post.categories)].length }}</span>
					<span class="text-sm">分类</span>
				</p>
				<p class="flex flex-col items-center">
					<span class="text-lg">{{ [...$site.post.map((post) => post.tags)].length }}</span>
					<span class="text-sm">标签</span>
				</p>
				<p class="flex flex-col items-center">
					<span class="text-lg">{{ [...new Set($site.post.flatMap((post) => post.keywords))].length }}</span>
					<span class="text-sm">关键词</span>
				</p>
			</div>
		</div>
	</div>
</template>

<!-- 解决一个玄学问题 -->
<script></script>
