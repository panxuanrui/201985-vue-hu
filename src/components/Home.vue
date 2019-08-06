<template>
	<div>
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="item in lunbos" >
			  <img :src="item" >
		  </mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu1.png" alt="">
					<div class="mui-media-body">新闻资讯</div></a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div></a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div></a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div></a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div></a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../img/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div></a>
			</li>
		</ul> 
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lunbos: [
						'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg',

						'http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg'
					  ]
			}
		}
	}
</script>
<style scoped="scoped">
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item {
		width: 100%;
		height:100%;
	}
 	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background: white;
	}
	.mui-grid-view.mui-grid-9 img{
		width: 60px;
		height: 60px;
	}
	.mui-grid-view.mui-grid-9 .mui-media{
		border: none;
	}
	.mui-media-body{
		font-size: 13px;
	}
</style>
