import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import TabMenu from 'primevue/tabmenu';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'primevue/resources/themes/saga-blue/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'


const app = createApp(App);

app.use(PrimeVue);
app.component('InputText',InputText);
app.component('TabMenu',TabMenu);

app.mount('#app')