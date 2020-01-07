<template>
	<section class="border-b border-black">
		<div
			class="flex justify-between items-center h-16 cursor-pointer select-none px-4"
			:class="[isOpen ? 'hover:bg-primary-light' : 'hover:bg-surface']"
			@click="isOpen = !isOpen"
		>
			<div class="text-sm uppercase tracking-wider" :class="accordionIsOpen">
				<slot name="header" />
			</div>
			<span class="flex justify-center items-center w-12 h-12 -mr-1">
				<svg
					v-if="isOpen"
					xmlns="http://www.w3.org/2000/svg"
					class="w-6 h-6 fill-current"
					:class="accordionIsOpen"
				>
					<path d="M19 13H5v-2h14v2z" />
				</svg>
				<svg
					v-else
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-6 h-6 fill-current"
				>
					<path fill="none" d="M0 0h24v24H0V0z" />
					<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
				</svg>
			</span>
		</div>
		<div class="overflow-hidden transition" :style="accordionBody" ref="body">
			<div class="pb-2">
				<slot name="body" />
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "AppAccordion",
		data() {
			return {
				isOpen: false
			};
		},
		computed: {
			accordionBody() {
				return {
					"max-height": !this.isOpen ? 0 : `${this.$refs.body.scrollHeight}px`
				};
			},
			accordionIsOpen() {
				return [this.isOpen ? "text-primary-dark" : ""];
			}
		}
	};
</script>

<style>
	.transition {
		transition: all ease 0.3s;
	}
</style>