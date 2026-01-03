<template>
	<div class="remember-me">
		<label class="checkbox-label">
			<input type="checkbox" id="rememberMe" />
			<span>Remember me</span>
		</label>
		<a href="#" class="forgot-password">Forgot password?</a>
	</div>
</template>

<script setup></script>

<style scoped>
.remember-me {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
	margin-right: 30px;
	margin-left: 30px;
}

.checkbox-label {
	display: flex;
	align-items: center;
	gap: 5px;
}

.forgot-password {
	color: #4a90e2;
	font-size: 14px;
	text-decoration: none;
}
</style>
