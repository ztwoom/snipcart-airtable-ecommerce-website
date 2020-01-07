<template>
	<label
		class="flex items-center h-12 cursor-pointer px-4 hover:bg-surface"
		v-bind="$attrs"
	>
		<slot />
		<span
			class="uppercase tracking-wider text-sm font-medium"
			:class="[isChecked ? 'text-primary-dark' : 'text-gray-600']"
		>
			{{ label }}
		</span>
		<span
			class="w-10 h-10 flex items-center justify-center relative cursor-pointer rounded-full ml-auto z-40"
			:class="[isChecked ? 'hover:bg-primary-light' : 'hover:bg-gray-300']"
		>
			<svg
				v-if="isChecked"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 fill-current text-primary-dark"
			>
				<path fill="none" d="M0 0h24v24H0V0z" />
				<path
					d="M21 3H3v18h18V3zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
				/>
			</svg>
			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 fill-current text-gray-500"
			>
				<path fill="none" d="M0 0h24v24H0V0z" />
				<path d="M19 5v14H5V5h14m2-2H3v18h18V3z" />
			</svg>
			<input
				type="checkbox"
				class="absolute invisible"
				:id="id"
				:value="value"
				@change="updateInput"
			/>
		</span>
	</label>
</template>

<script>
	export default {
		name: "AppFiltersCheckbox",
		props: {
			value: {
				type: String,
				required: true
			},
			mv: {
				type: Array,
				required: true
			},
			id: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				isChecked: false
			};
		},
		model: {
			prop: "mv",
			event: "change"
		},
		methods: {
			updateInput(evt) {
				let newValue = [...this.mv];
				let value = evt.target.value;
				let isChecked = evt.target.checked;
				this.isChecked = isChecked;

				isChecked
					? newValue.push(value)
					: newValue.splice(newValue.indexOf(value), 1);

				this.$emit("change", newValue);
			}
		}
	};
</script>