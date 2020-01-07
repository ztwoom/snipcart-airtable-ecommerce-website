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
					<div class="text-sm text-gray-700 tracking-wider mt-4">
						${{ $page.product.unitCost }}
					</div>
					<p
						v-if="$page.product.description"
						class="text-sm tracking-wider text-gray-600 mt-3"
					>
						{{ $page.product.description }}
					</p>
					<div class="mt-6 flex items-center">
						<div class="w-10 text-xs text-gray-600 tracking-widest">Qty</div>
						<div class="flex-grow flex items-center justify-center">
							<button
								class="w-12 h-12 hover:bg-surface rounded-full flex items-center justify-center focus:outline-none"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-current"
									aria-label="Pop one out of the cart"
								>
									<path fill="none" d="M0 0h24v24H0V0z" />
									<path d="M19 13H5v-2h14v2z" />
								</svg>
							</button>
							<span
								class="w-6 h-6 flex justify-center items-center text-gray-700 m-1"
								>1</span
							>
							<button
								class="w-12 h-12 hover:bg-surface rounded-full flex items-center justify-center focus:outline-none"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="w-6 h-6 fill-current"
									aria-label="Add one to the cart"
								>
									<path fill="none" d="M0 0h24v24H0V0z" />
									<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
								</svg>
							</button>
						</div>
						<div class="w-10"></div>
					</div>
					<button
						class="inline-flex justify-center items-center rounded bg-primary-dark h-9 px-3 mt-4 focus:outline-none w-full"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							aria-label="Add to cart"
							class="fill-current text-white w-xs h-xs mr-2"
						>
							<path fill="none" d="M0 0h24v24H0V0z" />
							<path
								d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"
							/>
						</svg>
						<span
							class="text-sm text-white uppercase font-medium tracking-wider"
						>
							Add to cart
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
				<span class="uppercase text-xs tracking-wider font-medium">Note</span>
				<span
					class="text-sm tracking-wider text-gray-600 h-10 flex items-center mt-2"
				>
					We guarantee all products are in original factory packaging and in
					current date.
				</span>
			</section>
		</div>
	</app-shell>
</template>

<page-query>
query($path: String) {
  product(path: $path) {
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
}

</page-query>

<script>
	export default {
		name: "ProductDetails",
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