<template>
	<div class="device-card" :style="{ backgroundColor: getRandomColor() }">
		<img
			:src="getImageUrl(device.imagePath)"
			alt="device image"
			class="device-image"
		/>
		<h3>{{ device.userProductNickname }}</h3>
		<p>권장기간: {{ device.recommendUsageDuration }}년</p>
		<p>사용기간: {{ formatDuration(device.periodUsed) }}</p>
		<p id="availablePeriod">
			{{ formatDuration(device.availablePeriod) }} 더 사용 가능
		</p>
	</div>
</template>

<script setup>
import apiClient from '@/api/apiClient';

// 전달받은 `device` prop 정의
defineProps({
	device: Object,
});
// 전달 받은 이미지 경로에 서버 주소 연결
function getImageUrl(imagePath) {
	return `${apiClient.defaults.baseURL}/${imagePath}`;
}

// 현재 시간 형식화 함수
function formatDuration(duration) {
	if (!duration) return '정보 없음';
	const match = duration.match(/(\d+)년\s*(\d+)개월/);
	if (!match) return '정보 없음';

	const [years, months] = match.slice(1, 3);

	let formatted = '';
	if (years > 0) formatted += `${years}년 `;
	if (months > 0) formatted += `${months}개월`;

	return formatted.trim();
}

// 랜덤으로 배경 색상을 반환하는 함수
function getRandomColor() {
	const colors = ['#7A8BD8FF', '#00E0A5FF', '#125D95FF', '#199878FF'];
	return colors[Math.floor(Math.random() * colors.length)];
}
</script>

<style scoped>
.device-card {
	padding: 10px;
	border-radius: 8px;
	color: white;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.device-image {
	width: 100%;
	height: 90px;
	object-fit: cover;
	border-radius: 8px;
	margin-bottom: 0;
}

h3 {
	margin-top: 4px;
	margin-bottom: 3px;
	font-size: 1rem;
}

p {
	margin: 4px 0;
	font-size: 0.875rem;
}

#availablePeriod {
	margin: 4px 0;
	font-weight: bold;
	color: #f0e68c;
}
</style>
