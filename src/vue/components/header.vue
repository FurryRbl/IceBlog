<template>
	<header class="flex w-full flex-row items-center justify-between px-5 lg:px-10">
		<a class="flex flex-row items-center space-x-2">
			<img src="/favicon.gif" alt="Logo" class="flex w-9" />
			<span class="text-lg font-bold max-sm:hidden"> 冰雪博客 </span>
		</a>
		<div class="flex flex-row items-center space-x-3 text-sm max-sm:flex-1 max-sm:justify-evenly">
			<form class="relative flex items-center justify-center">
				<font-awesome-icon icon="magnifying-glass" class="top-50 absolute left-2" />
				<input type="text" name="搜索" class="input input-bordered h-8 w-full max-w-xs rounded-lg border px-7 hover:border-c-blue focus:border-c-blue focus:outline-c-cyan" placeholder="搜索..." />
			</form>
			<div class="dropdown dropdown-end dropdown-hover">
				<button tabindex="0" aria-label="菜单" class="lg:hidden">
					<font-awesome-icon icon="list" />
				</button>
				<nav tabindex="0" class="z-10 max-lg:dropdown-content">
					<ul abindex="0" class="max-sm:w-50 flex flex-col items-center max-sm:menu max-sm:w-36 max-sm:space-y-3 max-sm:rounded-box max-sm:bg-base-100 max-sm:p-2 max-sm:shadow lg:flex-row lg:space-x-3">
						<li>
							<a class="nav-item" href="/">
								<span>
									<font-awesome-icon icon="home" />
								</span>
								<span>首页</span>
							</a>
						</li>
						<li>
							<a class="nav-item" href="/archive">
								<span>
									<font-awesome-icon icon="box-archive" />
								</span>
								<span>存档</span>
							</a>
						</li>
						<li>
							<a class="nav-item" href="/tags">
								<span>
									<font-awesome-icon icon="tags" />
								</span>
								<span>标签</span>
							</a>
						</li>
						<li>
							<a class="nav-item" href="/categories">
								<span>
									<font-awesome-icon icon="folder-open" />
								</span>
								<span>分类</span>
							</a>
						</li>
						<li>
							<a class="nav-item" href="/friendshiplink">
								<span>
									<font-awesome-icon icon="link" />
								</span>
								<span>友谊链接</span>
							</a>
						</li>
						<li>
							<a class="nav-item" href="/about">
								<span>
									<font-awesome-icon icon="heart" />
								</span>
								<span>关于我</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style scoped>
.nav-item {
	@apply space-x-1;
}
</style>
