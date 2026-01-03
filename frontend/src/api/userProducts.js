import apiClient from './apiClient';

// 사용자 전자제품 정보 요청 API 함수
export async function getUserProducts(accessToken) {
	try {
		const response = await apiClient.get('api/user-products', {
			headers: {
				Authorization: `Bearer ${accessToken}`, // 인증 토큰
			},
		});

		return response.data.userProductList; // 사용자 전자제품 정보 목록 반환
	} catch (error) {
		console.error('Error fetching user products:', error);
		throw new Error('전자제품 목록을 가져오는 중 오류가 발생했습니다.');
	}
}

// 사용자 가전제품 등록 API 함수
export async function registerUserProduct(accessToken, productData) {
	try {
		const formData = new FormData();
		formData.append('category', productData.category);
		formData.append('userProductNickname', productData.userProductNickname);
		formData.append('usageStartDate', productData.usageStartDate);
		formData.append('image', productData.image);

		const response = await apiClient.post('api/user-products', formData, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'multipart/form-data',
			},
		});

		return response.data;
	} catch (error) {
		console.error('Error registering user product:', error);
		throw new Error('가전제품 등록 중 오류가 발생했습니다.');
	}
}
