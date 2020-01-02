<template>
	<transition name="fade">
		<div
			class="fixed z-50 inset-0 bg-transparent-black flex items-center justify-center p-4"
			v-if="isShown"
			@click="close"
		>
			<div
				@click.stop=""
				class="max-w-85 sm:max-w-2xl shadow-2xl bg-white max-h-screen-90 overflow-y-auto"
			>
				<slot :close="close" />
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				isShown: false
			};
		},
		methods: {
			open() {
				this.isShown = true;
			},
			close() {
				this.isShown = false;
			}
		}
	};
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>