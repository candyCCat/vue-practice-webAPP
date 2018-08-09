<template>
<div class="comment-container">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" rows="4" placeholder="请输入评论" v-model='msg'></textarea>
    <mt-button type="primary" size="large" @click="pushCmt">发表评论</mt-button>
    <div class="content"  v-for="item in commentList" :key='item.id'>
        <div class='top'>
            {{item.id}}楼 用户：{{item.user}} 发表时间：{{item.date|dataFormat}}
        </div>
        <div class="inner">{{item.comment}}</div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadMore">加载更多……</mt-button>
</div>


</template>

<script>
import { Toast} from 'mint-ui';
export default {
data(){
    return{
        id:7,
        date:new Date(),
        commentList:[
            {id:1,user:"匿名",date:this.date,comment:233333},
            {id:2,user:"匿名",date:this.date,comment:233333},
            {id:3,user:"匿名",date:this.date,comment:233333},
            {id:4,user:"匿名",date:this.date,comment:233333},
            {id:5,user:"匿名",date:this.date,comment:233333},
            {id:6,user:"匿名",date:this.date,comment:233333}
        ],
        msg:''
    }
},
methods:{
    loadMore(){
        this.commentList= this.commentList.concat(
            [
            {id:this.id++,user:"匿名",date:this.date,comment:233333},
            {id:this.id++,user:"匿名",date:this.date,comment:233333},
            {id:this.id++,user:"匿名",date:this.date,comment:233333},
            {id:this.id++,user:"匿名",date:this.date,comment:233333},
            {id:this.id++,user:"匿名",date:this.date,comment:233333},
            {id:this.id++,user:"匿名",date:this.date,comment:233333}
        ]
        );
    },
    pushCmt(){
        if(this.msg==''){
            Toast('评论不能为空');
        }
        else{
        var data={id:this.id++,user:'我的',date:this.date,comment:this.msg}
        this.commentList.unshift(data);
        Toast({
            message: '评论成功',
            iconClass: 'icon icon-success'
        });
        }
    }
}
}
</script>

<style lang='less' scoped>
textarea{
    margin: 0;
}
.comment-container{
    .content{
        margin:5px 2px;
        .top{
            background-color: rgb(172, 165, 165);
            font-size: 13px;
        }
        .inner{
            text-indent: 2em;
        }
    }
}
</style>
