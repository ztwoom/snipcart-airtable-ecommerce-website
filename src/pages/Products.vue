<template>
	<app-shell>
		<div class="container mt-6">
			<div class="flex justify-between pb-2 border-b-2 border-black">
				<div class="flex items-center self-end">
					<span class="w-1 h-1 bg-black"></span>
					<div class="uppercase text-xs tracking-wider font-medium ml-4">
						Surgical reloads
					</div>
				</div>
				<button
					class="w-12 h-12 block flex justify-center items-center relative rounded-full hover:bg-surface focus:outline-none"
					@click="$refs.sheet.toggleSheet()"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="w-6 h-6 fill-current text-gray-500"
					>
						<path fill="none" d="M0 0h24v24H0V0z" />
						<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
					</svg>
				</button>
			</div>
			<div class="grid justify-center mt-6">
				<product-card
					v-for="{ node } in filteredProducts"
					:key="node.id"
					:id="node.id"
					:path="node.path"
					:image="node.images[0].url"
					:product-code="node.productCode"
					:color-cartridge="node.colorCartridge"
					:product-name="node.productName"
					:staple-size="node.stapleSize"
					:open-staple-height="node.openStapleHeight"
					:stock="node.stock"
					:unit-cost="node.unitCost"
					@product:id="quickView"
				/>
			</div>
		</div>
		<app-modal #default="{ close }" ref="modal">
			<product-quick-view-card :product="product" :close-modal="close" />
		</app-modal>
		<app-side-sheet ref="sheet">
			<template #default="{ toggleSheet }">
				<div
					class="flex items-center justify-between h-16 px-4 sticky top-0 bg-white z-50"
				>
					<div class="text-lg tracking-wide">
						Filter by
					</div>
					<button
						class="flex items-center justify-center w-12 h-12 relative rounded-full hover:bg-surface focus:outline-none -mr-1"
						@click="toggleSheet"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="w-6 h-6 text-gray-500 fill-current"
							aria-label="Close modal"
						>
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
							/>
						</svg>
					</button>
				</div>
				<app-accordion>
					<template #header>
						Product code
					</template>
					<template #body>
						<ul>
							<li
								v-for="productCode in filterBy.productCode"
								:key="productCode"
							>
								<app-filters-checkbox
									:id="productCode"
									:label="productCode"
									:for="productCode"
									:value="productCode"
									v-model="productCodes"
								/>
							</li>
						</ul>
					</template>
				</app-accordion>
				<app-accordion>
					<template #header>
						Cartridge color
					</template>
					<template #body>
						<ul>
							<li v-for="color in filterBy.color" :key="color.color">
								<app-filters-checkbox
									:id="color.color"
									:label="color.color"
									:for="color.color"
									:value="color.color"
									v-model="colors"
								>
									<div
										class="w-4-5 h-4-5 border mr-8"
										:class="[color.colorClass]"
									></div>
								</app-filters-checkbox>
							</li>
						</ul>
					</template>
				</app-accordion>
				<app-accordion>
					<template #header>
						Tissue thickness
					</template>
					<template #body>
						<ul>
							<li
								v-for="thickness in filterBy.tissueThickness"
								:key="thickness"
							>
								<app-filters-checkbox
									:id="thickness"
									:label="thickness"
									:for="thickness"
									:value="thickness"
									v-model="tissueThickness"
								/>
							</li>
						</ul>
					</template>
				</app-accordion>
			</template>
		</app-side-sheet>
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
        openStapleHeight
        unitCost
        colorCartridge
        expires
        tissueThickness
        path
      }
    }
  }
  metadata {
    siteUrl
    productPageTitle
    productPageDescription
  }
}
</page-query>

<script>
	import ProductCard from "../components/ProductCard";
	import ProductQuickViewCard from "../components/ProductQuickViewCard";
	import AppSideSheet from "../components/AppSideSheet";
	import AppAccordion from "../components/AppAccordion";
	import AppFiltersCheckbox from "../components/AppFiltersCheckbox";

	export default {
		// Add og image
		name: "Products",
		metaInfo() {
			return {
				title: this.$page.metadata.productPageTitle,
				meta: [
					{
						name: "title",
						content: this.$page.metadata.productPageTitle
					},
					{
						name: "description",
						content: this.$page.metadata.productPageDescription
					},
					// og / facebook
					{
						property: "og:url",
						content: `${this.$page.metadata.siteUrl}/products`
					},
					{
						property: "og:title",
						content: this.$page.metadata.productPageTitle
					},
					{
						property: "og:description",
						content: this.$page.metadata.productPageDescription
					},
					{
						property: "og:image",
						content: `${this.$page.metadata.siteUrl}/og-img.jpg`
					},
					{ property: "og:type", content: "website" },
					// twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{
						property: "twitter:url",
						content: `${this.$page.metadata.siteUrl}/products`
					},
					{
						property: "twitter:title",
						content: this.$page.metadata.productPageTitle
					},
					{
						property: "twitter:description",
						content: this.$page.metadata.productPageDescription
					},
					{
						property: "twitter:image",
						content: `${this.$page.metadata.siteUrl}/og-img.jpg`
					}
				]
			};
		},
		data() {
			return {
				colors: [],
				productCodes: [],
				tissueThickness: [],
				products: [
					{ color: "Blue", productCode: "GST45B", tissueThickness: "Regular" },
					{
						color: "Gold",
						productCode: "GST60G",
						tissueThickness: "Regular/thick"
					}
				],
				product: {},
				filterBy: {
					productCode: ["GST45B", "GST60B", "GST60D", "GST60G", "GST60W"],
					color: [
						{ color: "Black", colorClass: "bg-black" },
						{ color: "White", colorClass: "bg-white" },
						{ color: "Blue", colorClass: "bg-blue-500" },
						{ color: "Gold", colorClass: "bg-gold" },
						{ color: "Green", colorClass: "bg-teal" }
					],
					tissueThickness: ["Regular/thick", "Regular", "Thick"]
				}
			};
		},
		components: {
			ProductCard,
			ProductQuickViewCard,
			AppSideSheet,
			AppAccordion,
			AppFiltersCheckbox
		},
		computed: {
			filteredProducts() {
				let filteredProducts;
				const [c1 = "", c2 = "", c3 = "", c4 = "", c5 = ""] = this.colors;
				const [
					pc1 = "",
					pc2 = "",
					pc3 = "",
					pc4 = "",
					pc5 = ""
				] = this.productCodes;
				const [tt1 = "", tt2 = "", tt3 = ""] = this.tissueThickness;

				filteredProducts = this.$page.allProduct.edges.filter(
					({ node: { colorCartridge, productCode, tissueThickness } }) =>
						colorCartridge.toLowerCase() === c1.toLowerCase() ||
						colorCartridge.toLowerCase() === c2.toLowerCase() ||
						colorCartridge.toLowerCase() === c3.toLowerCase() ||
						colorCartridge.toLowerCase() === c4.toLowerCase() ||
						colorCartridge.toLowerCase() === c5.toLowerCase() ||
						productCode.toLowerCase() === pc1.toLowerCase() ||
						productCode.toLowerCase() === pc2.toLowerCase() ||
						productCode.toLowerCase() === pc3.toLowerCase() ||
						productCode.toLowerCase() === pc4.toLowerCase() ||
						productCode.toLowerCase() === pc5.toLowerCase() ||
						tissueThickness.toLowerCase() === tt1.toLowerCase() ||
						tissueThickness.toLowerCase() === tt2.toLowerCase() ||
						tissueThickness.toLowerCase() === tt3.toLowerCase()
				);
				return filteredProducts.length === 0
					? this.$page.allProduct.edges
					: filteredProducts;
			}
		},
		methods: {
			quickView(id) {
				this.product = this.$page.allProduct.edges.find(
					product => product.node.id === id
				).node;
				this.$refs.modal.open();
			}
		}
	};
</script>