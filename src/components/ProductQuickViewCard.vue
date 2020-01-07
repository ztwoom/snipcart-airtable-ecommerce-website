<template>
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
				@click="closeModal"
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
				:to="product.path"
				class="text-xl leading-tight mt-1 tracking-wide hover:text-primary-dark inline-block"
			>
				{{ product.productCode }} ({{ product.colorCartridge }})
				{{ product.productName }} {{ product.stapleSize }} x
				{{ product.openStapleHeight }}
			</g-link>
			<div class="text-sm text-gray-700 tracking-wider mt-4">
				${{ product.unitCost }}
			</div>
			<product-detail-list class="mt-6">
				<product-detail-item>
					<template #key>
						Product code
					</template>
					<template #value>
						{{ product.productCode }}
					</template>
				</product-detail-item>
				<product-detail-item>
					<template #key>
						Expires
					</template>
					<template #value>
						{{ product.expires }}
					</template>
				</product-detail-item>
				<product-detail-item>
					<template #key>
						Tissue thickness
					</template>
					<template #value>
						{{ product.tissueThickness }}
					</template>
				</product-detail-item>
			</product-detail-list>
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
					class="text-sm text-white uppercase font-medium tracking-wider leading-none"
				>
					Add to cart
				</span>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			product: {
				type: Object,
				required: true
			},
			closeModal: {
				type: Function,
				required: true
			}
		}
	};
</script>