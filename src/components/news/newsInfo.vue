<template>
    <div class="news-container">
        <div class="header">
            <div class="title">
                {{newsInfo.title}}
            </div>
            <div class="data-click">
                <span>日期：{{newsInfo.data|dataFormat}}</span>
                <span>点击：{{newsInfo.click}}</span>
            </div>
        </div>
        <div class="content">
            {{newsInfo.news}}
        </div>
    <comment></comment>
    </div>
        

</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            newsInfo: {
                add_time:new Date(),
                click:1,
                title:"幸福",
                news:"能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"
                },
            id:this.$route.parans
        }
    },
    components:{
        'comment':comment
    }
}
</script>

<style lang='less' scoped>
.news-container{
    font-size: 16px;
    margin: 10px 3px 0 3px ;
    .title{
        margin:0 auto;
        color: red;
        font-size:18px;
        text-align: center;
    }
    .data-click{
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
    }
    .content{
        text-indent: 2em;
        margin-bottom: 20px;
    }
}
</style>
