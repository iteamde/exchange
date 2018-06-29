import Vue from 'vue'
import App from './main.vue'
import {Test} from './components/ExampleComponent.vue'

Vue.config.productionTip = false;

// Styles
require('../sass/app.scss');

// Global Components
Vue.component('test', Test);

/* eslint-disable no-new */
new Vue({
        el: '#app'
})
