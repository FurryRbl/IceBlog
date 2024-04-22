const scrollToNearestHeading = () => {
	let scrollTimer;

	const handleScroll = () => {
		clearTimeout(scrollTimer);

		scrollTimer = setTimeout(() => {
			const scrollPosition =
				window.scrollY || document.documentElement.scrollTop;

			const headings = document.querySelectorAll(
				"#post-content h2, #post-content h3, #post-content h4, #post-content h5, #post-content h6",
			);

			let closestHeadingId;
			let closestDistance = Infinity;

			headings.forEach((heading) => {
				const distance = Math.abs(heading.offsetTop - scrollPosition);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestHeadingId = heading.id;
				}
			});

			history.replaceState(null, null, "#" + closestHeadingId);
		}, 100);
	};

	window.addEventListener("scroll", handleScroll);
};

const updateTocHighlightOnScroll = () => {
	let scrollTimer;

	const handleScroll = () => {
		clearTimeout(scrollTimer);

		scrollTimer = setTimeout(() => {
			const scrollPosition =
				window.scrollY || document.documentElement.scrollTop;

			const headings = document.querySelectorAll(
				"#post-content h2, #post-content h3, #post-content h4, #post-content h5, #post-content h6",
			);

			let closestHeadingId;
			let closestDistance = Infinity;

			headings.forEach((heading) => {
				const distance = Math.abs(heading.offsetTop - scrollPosition);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestHeadingId = encodeURIComponent(heading.id);
				}
			});

			// 移除上一个select.toc
			const previousLink = document.querySelector(
				`#toc-root a[class="select-toc"]`,
			);

			if (previousLink) {
				previousLink.classList.remove("select-toc");
			}

			// 添加select.toc
			const link = document.querySelector(
				`#toc-root a[href="#${closestHeadingId}"]`,
			);
			if (link) {
				link.classList.add("select-toc");
				link.scrollIntoView({ behavior: "smooth" });
			}
		}, 20);
	};

	window.addEventListener("scroll", handleScroll);
};

export default () => {
	scrollToNearestHeading();
	updateTocHighlightOnScroll();
};
