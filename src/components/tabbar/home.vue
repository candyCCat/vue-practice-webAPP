<template>
    <div>
       <mt-swipe :auto="0">
            <mt-swipe-item v-for="item in lunbotuList" :key=item.id>
                <img :src="item.url">
            </mt-swipe-item>
            <img :src="lunbotuList[0].url" style="width:100%;z-index:1;">
       </mt-swipe>

        <div class="mui-content">
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		              <img src="../../images/menu1.png">
		              <div class="mui-media-body">新闻资讯</div></router-link></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoshare">
		              <img src="../../images/menu2.png">
		              <div class="mui-media-body">图片分享</div></router-link></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		              <img src="../../images/menu3.png">
		              <div class="mui-media-body">商品购买</div></router-link></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		              <img src="../../images/menu4.png">
		              <div class="mui-media-body">留言反馈</div></router-link></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		              <img src="../../images/menu5.png">
		              <div class="mui-media-body">视频专区</div></router-link></li>
		      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		              <img src="../../images/menu6.png">
		              <div class="mui-media-body">联系我们</div></router-link></li>
		    </ul> 
		</div>
    </div>
</template>

<script>
    import{Toast} from 'mint-ui';
    export default {
        data(){
        return{
            lunbotuList:[
                {id:1,url:require('../../images/lunbotu1.jpg')},
                {id:2,url:require('../../images/lunbotu2.jpg')},
                {id:3,url:require('../../images/lunbotu4.jpg')},
                // {id:1,url:'../../images/lunbotu1.jpg'},
                // {id:2,url:'../../images/lunbotu2.jpg'},
                // {id:3,url:'../../images/lunbotu4.jpg'},
            ]
        }
        },
        created(){
            //this.getLunbotu();
        },
        methods:{
            // getLunbotu(){
            //     this.$http.get("http://vue.studyit.io/api/getlunbo")
            //     .then(result=>{
            //         console.log(result.body)
            //     },error=>{
            //         console.log(error)
            //         Toast("获取轮播图数据失败")
            //     })
            // }
        }
    }
</script>

<style lang='less' scoped>
.mint-swipe{
    // height: 150px;
    .mint-swipe-item{
        // &:nth-child(1){
        //     background-color: pink;
        // }
        // &:nth-child(2){
        //     background-color: lightcoral;
        // }
        // &:nth-child(3){
        //     background-color: lightblue;
        // }
        img{
            width: 100%;
            // height: 100%;
            z-index: 2;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    .mui-table-view-cell{
    border: 0;
    img{
        width: 60px;
        height: 60px;
    }
    }
    .mui-media-body{
        font-size: 13px;
    }
}

</style>