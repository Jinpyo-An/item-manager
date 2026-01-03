<template>
	<div class="header">
		<div class="header-left">
			<img src="../../assets/logo.jpg" alt="logo" class="logo" />
			<span class="title">Item Manager</span>
		</div>

		<button class="logout" @click="handleLogout">
			<font-awesome-icon :icon="['fas', 'right-from-bracket']" class="icon" />
			로그아웃
		</button>
	</div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore.js';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function handleLogout() {
	// 사용자에게 로그아웃 여부 확인
	const confirmLogout = confirm('로그아웃 하시겠습니까?');

	if (confirmLogout) {
		// 사용자가 확인을 클릭하면 로그아웃 처리
		authStore.clearTokens();
		alert('로그아웃 되었습니다.');

		// 로그인 페이지로 리다이렉트
		router.push('/signin');
	} else {
		// 사용자가 취소를 클릭하면 로그아웃 취소
		console.log('로그아웃 취소');
	}
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px 5px;
	margin: 10px;
}

.header-left {
	display: flex;
	align-items: center;
}

.logo {
	width: 40px;
	height: 40px;
}

.title {
	font-size: 1.2rem;
	font-weight: 500;
	margin-left: 10px;
	margin-right: 10px;
	font-family: Lexend, serif;
}

.logout {
	background-color: transparent;
	border: 1px solid #5269cdff;
	padding: 7px 10px;
	margin-top: 10px;
	font-size: 0.7rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 20px;
	font-weight: 400;
	color: #5269cdff;
	opacity: 1;
	border-radius: 16px;
}

.logout .icon {
	margin-right: 5px;
}
</style>
