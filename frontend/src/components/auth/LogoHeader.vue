<template>
	<div class="logo-header">
		<img src="../../assets/logo.jpg" alt="Logo" class="logo" />
		<h1>Item Manager</h1>
		<p>전자 제품 관리는 Item Manager와 함께!</p>
	</div>
</template>

<script setup></script>

<style scoped>
.logo-header {
	text-align: center;
	margin-top: 20px;
}
.logo {
	top: 0;
	left: 80px;
	width: 60px;
	height: 58px;
	border-radius: 0;
	margin-top: 10px;
}
h1 {
	font-family: Lexend, serif; /* Heading */
	font-size: 30px;
	line-height: 48px;
	font-weight: 700;
	color: #171a1fff;
	margin: 10px;
}
p {
	font-size: 14px;
	line-height: 22px;
	font-weight: 400;
	color: #9095a1ff;
}
</style>
