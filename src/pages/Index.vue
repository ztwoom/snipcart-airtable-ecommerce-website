<template>
	<app-shell>
		<app-hero-section />
		<popular-products />
	</app-shell>
</template>

<page-query>
query allProduct {
  allProduct {
    edges {
      node {
        id
        productName
        productCode
        images {
          url
        }
        stock
        stapleSize
        description
        unitCost
        colorCartridge
        expires
        tissueThickness
      }
    }
  }
}
</page-query>

<script>
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
