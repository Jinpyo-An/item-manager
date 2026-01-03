import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		accessToken: null, // Access Token 저장
		refreshToken: null, // Refresh Token 저장
		isAuthenticated: false, // 로그인 상태를 저장
	}),
	actions: {
		// 로그인 시 토큰 저장
		setTokens(accessToken, refreshToken) {
			this.accessToken = accessToken;
			this.refreshToken = refreshToken;
			this.isAuthenticated = true;

			// localStorage에 토큰 저장
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
		},

		// 로그아웃 시 토큰 삭제
		clearTokens() {
			this.accessToken = null;
			this.refreshToken = null;
			this.isAuthenticated = false;

			// localStorage에서 토큰 삭제
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
		},

		// localStorage에서 토큰을 불러와 상태에 저장
		loadTokens() {
			const accessToken = localStorage.getItem('accessToken');
			const refreshToken = localStorage.getItem('refreshToken');

			if (accessToken && refreshToken) {
				this.accessToken = accessToken;
				this.refreshToken = refreshToken;
				this.isAuthenticated = true;
			} else {
				this.clearTokens(); // 토큰이 없으면 상태를 초기화
			}
		},
	},
});
