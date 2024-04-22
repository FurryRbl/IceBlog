import Swal from "sweetalert2";
import { OverlayScrollbars } from "overlayscrollbars";

export default (ErrorMessage) => {
	Swal.fire({
		title: "致命错误",
		html: `
<div>
<p>遇到了致命问题</p>
<br>
<pre id="error-dislog" class="flex flex-col text-left py-5 px-3 rounded-2xl bg-gray-100">${ErrorMessage}\n</pre>
</div>
		`,
		icon: "error",
		confirmButtonText: "确定",
		allowOutsideClick: false,
	});

	OverlayScrollbars(document.getElementById("error-dislog"), {});
};
