<template>
	<div class="login-page">
		<LogoHeader />
		<AuthTabs />
		<InputField
			v-model="email"
			type="email"
			placeholder="이메일을 입력해주세요."
			label="Email"
		/>
		<InputField
			v-model="password"
			type="password"
			placeholder="비밀번호를 입력해주세요."
			label="Password"
			@keyup.enter="handleLogin"
		/>
		<RememberMeCheckbox />
		<SubmitButton :loading="loading" @click="handleLogin" />
		<div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { login } from '@/api/auth'; // 분리된 login 함수 불러오기
import LogoHeader from '@/components/auth/LogoHeader.vue';
import AuthTabs from '@/components/auth/AuthTabs.vue';
import InputField from '@/components/auth/InputField.vue';
import RememberMeCheckbox from '@/components/auth/RememberMeCheckBox.vue';
import SubmitButton from '@/components/auth/SubmitButton.vue';
import { useAuthStore } from '@/stores/authStore';
import router from '@/router/index.js'; // Pinia 스토어 불러오기

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

const authStore = useAuthStore();

async function handleLogin() {
	errorMessage.value = ''; // 기존 에러 메시지 초기화
	loading.value = true;

	try {
		// 로그인 요청
		const data = await login(email.value, password.value);

		// 로그인 성공 시, 토큰을 Pinia 스토어에 저장
		if (data.accessToken && data.refreshToken) {
			authStore.setTokens(data.accessToken, data.refreshToken);
			alert('로그인에 성공하였습니다.');

			await router.push('/');
		}
	} catch (error) {
		errorMessage.value = error.message;
	} finally {
		loading.value = false;
	}
}
</script>

<style scoped>
.login-page {
	margin-left: 0;
	margin-right: 0;
	padding-left: 0;
	padding-right: 0;
	max-width: 400px;
}

.error-message {
	color: red;
	margin-top: 10px;
}
</style>
