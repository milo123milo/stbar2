import { createApp } from 'vue'
import Vue from 'vue'


import App from './App.vue'
import router from './router'
import { i18n } from "vue-lang-router";
import VueLazyLoad from 'vue3-lazyload'


// importing AOS css style globally



createApp(App).use(router, VueLazyLoad).use(i18n).mount('#app')
