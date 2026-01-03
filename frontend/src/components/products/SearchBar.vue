<template>
	<div class="search-container">
		<label for="search" class="search-label">더 알아볼까요?</label>
		<div class="search-input-wrapper">
			<font-awesome-icon
				:icon="['fas', 'magnifying-glass']"
				class="search-icon"
			/>
			<input
				type="text"
				id="search"
				class="search-input"
				placeholder="검색할 전자 제품을 입력하세요."
				v-model="searchQuery"
				@input="emitSearch"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['search']);
const searchQuery = ref('');

const emitSearch = () => emit('search', searchQuery.value);
</script>

<style scoped>
.search-container {
	margin: 10px;
	display: flex;
	flex-direction: column;
}

.search-label {
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 10px;
}

.search-input-wrapper {
	display: flex;
	align-items: center;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 10px;
}

.search-icon {
	margin-right: 10px;
	color: #666;
	font-size: 1.2rem;
}

.search-input {
	border: none;
	outline: none;
	flex-grow: 1;
	font-size: 1rem;
}

.search-input::placeholder {
	color: #999;
}
</style>
