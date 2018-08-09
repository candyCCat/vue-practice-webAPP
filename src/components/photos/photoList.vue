<template>
  <div>
    <!-- 底部滑动条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
            推荐
          </a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
          <a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
                            科技
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表 -->
    <div>
      <ul>
        <li>
          <img v-lazy="img">
          <div class="info">
            <h1 class="info-title">
              城市的美丽
            </h1>
            <div class="info-body">
              城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽
            </div>
          </div>
        </li>
        <li>
          <img v-lazy="img">
                    <div class="info">
            <h1 class="info-title">
              城市的美丽
            </h1>
            <div class="info-body">
              城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽
            </div>
          </div>
        </li>
        <li>
          <img v-lazy="img">
                    <div class="info">
            <h1 class="info-title">
              城市的美丽
            </h1>
            <div class="info-body">
              城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽城市很美丽很了美丽
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.js'
  export default {
    data(){
      return{
        img:require("../../images/cbd.jpg")
      }
    },
    mounted(){
      mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    }
  }
</script>

<style lang='less' scoped>
*{
  touch-action: pan-x;
  touch-action: pan-y;
}
ul{
    padding: 10px;
    list-style: none;
    margin: 0;
    padding-bottom: 0;
li{
  background-color: #ccc;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0 0 10px #999;
  position: relative;
  img{
    width: 100%;
    vertical-align: middle;
  }
img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info{
  max-height: 84px;
  position: absolute;
  bottom: 0;
  color:white;
  text-align: left;
    background-color:rgba(0,0,0,0.4);
  .info-title{
    font-size: 14px;
  }
  .info-body{
    font-size: 13px;
  }
}
}
}


</style> 