<template>
	<app-shell>
		<app-hero-section />
		<popular-products />
	</app-shell>
</template>

<static-query>
query Metadata {
  metadata {
    siteUrl
    indexPageTitle
    indexPageDescription
  }
}
</static-query>

<script>
	// Add og and twitter card image
	import AppHeroSection from "../components/AppHeroSection";
	import PopularProducts from "../components/PopularProducts";

	export default {
		name: "Home",
		metaInfo() {
			return {
				title: this.$static.metadata.indexPageTitle,
				meta: [
					{
						name: "title",
						content: this.$static.metadata.indexPageTitle
					},
					{
						name: "description",
						content: this.$static.metadata.indexPageDescription
					},
					// og / facebook
					{ property: "og:url", content: this.$static.metadata.siteUrl },
					{
						property: "og:title",
						content: this.$static.metadata.indexPageTitle
					},
					{
						property: "og:description",
						content: this.$static.metadata.indexPageDescription
					},
					{
						property: "og:image",
						content: `${this.$static.metadata.siteUrl}/og-img.jpg`
					},
					{ property: "og:type", content: "website" },
					// twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{ property: "twitter:url", content: this.$static.metadata.siteUrl },
					{
						property: "twitter:title",
						content: this.$static.metadata.indexPageTitle
					},
					{
						property: "twitter:description",
						content: this.$static.metadata.indexPageDescription
					},
					{
						property: "twitter:image",
						content: `${this.$static.metadata.siteUrl}/og-img.jpg`
					}
				]
			};
		},
		components: {
			AppHeroSection,
			PopularProducts
		}
	};
</script>
