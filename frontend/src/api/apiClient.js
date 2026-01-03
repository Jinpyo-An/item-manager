import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://capstone-api.wisoft.io/item-manager`, // 배포용 url로 변경
	headers: {
		'Content-Type': 'application/json',
	},
});

export default apiClient;
