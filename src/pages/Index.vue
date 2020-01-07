<template>
	<app-shell>
		<app-hero-section />
		<popular-products />
	</app-shell>
</template>

<script>
	// To do: move current <page-query> to an <static-query> component and fetch only popular products
	import AppHeroSection from "../components/AppHeroSection";
	import PopularProducts from "../components/PopularProducts";

	export default {
		name: "Home",
		metaInfo: {
			title: "Hello, world!"
		},
		components: {
			AppHeroSection,
			PopularProducts
		}
	};
</script>
