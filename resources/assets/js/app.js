import Vue from 'vue'
import App from './App.vue'
import ApiService from './common/apiService'
import axios from 'axios'


ApiService.init();
Vue.config.productionTip = false;

// Styles
require('../sass/app.scss');



/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
