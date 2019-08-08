<template>
	<div>
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="(item, i) in lunbos" :key="i">
			  <img :src="item.img" >
		  </mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newlist">
					<img src="../img/menu1.png" alt="">
					<div class="mui-media-body">新闻资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/fenxiang">
					<img src="../img/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/buy">
					<img src="../img/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/liuyan">
					<img src="../img/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/shipin">
					<img src="../img/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/call">
					<img src="../img/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div>
				</router-link>
			</li>
		</ul> 
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:"Home",
		data(){
			return{
				lunbos: []
			}
		},
		created() {
			axios.get("http://www.liulongbin.top:3005/api/getlunbo").then(res=>{
				this.lunbos=res.data.message
			}).catch(err=>{
				console.log(err)
			})
		},
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
