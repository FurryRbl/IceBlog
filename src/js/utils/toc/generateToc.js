import MarkdownIt from "markdown-it";

const getTocTree = (HTML) => {
	const parser = new DOMParser();
	const doc = parser.parseFromString(HTML, "text/html");
	const headings = Array.from(doc.querySelectorAll("h2, h3, h4, h5, h6"));

	const toc = headings.map((heading) => ({
		number: parseInt(heading.tagName.charAt(1)) - 2,
		name: heading.textContent.trim(),
		id: heading.id.trim(),
	}));

	return toc;
};

const getTocTreeToMarkdown = (tocTree) => {
	let toc = "";

	for (const currentItem of tocTree) {
		const indentation = " ".repeat(currentItem.number * 2);
		toc += `${indentation}- [${currentItem.name}](#${currentItem.id} "${currentItem.name}")\n`;
	}

	return toc;
};

const getTocTreeToHTML = (tocMarkdown) => {
	const md = new MarkdownIt();
	return md.render(tocMarkdown);
};

export default (HTML) => {
	const tocTree = getTocTree(HTML);
	const TocTreeToMarkdown = getTocTreeToMarkdown(tocTree);
	const TocTreeToHTML = getTocTreeToHTML(TocTreeToMarkdown);
	return TocTreeToHTML;
};
