<template>
	<div v-if="isOpen" class="modal" @click.self="closeModal">
		<div class="modal-content">
			<h2>제품 등록하기</h2>
			<form @submit.prevent="registerProduct">
				<!-- 카테고리 선택 -->
				<label for="category">카테고리</label>
				<select v-model="category" id="category" required>
					<option v-for="item in categories" :key="item" :value="item">
						{{ item }}
					</option>
				</select>

				<!-- 제품명 입력 -->
				<label for="userProductNickname">제품명</label>
				<input
					type="text"
					v-model="userProductNickname"
					id="userProductNickname"
					placeholder="제품명을 입력하세요"
					required
				/>

				<!-- 사용 시작 날짜 선택 -->
				<label for="usageStartDate">사용 시작 날짜</label>
				<input
					type="date"
					v-model="usageStartDate"
					id="usageStartDate"
					required
				/>

				<!-- 사진 업로드 -->
				<label for="image">사진 등록</label>
				<input type="file" @change="onFileChange" id="image" accept="image/*" />

				<!-- 등록 버튼 -->
				<button type="submit">등록하기</button>
			</form>
			<button @click="closeModal">취소</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { registerUserProduct } from '@/api/userProducts';
defineProps({
	isOpen: Boolean,
});
const emit = defineEmits(['close', 'registered']);
const category = ref('');
const userProductNickname = ref('');
const usageStartDate = ref('');
const image = ref(null);
const categories = [
	'냉장고',
	'세탁기',
	'청소기',
	'휴대폰',
	'다리미',
	'TV',
	'컴퓨터',
	'충전기',
	'식기세척기',
];
const authStore = useAuthStore();
function onFileChange(event) {
	image.value = event.target.files[0];
}
async function registerProduct() {
	try {
		const productData = {
			category: category.value,
			userProductNickname: userProductNickname.value,
			usageStartDate: usageStartDate.value,
			image: image.value,
		};
		const accessToken = authStore.accessToken;
		await registerUserProduct(accessToken, productData);
		// 등록 성공 시 모달 닫기 및 목록 갱신
		emit('registered');
		closeModal();
	} catch (error) {
		console.error('Error registering product:', error);
		alert('제품 등록 중 오류가 발생했습니다. 다시 시도해주세요.');
	}
}
function closeModal() {
	emit('close');
}
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal-content {
	background-color: #fff;
	padding: 20px;
	border-radius: 8px;
	width: 90%;
	max-width: 400px;
}
form {
	display: flex;
	flex-direction: column;
}
label {
	margin-top: 10px;
	font-weight: bold;
}
input,
select {
	margin-top: 5px;
	padding: 8px;
	font-size: 1rem;
}
button {
	margin-top: 15px;
	padding: 10px;
	font-size: 1rem;
	cursor: pointer;
	border: none;
	border-radius: 8px;
	transition: background-color 0.3s ease;
}
button[type='submit'] {
	background-color: #5269cd;
	color: white;
}
button[type='submit']:hover {
	background-color: #3b4c99;
}
button[type='button'] {
	background-color: #f0f0f0;
	color: #333;
}
button[type='button']:hover {
	background-color: #e0e0e0;
}
</style>
