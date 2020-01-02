<template>
	<header class="flex items-center h-16 px-4 sticky top-0 bg-white z-40 shadow">
		<g-link to="/">
			<h1 class="uppercase tracking-widest text-primary-dark">
				Bariatric Reloads
			</h1>
		</g-link>
		<g-link to="/products" class="ml-10 hidden sm:inline">
			<span
				class="uppercase text-gray-500 hover:text-primary-dark tracking-wider text-xs font-semibold block w-full h-full"
				>Product catalog</span
			>
		</g-link>
		<g-link class="ml-auto mr-2">
			<span
				class="w-12 h-12 block flex justify-center items-center relative rounded-full hover:bg-surface"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-6 h-6 text-gray-500 fill-current"
					aria-label="Go to cart"
				>
					<path fill="none" d="M0 0h24v24H0V0z" />
					<path
						d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm0-3l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59L3.62 17H19v-2H7z"
					/>
				</svg>
				<span
					class="absolute h-6 block rounded-full bg-secondary-dark text-white text-sm font-medium min-w-6 px-1 flex items-center justify-center -right-2 -top-1 border-2 border-white"
				>
					9</span
				>
			</span>
		</g-link>
	</header>
</template>
