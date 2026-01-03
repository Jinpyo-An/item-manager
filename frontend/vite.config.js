import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	base: '/item-manager', // 서버 기본 URL 경로
	server: {
		port: 5002, // 포트 번호
		host: '192.168.30.61', // 호스트 주소
		hmr: {
			clientPort: 5002,
			overlay: false,
		},
	},
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				nested: resolve(__dirname, 'index.html'),
			},
		},
	},
});
