<template>
	<div class="flex h-screen flex-col items-center space-y-7 py-3">
		<Header></Header>
		<main class="flex w-full flex-1 flex-col items-center space-y-10 lg:flex-row lg:items-start lg:justify-center lg:space-x-10 lg:space-y-0">
			<router-view class="w-[90%] lg:w-[50%]"></router-view>
			<Aside class="hidden w-72 lg:block"></Aside>
		</main>
		<Footer></Footer>
	</div>
</template>

<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Aside from "./components/aside/main.vue";
</script>
