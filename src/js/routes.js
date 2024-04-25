import post from "../vue/components/post.vue";
import Home from "../vue/components/home.vue";
import tags from "../vue/components/tags.vue";
import about from "../vue/components/about.vue";
import NotFound from "../vue/components/404.vue";
import search from "../vue/components/search.vue";
import subTags from "../vue/components/subTags.vue";
import categories from "../vue/components/categories.vue";
import subCategories from "../vue/components/subCategories.vue";
import FriendshipLink from "../vue/components/friendshipLink.vue";

export default [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/404",
		name: "404",
		component: NotFound,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		redirect: "/404",
	},
	{
		path: "/friendshiplink",
		name: "friendshiplink",
		component: FriendshipLink,
	},
	{
		path: "/post/:postName",
		name: "post",
		component: post,
	},
	{
		path: "/tags/",
		name: "tags",
		component: tags,
	},
	{
		path: "/tags/:tagsName",
		name: "subTags",
		component: subTags,
	},
	{
		path: "/categories/",
		name: "categories",
		component: categories,
	},
	{
		path: "/categories/:categoriesName",
		name: "subCategories",
		component: subCategories,
	},
	{
		path: "/search/:searchData",
		name: "search",
		component: search,
	},
	{
		path: "/about/",
		name: "about",
		component: about,
	},
];
