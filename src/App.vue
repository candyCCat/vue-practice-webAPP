<template>
    <div class="app-container">
        <!-- 顶部固定定位 -->
        <mt-header fixed title="固定在顶部">
            <div slot="left" v-show="flag">
                <mt-button icon="back" @click="back">返回</mt-button>
            </div>
        </mt-header>

        <!-- 路由 -->
        <transition>
                <router-view></router-view>
        </transition>


        <!-- 底部 tabbar-->
        <nav class="mui-bar mui-bar-tab" style="z-index:99">
            <router-link class="mui-tab-item1" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/user">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">5</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item1" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        data(){
            return{
            flag:false
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        },
        watch:{
            $route:function(newVal,oldVal){
                if(newVal.path=="/home"){
                    this.flag=false
                }
                else{
                    this.flag=true;
                }
            }
        },
        created(){
            this.$route.path=="/home"?this.flag=false:this.flag=true
        }
    }
</script>
<style scoped>
    .mint-header{
        z-index: 99;
    }
    .app-container {
        padding-top: 40px; 
        padding-bottom: 50px;
        overflow-x: hidden; 
        /* overflow: hidden; */
    }
    .v-enter{
        opacity: 0;
        transform: translateX(100%)
    }
    .v-leave-to{
        opacity: 0;
        transform: translateX(-100%); 
        position: absolute
    }
    .v-enter-active,.v-leave-active{
        transition: all 1s ease;
    }
    .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}

</style>