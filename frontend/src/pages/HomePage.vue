<template>
	<div class="home-page">
		<Header />

		<div class="content">
			<!-- user-products section -->
			<section class="user-products-section">
				<div class="date-info">
					<i class="calender-icon">
						<font-awesome-icon :icon="['fas', 'calendar-days']" />
					</i>
					<span class="date">{{ currentDate }}</span>
				</div>
				<div class="section-header">
					<h2>나의 전자 제품</h2>
					<button class="view-more-button" @click="navigateTo('user-products')">
						View more
						<i class="view-more-icon">
							<font-awesome-icon :icon="['fas', 'greater-than']" />
						</i>
					</button>
				</div>

				<div class="scroll-container">
					<ProductCard
						v-for="device in userProducts.slice(0, 2)"
						:key="device.id"
						:device="device"
					/>
				</div>
			</section>

			<!-- products section -->
			<section class="product-section">
				<div class="section-header">
					<h2>더 알아볼까요?</h2>
					<button class="view-more-button" @click="navigateTo('products')">
						View more
						<i class="view-more-icon">
							<font-awesome-icon :icon="['fas', 'greater-than']" />
						</i>
					</button>
				</div>
				<ProductList
					class="product-list"
					:products="products.slice(0, 3)"
					@openModal="openModal"
				/>
			</section>
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/common/Header.vue';
import ProductCard from '@/components/user-products/UserProductList.vue';
import ProductList from '@/components/products/ProductList.vue';
import UsageModal from '@/components/products/UsageModal.vue';
import FooterNavigation from '@/components/common/FooterNavigation.vue';
import { getUserProducts } from '@/api/userProducts';
import { getProducts } from '@/api/products';
import { useAuthStore } from '@/stores/authStore';

const userProducts = ref([]);
const products = ref([]);
const selectedProduct = ref(null);
const currentDate = ref('');

const authStore = useAuthStore();
const router = useRouter();

function formatDate(date) {
	const options = { weekday: 'short', day: 'numeric', month: 'short' };
	return date.toLocaleDateString('en-US', options).toUpperCase();
}

function setViewportHeight() {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 페이지 이동 함수
function navigateTo(page) {
	router.push(`/${page}`);
}

// 모달 열기
function openModal(device) {
	selectedProduct.value = device;
}

// 모달 닫기
function closeModal() {
	selectedProduct.value = null;
}

onMounted(async () => {
	authStore.loadTokens();

	if (!authStore.isAuthenticated) {
		alert('로그인이 필요합니다.');
		await router.push('/signin');
		return;
	}

	try {
		const accessToken = authStore.accessToken;
		userProducts.value = await getUserProducts(accessToken);
		products.value = await getProducts(accessToken);
	} catch (error) {
		if (error.response && error.response.status === 401) {
			// 토큰 만료 시 처리
			authStore.clearTokens();
			alert('토큰이 만료되었습니다. 다시 로그인 해주세요.');
			await router.push('/signin');
		} else {
			console.error('Error fetching data:', error.message);
			alert('데이터를 가져오는 중 오류가 발생했습니다.');
		}
	}

	// 날짜 설정
	currentDate.value = formatDate(new Date());

	// 뷰포트 설정 및 이벤트 추가
	setViewportHeight();
	window.addEventListener('resize', setViewportHeight);
});

// 이벤트 제거
onBeforeUnmount(() => {
	window.removeEventListener('resize', setViewportHeight);
});
</script>

<style scoped>
.home-page {
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
	overflow-y: hidden;
}

.user-products-section {
	padding: 5px;
	margin-bottom: 10px;
}

.product-section {
	padding: 5px;
}

.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;
}

.scroll-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	margin-left: 15px;
	margin-right: 15px;
}

.view-more-button {
	background: none;
	border: none;
	color: #5269cd;
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	margin-left: 5px;
}

button:hover {
	background-color: #3b4c99;
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

.product-list {
	margin: 0 15px 53px;
}

.date-info {
	display: flex;
	align-items: center;
	font-size: 0.8rem;
	font-family: Manrope, serif;
	color: #666;
	margin-left: 10px;
}

.calender-icon {
	font-size: 1.2rem;
	margin-right: 8px;
}

.view-more-icon {
	margin-left: 5px;
	font-size: 7px;
}

h2 {
	margin-top: 13px;
	margin-bottom: 13px;
}
</style>
