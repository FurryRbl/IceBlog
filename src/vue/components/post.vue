<template>
	<div class="card flex flex-col items-center space-y-3 px-10 py-5">
		<p>{{ post.title }}</p>
		<div class="flex flex-row space-x-5 max-sm:flex-wrap max-sm:justify-center">
			<p class="space-x-1">
				<font-awesome-icon icon="calendar-days" />
				<span class="text-xs">{{ formatDate(post.date) }}</span>
			</p>
			<p class="space-x-1">
				<font-awesome-icon icon="folder-open" />
				<span class="text-xs">{{ post.categories }}</span>
			</p>
			<p class="space-x-1">
				<font-awesome-icon icon="tags" />
				<span class="text-xs">{{ post.tags }}</span>
			</p>
			<p class="space-x-1">
				<font-awesome-icon icon="file-word" />
				<span class="text-xs">{{ postWordCount }} 字</span>
			</p>
			<p class="space-x-1">
				<font-awesome-icon icon="clock" />
				<span class="text-xs">{{ postReadTime }}</span>
			</p>
		</div>
		<div class="flex flex-row"></div>
		<div id="post-content" v-html="postContent"></div>
	</div>
</template>

<script>
import hljs from "highlight.js";
import formatDate from "../../js/utils/formatDate.js";
import renderPost from "../../js/utils/renderPost.js";
import { OverlayScrollbars } from "overlayscrollbars";
import tocEffect from "../../js/utils/toc/tocEffect.js";
import generateToc from "../../js/utils/toc/generateToc.js";

export default {
	data() {
		return {
			post: null,
			postWordCount: 0,
			postContent: null,
			postReadTime: null,
		};
	},
	created() {
		const currentURL = decodeURIComponent(window.location.pathname).replace(/^\/+/g, "").replace(/\/+$/g, "");
		this.post = this.$site.post.find((post) => post.path.replace(/^\/+/g, "").replace(/\/+$/g, "") === currentURL);

		if (!this.post) {
			window.location.href = "/404";
		} else {
			renderPost().then((data) => {
				this.postContent = data; // 文章选然后数据

				// 统计字数
				const postTextContent = document.createElement("div");
				postTextContent.innerHTML = data;
				const postTextContentIntl = new Intl.Segmenter("zh", { granularity: "grapheme" }).segment(postTextContent.textContent.replace(/\s/g, ""));
				this.postWordCount = [...postTextContentIntl].length;

				// 计算阅读所需时间
				const totalSeconds = this.postWordCount / 6;
				const hours = Math.floor(totalSeconds / 3600);
				const minutes = Math.ceil((totalSeconds % 3600) / 60);
				// 格式化小时和分钟
				const hourString = hours > 0 ? `${hours}小时` : "";
				const minuteString = minutes > 0 ? `${minutes}分钟` : "";
				this.postReadTime = hourString + minuteString;

				// 生成 toc
				document.getElementById("toc-root").innerHTML = generateToc(data);
				tocEffect();

				this.$nextTick(() => {
					hljs.highlightAll();

					document.querySelectorAll("code").forEach(function (codeBlock) {
						OverlayScrollbars(codeBlock, {
							scrollbars: {
								theme: "os-theme-light",
								autoHide: "scroll",
								autoHideDelay: 400,
							},
						});
					});
				});
			});
		}
	},
	methods: {
		formatDate,
	},
};
</script>
