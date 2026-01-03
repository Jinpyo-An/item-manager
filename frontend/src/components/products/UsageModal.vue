<template>
	<div class="modal" @click.self="$emit('close')">
		<div class="modal-content">
			<div class="modal-header">
				<div class="product-info">
					<h3>{{ product.category }}</h3>
					<p>
						<strong>권장 사용 기간:</strong>
						{{ product.recommend_usage_duration }}년
					</p>
				</div>
				<img
					:src="getIconForCategory(product.category)"
					alt="device icon"
					class="device-icon"
				/>
			</div>
			<p><strong>올바른 사용법</strong></p>
			<p class="correct-usage">{{ product.correct_usage }}</p>
		</div>
	</div>
</template>

<script setup>
import refrigeratorIcon from '@/assets/product-icons/refrigerator.png';
import washingMachineIcon from '@/assets/product-icons/washing-machine.png';
import vacuumCleanerIcon from '@/assets/product-icons/cleaner.png';
import smartPhoneIcon from '@/assets/product-icons/smartphone.png';
import ironIcon from '@/assets/product-icons/iron.png';
import defaultDeviceIcon from '@/assets/product-icons/default.png';
import televisionIcon from '@/assets/product-icons/television.png';
import dishwasherIcon from '@/assets/product-icons/dishwasher.png';
import computerIcon from '@/assets/product-icons/computer.png';
import chargerIcon from '@/assets/product-icons/charger.png';

const props = defineProps({
	product: Object,
});

// 제품 카테고리에 따른 아이콘 반환 함수
const getIconForCategory = category => {
	const iconMap = {
		냉장고: refrigeratorIcon,
		세탁기: washingMachineIcon,
		청소기: vacuumCleanerIcon,
		휴대폰: smartPhoneIcon,
		다리미: ironIcon,
		TV: televisionIcon,
		식기세척기: dishwasherIcon,
		컴퓨터: computerIcon,
		충전기: chargerIcon,
	};
	return iconMap[category] || defaultDeviceIcon;
};
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
}

.modal-content {
	background-color: #fff;
	padding: 20px;
	border-radius: 16px;
	width: 90%;
	max-width: 400px;
	margin-left: 15px;
	margin-right: 15px;
}

.modal-header {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

.device-icon {
	width: 90px;
	height: 90px;
	margin-left: 70px;
}

.product-info {
	display: flex;
	flex-direction: column;
}

.correct-usage {
	font-size: 14px;
	line-height: 22px;
	color: #9095a1;
	margin-top: 10px;
}
</style>
