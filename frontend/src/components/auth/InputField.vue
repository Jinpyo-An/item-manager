<template>
	<div class="input-wrapper">
		<label v-if="label" class="input-label">{{ label }}</label>
		<div class="input-field">
			<input
				:type="type"
				:placeholder="placeholder"
				:value="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
		</div>
	</div>
</template>

<script setup>
defineProps({
	type: String,
	placeholder: String,
	label: String,
	modelValue: String,
});
</script>

<style scoped>
.input-wrapper {
	margin-top: 10px;
	margin-right: 30px;
	margin-left: 30px;
}

.input-label {
	display: block;
	font-weight: bold;
	margin-bottom: 5px;
}

.input-field {
	display: flex;
	align-items: center;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
}

.input-field i {
	margin-right: 10px;
}

.input-field input {
	border: none;
	outline: none;
	width: 100%;
}
</style>
