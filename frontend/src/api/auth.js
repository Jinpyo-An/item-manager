import apiClient from './apiClient';

// 로그인 요청 함수
export async function login(email, password) {
	try {
		// email과 password를 base64로 인코딩
		const credentials = btoa(`${email}:${password}`);

		// API 로그인 요청
		const response = await apiClient.post(
			'api/auth/signin',
			{},
			{
				headers: {
					Authorization: `Basic ${credentials}`,
				},
			},
		);

		// 로그인 성공 시 반환된 accessToken, refreshToken 반환
		return response.data;
	} catch (error) {
		if (error.response && error.response.status === 400) {
			throw new Error('로그인에 실패하였습니다. 존재하지 않은 회원입니다.');
		} else {
			throw new Error('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
		}
	}
}
