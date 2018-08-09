import Vue from 'vue'
import app from './App.vue'

//1、启用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//导入router.js路由模块
import router from './router'

//2、按需导入mintui中的组件
// import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// //轮播图
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//3、导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource);
import moment from 'moment'
//定义处理时间的全局过滤器
Vue.filter('dataFormat',(dataStr,pattern='YYYY-MM-DD HH:MM:SS')=>{
    return moment(dataStr).format(pattern);
})

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
})