<template>
	<div class="container">
		<div>
			<h3>发表评论</h3>
		</div>
		<hr>
		<textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="msg">
		</textarea>
		<mt-button type="primary" size="large" @click="postcot">
			发表评论
		</mt-button>
		<div class="cmt-list">
			<div class="cmt-item" v-for="(item,i) in getpinluns" :key="item.add_time">
				<div class="cmt-title">
					第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
				</div>
				<div class="cmt-body">
					{{item.content === 'undefined' ? '用户很懒，啥都不说':item.content}}
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="dian">
			加载更多
		</mt-button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				getpinluns:[],
				pageindex:1 ,//默认展示第一页数据,
				msg:''
			}
		},
		created(){
			this.getpinlun()
		},
		methods: {
			getpinlun(){
				this.$http.get("http://www.liulongbin.top:3005/api/getcomments/"+ this.id  +"?pageindex="+ this.pageindex).then(result=>{
					if(result.body.status === 0){
						// this.getpinluns=result.body.message
						this.getpinluns=this.getpinluns.concat(result.body.message)
					}
				})
			},
			dian(){
				this.pageindex++;
				this.getpinlun();  //重新调用第一页的数据，以防被覆盖掉
			},
			postcot(){
				this.$http.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{
					content:this.msg.trim()
				})
				.then(function(result){
					if(result.body.status === 0){
						//拼接评论对象
							var cmt={
								user_name:'匿名用户',
								add_time :Date.now(),
								content:this.msg.trim()
						};
						this.getpinluns.unshift(cmt);
						this.msg="";
					}
				})
			}
		},
		props:['id']
	}
</script>
<style  scoped="scoped">
	.container h3{
		font-size:18px;
	}
	textarea{
		font-size:14px;
		height: 85px;
		margin: 0;
	}
	.cmt-list{
		margin: 5px 0;
	}
	.cmt-list .cmt-item{
		font-size: 13px;
		background: #CCCCCC;
	}
	.cmt-list .cmt-item .cmt-title{
		line-height: 30px;
	}
	.container .cmt-body{
		line-height: 35px;
		text-indent: 2em;
		background: white;
	}
</style>
