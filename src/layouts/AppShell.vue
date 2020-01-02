<template>
	<div>
		<app-header />
		<app-banner />
		<slot />
		<app-footer />
	</div>
</template>

<script>
	import AppHeader from "../components/AppHeader";
	import AppBanner from "../components/AppBanner";
	import AppFooter from "../components/AppFooter";

	export default {
		components: {
			AppHeader,
			AppBanner,
			AppFooter
		}
	};
</script>