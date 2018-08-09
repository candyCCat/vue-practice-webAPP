import VueRouter from 'vue-router';
import home from './components/tabbar/home.vue'
import user from './components/tabbar/user.vue'
import cart from './components/tabbar/cart.vue'
import search from './components/tabbar/search.vue'
import newslist from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photolist from './components/photos/photoList.vue'

var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/user',component:user},
        {path:'/cart',component:cart},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newslist},
        {path:'/home/newslist/:id',component:newsInfo},
        {path:'/home/photoshare',component:photolist}
    ],
    linkActiveClass:'mui-active'//默认的类是router-link-active
})
export default router