import { createRouter, createWebHistory } from 'vue-router';
import SignInPage from '@/pages/SignIn.vue';
import SignUpPage from '@/pages/SignUpPage.vue';
import UserProductsPage from '@/pages/UserProductsPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';
import HomePage from '@/pages/HomePage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage,
		},
		{
			path: '/user-products',
			name: 'UserProducts',
			component: UserProductsPage,
		},
		{
			path: '/signin',
			name: 'SignIn',
			component: SignInPage,
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUpPage,
		},
		{
			path: '/products',
			name: 'Products',
			component: ProductsPage,
		},
	],
});

export default router;
