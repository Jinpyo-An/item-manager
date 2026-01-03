<template>
	<div class="usage-page">
		<Header />
		<div class="content">
			<SearchBar @search="handleSearch" />
			<ProductList :products="filteredProducts" @openModal="openModal" />
		</div>

		<UsageModal
			v-if="selectedProduct"
			:product="selectedProduct"
			@close="closeModal"
		/>

		<FooterNavigation />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/common/Header.vue';
import FooterNavigation from '@/components/common/FooterNavigation.vue';
import SearchBar from '@/components/products/SearchBar.vue';
import ProductList from '@/components/products/ProductList.vue';
import UsageModal from '@/components/products/UsageModal.vue';
import { getProducts } from '@/api/products';
import { useAuthStore } from '@/stores/authStore';

const products = ref([]);
const filteredProducts = ref([]);
const selectedProduct = ref(null);

const authStore = useAuthStore();
const router = useRouter();

// 페이지가 로드될 때 실행
onMounted(async () => {
	authStore.loadTokens();

	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		await router.push('/signin');
		return;
	}

	try {
		const accessToken = authStore.accessToken;
		const data = await getProducts(accessToken);
		products.value = data;
		filteredProducts.value = data;
	} catch (error) {
		if (error.response && error.response.status === 401) {
			// 토큰 만료 시 처리
			authStore.clearTokens();
			alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
			await router.push('/signin');
		} else {
			console.error('Error fetching data:', error.message);
			alert('전자제품 정보를 가져오는 중 오류가 발생했습니다.');
		}
	}

	setViewportHeight();
	window.addEventListener('resize', setViewportHeight);
});

// 검색어 입력 시 필터링
function handleSearch(term) {
	filteredProducts.value = products.value.filter(device =>
		device.category.toLowerCase().includes(term.toLowerCase()),
	);
}

// 모달 열기
function openModal(device) {
	selectedProduct.value = device;
}

// 모달 닫기
function closeModal() {
	selectedProduct.value = null;
}

// 뷰포트 높이 설정
function setViewportHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style scoped>
.usage-page {
	padding: 0;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	max-width: 390px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

.content {
	flex-grow: 1;
	padding: 10px;
	overflow-y: auto;
}

footer-navigation {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: white;
	z-index: 1000;
	height: 60px;
	align-items: center;
	max-width: 390px;
	width: 100%;
}
</style>
