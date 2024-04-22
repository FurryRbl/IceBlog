import post from "../vue/components/post.vue";
import Home from "../vue/components/home.vue";
import NotFound from "../vue/components/404.vue";
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
		path: "/post/:postId",
		name: "post",
		component: post,
	},
];
