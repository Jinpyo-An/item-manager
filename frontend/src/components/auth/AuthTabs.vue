<template>
	<div class="auth-tabs">
		<span
			:class="{ active: currentTab === 'SignIn' }"
			@click="navigateTo('SignIn')"
			>Sign in</span
		>
		<span
			:class="{ active: currentTab === 'SignUp' }"
			@click="navigateTo('SignUp')"
			>Sign up</span
		>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const route = useRoute();
const currentTab = ref(route.name); // 초기 값 설정

function navigateTo(tab) {
	currentTab.value = tab;
	if (tab === 'SignIn') {
		router.push({ name: 'SignIn' });
	} else if (tab === 'SignUp') {
		router.push({ name: 'SignUp' });
	}
}

watch(route, newRoute => {
	currentTab.value = newRoute.name; // 라우트 변경 시 탭 갱신
});
</script>

<style scoped>
.auth-tabs {
	display: flex;
	justify-content: center;
	margin: 20px 0;
	box-shadow: 0 5px 5px -5px #333;
}

.auth-tabs span {
	cursor: pointer;
	padding: 10px 72px;
	font-size: 10px;
	color: #7d7d7d;
	transition:
		color 0.3s,
		border-bottom 0.3s;
}

.auth-tabs span:hover {
	color: #4a90e2;
}

.auth-tabs .active {
	color: #4a90e2;
	border-bottom: 2px solid #4a90e2;
}
</style>
