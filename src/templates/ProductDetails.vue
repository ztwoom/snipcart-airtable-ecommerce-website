<template>
	<app-shell>
		<div class="container mt-6 lg:mt-12">
			<section class="flex flex-col lg:flex-row lg:m-0">
				<div class="gallery max-w-md w-full mx-auto lg:m-0">
					<div
						class="relative bg-surface min-h-85 flex justify-center items-center gallery__current-img"
					>
						<img
							:src="currentImg"
							:alt="
								`${$page.product.productCode} ${$page.product.colorCartridge} ${$page.product.productName} ${$page.product.stapleSize} x ${$page.product.openStapleHeight}`
							"
							width="220"
						/>
						<div
							class="absolute bottom-0 right-0 font-medium uppercase text-xl text-gray-400 mr-4 mb-4 leading-none"
						>
							{{ $page.product.productCode }}
						</div>
					</div>
					<div
						v-for="image in $page.product.images"
						:key="image.id"
						class="flex justify-center items-center bg-surface px-4 py-1 cursor-pointer hover:shadow"
						:class="[currentImgId === image.id ? 'shadow' : '']"
						:data-img-id="image.id"
						@click="changeImg($event)"
					>
						<img
							:src="image.url"
							:alt="
								`${$page.product.productCode} ${$page.product.colorCartridge} ${$page.product.productName} ${$page.product.stapleSize} x ${$page.product.openStapleHeight}`
							"
							width="70"
							class="pointer-events-none"
						/>
					</div>
				</div>
				<div class="mt-6 lg:mt-0 max-w-md mx-auto">
					<div class="text-xs text-gray-600 tracking-wide mt">
						{{ $page.product.stock }} in stock
					</div>
					<div class="text-xl leading-tight mt-1 tracking-wide">
						{{ $page.product.productCode }} ({{ $page.product.colorCartridge }})
						{{ $page.product.productName }} {{ $page.product.stapleSize }} x
						{{ $page.product.openStapleHeight }}
					</div>
					<div class="text-semibold text-gray-900 tracking-wider mt-4">
						${{ $page.product.unitCost }}
					</div>
					<p
						v-if="$page.product.description"
						class="text-sm tracking-wider text-gray-600 mt-3"
					>
						{{ $page.product.description }}
					</p>
					<section class="mt-6 max-w-md mx-auto lg:max-w-full">
						<span class="uppercase text-xs tracking-wider font-medium"
							>Note</span
						>
						<span
							class="text-sm tracking-wider text-gray-600 h-10 flex items-center mt-2"
						>
							We guarantee all products are in original factory packaging and in
							current date.
						</span>
						<span
							class="text-sm tracking-wider text-gray-600 h-10 flex items-center mt-2"
						>
							Shipping only within the U.S.
						</span>
					</section>
					<button
						class="snipcart-add-item inline-flex justify-center items-center rounded bg-primary-dark h-9 px-3 mt-10 focus:outline-none w-full"
						:data-item-name="
							`${$page.product.productCode} (${$page.product.colorCartridge}) ${$page.product.productName} ${$page.product.stapleSize} x ${$page.product.openStapleHeight}`
						"
						:data-item-id="$page.product.id"
						:data-item-price="$page.product.unitCost"
						:data-item-url="$page.product.path"
						:data-item-image="$page.product.images[0].url"
						:data-item-max-quantity="$page.product.stock"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="fill-current text-white w-xs h-xs mr-2"
							aria-label="Buy item"
						>
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"
							/>
						</svg>
						<span
							class="text-sm text-white uppercase font-medium tracking-wider"
						>
							Buy (${{ $page.product.unitCost }})
						</span>
					</button>
				</div>
			</section>
			<section class="mt-16 max-w-md mx-auto lg:max-w-full">
				<div class="border-b-2 border-black pb-2">
					<h2 class="uppercase text-lg tracking-wider font-medium mt-3">
						Product details
					</h2>
				</div>
				<product-detail-list>
					<product-detail-item
						v-for="(value, key, i) in productDetails"
						:key="i"
					>
						<template #key>
							{{ key }}
						</template>
						<template #value>
							{{ value }}
						</template>
					</product-detail-item>
				</product-detail-list>
			</section>
			<section class="mt-16 max-w-md mx-auto lg:max-w-full">
				<span class="uppercase text-xs tracking-wider font-medium"
					>Medical disclaimer</span
				>
				<span class="text-sm tracking-wider text-gray-600 block mt-2">
					The sale of this item may be subject to strict regulation by the U.S.
					Food and Drug Administration and state and local regulatory agencies.
					If so, do not bid on this item unless you are an authorized purchaser.
					If the item is subject to FDA regulation, We will verify your status
					as an authorized purchaser of this item before shipping.
				</span>
				<span class="text-sm tracking-wider text-gray-600 block mt-2">
					We purchase Surplus Bariatric Reloads in Original factory packaged, In date, Expires, If you have products to sell, please send E-mail to: 
					<a href="mailto:bariatricreloads@gmail.com" class="text-blue-500"
						>bariatricreloads@gmail.com</a
					>
				</span>
			</section>
		</div>
	</app-shell>
</template>

<page-query>
query($path: String) {
  product(path: $path) {
	id
    path
    tissueThickness
    openStapleHeight
    closedStapleHeight
    numberOfStaples
    brand
    productCode
    stock
    colorCartridge
    productName
    stapleSize
    description
    unitCost
    expires
    tissueThickness
    images {
      id
      url
    }
  }
  metadata {
	  siteUrl
  }
}
</page-query>

<script>
	export default {
		name: "ProductDetails",
		metaInfo() {
			return {
				headAttrs: {
					prefix:
						"og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#"
				},
				title: `${this.$page.product.productCode} (${this.$page.product.colorCartridge}) ${this.$page.product.productName} ${this.$page.product.stapleSize} x ${this.$page.product.openStapleHeight} | $${this.$page.product.unitCost}`,
				meta: [
					{
						name: "title",
						content: `${this.$page.product.productCode} (${this.$page.product.colorCartridge}) ${this.$page.product.productName} ${this.$page.product.stapleSize} x ${this.$page.product.openStapleHeight} | $${this.$page.product.unitCost}`
					},
					{
						name: "description",
						content: this.$page.product.description
					},
					// og - facebook
					{
						property: "og:url",
						content: `${this.$page.metadata.siteUrl}${this.$page.product.path}`
					},
					{
						property: "og:title",
						content: `${this.$page.product.productCode} (${this.$page.product.colorCartridge}) ${this.$page.product.productName} ${this.$page.product.stapleSize} x ${this.$page.product.openStapleHeight} | $${this.$page.product.unitCost}`
					},
					{
						property: "og:description",
						content: this.$page.product.description
					},
					{
						property: "og:image",
						content: `${this.$page.product.images[0].url}`
					},
					{ property: "og:type", content: "og:product" },
					{
						property: "product:price:amount",
						content: `${this.$page.product.unitCost}`
					},
					{ property: "product:price:currency", content: "USD" },
					// twitter
					{ property: "twitter:card", content: "summary_large_image" },
					{
						property: "twitter:url",
						content: `${this.$page.metadata.siteUrl}${this.$page.product.path}`
					},
					{
						property: "twitter:title",
						content: `${this.$page.product.productCode} (${this.$page.product.colorCartridge}) ${this.$page.product.productName} ${this.$page.product.stapleSize} x ${this.$page.product.openStapleHeight} | $${this.$page.product.unitCost}`
					},
					{
						property: "twitter:description",
						content: this.$page.product.description
					},
					{
						property: "twitter:image",
						content: `${this.$page.product.images[0].url}`
					}
				]
			};
		},
		data() {
			return {
				currentImg: "",
				currentImgId: "",
				productDetails: {}
			};
		},
		methods: {
			changeImg(event) {
				this.currentImgId = event.target.dataset.imgId;
				this.currentImg = this.$page.product.images.find(
					img => img.id === event.target.dataset.imgId
				).url;
			}
		},
		mounted() {
			this.currentImg = this.$page.product.images[0].url;
			this.currentImgId = this.$page.product.images[0].id;

			this.productDetails = {
				"Product Code": this.$page.product.productCode,
				Expires: this.$page.product.expires,
				"Tissue thickness": this.$page.product.tissueThickness,
				Size: this.$page.product.stapleSize,
				"Number of staples": this.$page.product.numberOfStaples,
				"Color cartridge": this.$page.product.colorCartridge,
				"Open staple height": this.$page.product.openStapleHeight,
				"Closed staple height": this.$page.product.closedStapleHeight,
				Brand: this.$page.product.brand
			};
		}
	};
</script>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.gallery__current-img {
		grid-column: 1 / -1;
	}
</style>
