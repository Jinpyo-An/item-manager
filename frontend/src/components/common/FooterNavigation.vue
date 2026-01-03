<template>
	<nav class="footer-navigation">
		<!-- Home 버튼 -->
		<button @click="goTo('')" class="nav-item">
			<img
				src="@/assets/footer-navigation-icons/home.png"
				alt="Home"
				class="nav-icon"
			/>
			<span>Home</span>
		</button>

		<!-- 내 제품 버튼 -->
		<button @click="goTo('user-products')" class="nav-item">
			<img
				src="@/assets/footer-navigation-icons/user.png"
				alt="나의 전자제품"
				class="nav-icon"
			/>
			<span>나의 전자제품</span>
		</button>

		<!-- 사용법 버튼 -->
		<button @click="goTo('products')" class="nav-item">
			<img
				src="@/assets/footer-navigation-icons/product.png"
				alt="사용법"
				class="nav-icon"
			/>
			<span>사용법</span>
		</button>
	</nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function goTo(page) {
	router.push(`/${page}`);
}
</script>

<style scoped>
.footer-navigation {
	display: flex;
	justify-content: space-around;
	padding: 8px;
	border-radius: 16px 16px 0 0;
	box-shadow: 0 -5px 5px -5px #333;
}

.nav-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 10px;
	line-height: 16px;
	font-weight: 400;
}

.nav-icon {
	width: 20px;
	height: 20px;
}
</style>
