<template>
	<div class="signup-page">
		<LogoHeader />
		<AuthTabs />
		<InputField
			type="text"
			placeholder="이름을 입력해주세요."
			icon="fas fa-user"
			label="Name"
		/>
		<InputField
			type="email"
			placeholder="이메일을 입력해주세요."
			icon="fas fa-envelope"
			label="Email"
		/>
		<InputField
			type="password"
			placeholder="비밀번호를 입력해주세요."
			icon="fas fa-lock"
			label="Password"
		/>
		<SubmitButton buttonText="회원가입 하기" />
	</div>
</template>

<script setup>
import LogoHeader from '@/components/auth/LogoHeader.vue';
import AuthTabs from '@/components/auth/AuthTabs.vue';
import InputField from '@/components/auth/InputField.vue';
import SubmitButton from '@/components/auth/SubmitButton.vue';
</script>

<style scoped>
.signup-page {
	margin-left: 0;
	margin-right: 0;
	padding-left: 0;
	padding-right: 0;
	max-width: 400px;
}
</style>
