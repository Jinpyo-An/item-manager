<template>
	<div class="main-title-section">
		<div class="left-section">
			<div class="date-info">
				<i class="calender-icon">
					<font-awesome-icon :icon="['fas', 'calendar-days']" />
				</i>
				<span class="date">{{ currentDate }}</span>
			</div>
			<h1>나의 전자 제품</h1>
		</div>
		<!-- 등록하기 버튼 -->
		<button class="register-btn" @click="$emit('register')">
			<font-awesome-icon :icon="['fas', 'pen']" class="icon" /> 등록하기
		</button>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 현재 날짜를 저장할 변수
const currentDate = ref('');

// 현재 날짜 포맷팅 함수
function formatDate(date) {
	const options = { weekday: 'short', day: 'numeric', month: 'short' };
	return date.toLocaleDateString('en-US', options).toUpperCase(); // 예시: "FRI, SEP 13"
}

onMounted(() => {
	const now = new Date();
	currentDate.value = formatDate(now);
});
</script>

<style scoped>
.main-title-section {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 5px;
	margin: 10px;
}

.left-section {
	display: flex;
	flex-direction: column;
}

.date-info {
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	font-family: Manrope, serif;
	color: #666;
	margin-bottom: 10px;
}

.calender-icon {
	font-size: 1.2rem;
	margin-right: 8px;
}

h1 {
	font-size: 1.7rem;
	font-weight: bold;
	margin: 0;
}

.register-btn {
	background-color: transparent;
	border: 1px solid #5269cdff;
	padding: 7px 10px;
	margin-top: 25px;
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
	transition: background-color 0.3s ease;
}

.register-btn:hover {
	background-color: #f0f0f0;
}

.register-btn .icon {
	margin-right: 6px;
}
</style>
