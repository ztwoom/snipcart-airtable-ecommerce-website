<template>
	<section class="container mt-24 md:mt-32 lg:mt-12">
		<g-link
			class="uppercase text-sm tracking-wide font-medium text-gray-600 inline-flex items-center hover:text-primary-dark"
		>
			See all catalog
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 fill-current self-baseline"
			>
				<path fill="none" d="M0 0h24v24H0V0z" />
				<path d="M10 17l5-5-5-5v10z" />
			</svg>
		</g-link>
		<div class="border-b-2 border-black pb-2">
			<h2 class="uppercase text-lg tracking-wider font-medium mt-3">
				Most Popular
			</h2>
		</div>
		<div class="grid justify-center mt-6">
			<div
				v-for="{
					node: {
						id,
						images,
						productName,
						productCode,
						stock,
						stapleSize,
						description,
						unitCost,
						colorCartridge
					}
				} in $page.allProduct.edges"
				:key="id"
			>
				<app-hover #default="{ hover }">
					<g-link class="block">
						<div
							class="min-h-85 bg-surface relative flex items-center justify-center hover:shadow-lg overflow-hidden"
						>
							<img
								:src="images[0].url"
								width="220"
								:alt="`${productCode} ${productName}`"
							/>
							<transition name="slide">
								<button
									v-if="hover"
									class="flex items-center justify-center w-10 h-10 bg-primary-dark absolute bottom-0 left-0 rounded-tr-lg focus:outline-none"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										aria-label="Add to cart"
										class="fill-current text-white w-6 h-6"
									>
										<path fill="none" d="M0 0h24v24H0V0z" />
										<path
											d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4l-3.87 7H8.53L4.27 2H1v2h2l3.6 7.59L3.62 17H19v-2H7l1.1-2z"
										/>
									</svg>
								</button>
							</transition>
							<div
								class="absolute bottom-0 right-0 font-medium uppercase text-xl text-gray-400 mr-4 mb-4 leading-none"
							>
								{{ productCode }}
							</div>
						</div>
						<div class="text-xs text-gray-600 tracking-wide mt-4">
							{{ stock }} in stock
						</div>
						<div
							class="text-xl leading-tight mt-1 tracking-wide hover:text-primary-dark"
						>
							{{ colorCartridge }} {{ productCode }} {{ productName }}
							{{ stapleSize }}, {{ description }}
						</div>
						<div class="flex justify-between items-center mt-4">
							<div class="text-sm text-gray-700 tracking-wider">
								${{ unitCost }}
							</div>
							<button
								class="inline-flex justify-center items-center rounded h-9 px-2 hover:bg-primary-light focus:outline-none"
								@click="quickView(id)"
							>
								<span
									class="text-sm text-primary-dark uppercase font-medium tracking-wider"
								>
									Quick view
								</span>
							</button>
						</div>
					</g-link>
				</app-hover>
			</div>
		</div>
		<app-modal #default="{ close }" ref="modal">
			<div class="min-h-85 flex flex-col sm:flex-row">
				<div
					class="min-h-85 bg-surface relative flex items-center justify-center sm:w-1/2"
				>
					<img
						:src="product.images[0].url"
						width="220"
						:alt="`${product.productCode} ${product.productName}`"
					/>
					<button
						class="w-12 h-12 flex justify-center items-center absolute top-0 right-0 sm:right-auto sm:left-0 focus:outline-none"
						@click="close"
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
					<div
						class="absolute bottom-0 right-0 font-medium uppercase text-xl text-gray-400 mr-4 mb-4 leading-none"
					>
						{{ product.productCode }}
					</div>
				</div>
				<div class="p-4 sm:w-1/2">
					<div class="text-xs text-gray-600 tracking-wide">
						{{ product.stock }} in stock
					</div>
					<g-link
						class="text-xl leading-tight mt-1 tracking-wide hover:text-primary-dark inline-block"
					>
						{{ product.colorCartridge }} {{ product.productCode }}
						{{ product.productName }} {{ product.stapleSize }},
						{{ product.description }}
					</g-link>
					<div class="text-sm text-gray-700 tracking-wider mt-4">
						${{ product.unitCost }}
					</div>
					<ul class="mt-6">
						<li class="flex justify-between border-b border-black pb-1">
							<div class="uppercase text-xs tracking-wider font-medium">
								Product code
							</div>
							<div
								class="uppercase text-xs tracking-wider font-medium text-gray-600"
							>
								{{ product.productCode }}
							</div>
						</li>
						<li class="flex justify-between border-black pb-1 mt-3 border-b">
							<div class="uppercase text-xs tracking-wider font-medium">
								Expires
							</div>
							<div
								class="uppercase text-xs tracking-wider font-medium text-gray-600"
							>
								{{ product.expires }}
							</div>
						</li>
						<li class="flex justify-between border-black pb-1 mt-3 border-b">
							<div class="uppercase text-xs tracking-wider font-medium">
								Tissue thickness
							</div>
							<div
								class="uppercase text-xs tracking-wider font-medium text-gray-600"
							>
								{{ product.tissueThickness }}
							</div>
						</li>
					</ul>
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
			</div>
		</app-modal>
	</section>
</template>

<script>
	import AppHover from "./AppHover";
	import AppModal from "./AppModal";

	export default {
		name: "PopularProducts",
		data() {
			return {
				product: {}
			};
		},
		components: {
			AppHover,
			AppModal
		},
		methods: {
			quickView(id) {
				const product = this.$page.allProduct.edges.filter(
					product => product.node.id === id
				);
				this.product = { ...product[0].node };
				this.$refs.modal.open();
			}
		}
	};
</script>

<style>
	.slide-enter,
	.slide-leave-to {
		transform: translateX(-100%);
	}
	.slide-enter-active {
		transition: all 0.2s ease;
	}
	.slide-leave-active {
		transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
	}
</style>