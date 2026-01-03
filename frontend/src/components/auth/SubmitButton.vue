<template>
	<div class="submit-container">
		<button class="submit-button">
			{{ buttonText }}
		</button>
	</div>
</template>

<script setup>
defineProps({
	buttonText: {
		type: String,
		default: 'Continue',
	},
});
</script>

<style scoped>
.submit-container {
	margin-right: 30px;
	margin-left: 30px;
}
.submit-button {
	width: 100%;
	padding: 14px;
	font-size: 16px;
	cursor: pointer;
	margin-top: 20px;
	color: #ffffffff;
	background: #5269cdff;
	opacity: 1;
	border: none;
	border-radius: 12px;
}
</style>
