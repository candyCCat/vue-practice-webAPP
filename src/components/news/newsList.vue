<template>
<ul class="mui-table-view">
	<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key='item.id'>
		<router-link :to="'/home/newslist/'+item.id">
			<img class="mui-media-object mui-pull-left" :src="item.img_url">
			<div class="mui-media-body">
				<h3 style="font-size:14px">{{item.title}}</h3>
				<p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                <p class='date-and-click'>
                    <span>{{item.add_time|dataFormat}}</span>
                    <span>点击：{{item.click}}</span>
                </p>
			</div>
		</router-link>
	</li>
</ul>  
</template>

<script>
export default {
    data(){
        return {
            newsList:[
                {id:1,add_time:new Date(),click:1,img_url:require('../../images/shuijiao.jpg'),title:"幸福",zhaiyao:"能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？"},
                {id:2,add_time:new Date(),click:0,img_url:require('../../images/muwu.jpg'),title:"木屋",zhaiyao:"想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖."},
                {id:3,add_time:new Date(),click:11,img_url:require('../../images/cbd.jpg'),title:"CBD",zhaiyao:"烤炉模式的城，到黄昏，如同打翻的调色盘一般."},
            ]
        }
    }
}
</script>

<style lang='less' scoped>
.mui-media-body{
    .date-and-click{
        font-size: 12px;
        color:#26a2ff;
        display: flex;
        justify-content: space-between;
    }
    .mui-ellipsis{
        white-space:pre-line;
        // width: 500px;
    }
}
</style>
