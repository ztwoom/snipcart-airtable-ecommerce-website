<template>
	<div @mouseover="hover = true" @mouseleave="hover = false">
		<slot :hover="hover" />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hover: false
			};
		}
	};
</script>