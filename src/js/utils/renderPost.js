import axios from "axios";
import errorDialog from "./errorDialog.js";

// Markdown-it
import markdownIt from "markdown-it";
// Markdown-It 插件
import markdownItSub from "markdown-it-sub";
import markdownItSup from "markdown-it-sup";
import markdownItIns from "markdown-it-ins";
import markdownItMark from "markdown-it-mark";
import markdownItAbbr from "markdown-it-abbr";
import markdownItAttrs from "markdown-it-attrs";
import markdownItDeflist from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";
import markdownItCjkBreaks from "markdown-it-cjk-breaks";
import { full as markdownItEmoji } from "markdown-it-emoji";
import markdownItMultimdTable from "markdown-it-multimd-table";

const render = (MarkdownText) => {
	const md = new markdownIt({
		html: true,
		linkify: true,
		typographer: true,
	})
		.use(markdownItAbbr)
		.use(markdownItAttrs)
		.use(markdownItCjkBreaks)
		.use(markdownItDeflist)
		.use(markdownItEmoji)
		.use(markdownItFootnote)
		.use(markdownItIns)
		.use(markdownItMark)
		.use(markdownItMultimdTable)
		.use(markdownItSub)
		.use(markdownItSup);

	// 超链接标签
	md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		// 添加 target="_blank" 到所有超链接
		token.attrPush(["target", "_blank"]);
		// 调用原始的渲染函数
		return self.renderToken(tokens, idx, options);
	};

	// 标题渲染
	md.renderer.rules.heading_open = (tokens, idx) => {
		const token = tokens[idx];
		const tag = token.tag;
		let title = md.utils.escapeHtml(tokens[idx + 1].content);
		tokens[idx + 1].children.forEach((child) => {
			if (child.level === 1) {
				title = child.content;
			}
		});
		return `<${tag} id="${title.replace(/\s+/g, "_")}"><span>`;
	};
	md.renderer.rules.heading_close = (tokens, idx) => {
		const token = tokens[idx];
		const tag = token.tag;
		return `</span></${tag}>`;
	};

	return md.render(MarkdownText);
};

export default async () => {
	return axios
		.get("./index.md")
		.then((response) => {
			return render(response.data);
		})
		.catch((error) => {
			errorDialog(error);
		});
};
