import { createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BarTimelineView from '../views/BarTimelineView.vue'
import translations from '../lang/translations'
import localizedURLs from '../lang/localized-urls'
import { createLangRouter } from 'vue-lang-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bartimeline',
    name: 'bartimeline',
    component: BarTimelineView
  },
  {
    path: '/bartimeline/:no',
    name: 'bartimelinepag',
    component: BarTimelineView
  },
  {
    path: '/lokacije/:id',
    name: 'lokacije',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LokacijeView.vue')
  },
   {
    path: '/article/:id',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
  },
  {
    path: '/news',
    name: 'news',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsMoreView.vue')
  },
  {
    path: '/curator',
    name: 'curator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CuratorView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/oldtown',
    name: 'oldtown',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OldTownView.vue')
  }
]; 



const langRouterOptions = {
	defaultLanguage: 'me',
	translations,
	localizedURLs,
}
const routerOptions = {
  history: createWebHistory(process.env.BASE_URL),
  routes
  
}
const router = createLangRouter(langRouterOptions, routerOptions)

export default router
