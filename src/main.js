import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import {IonicVue} from '@ionic/vue';

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';


const app = createApp(App)
    .use(IonicVue)
    .use(ElementPlus)
    .use(VueAxios, axios)
    .use(router);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

app.config.globalProperties.api_url = 'http://127.0.0.1:8000/api/';
app.config.globalProperties.back_url = 'http://127.0.0.1:8000';

router.isReady().then(() => {
    app.mount('#app');
});

