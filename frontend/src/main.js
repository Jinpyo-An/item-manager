import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faPen,
	faRightFromBracket,
	faCalendarDays,
	faHouse,
	faUser,
	faShareNodes,
	faMagnifyingGlass,
	faGreaterThan,
} from '@fortawesome/free-solid-svg-icons'; // 필요한 아이콘 import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
	faRightFromBracket,
	faPen,
	faCalendarDays,
	faHouse,
	faUser,
	faShareNodes,
	faMagnifyingGlass,
	faGreaterThan,
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
