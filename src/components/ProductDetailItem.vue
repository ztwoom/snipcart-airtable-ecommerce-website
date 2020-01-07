<template>
	<li
		class="flex justify-between items-end border-b border-gray-300 pb-1 h-8 hover:bg-surface px-2"
	>
		<div class="uppercase text-xs tracking-wider font-medium">
			<slot name="key" />
		</div>
		<div class="uppercase text-xs tracking-wider font-medium text-gray-600">
			<slot name="value" />
		</div>
	</li>
</template>