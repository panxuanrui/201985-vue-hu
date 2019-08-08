<template>
    <div class="newinfor">
        <h3 class="title">{{newsinfor.title}}</h3>
        <p class="subtitle">
            <span>
                {{newsinfor.add_time  | dateFormat}}
            </span>
            <span>
                点击：{{newsinfor.click}}次
            </span>
        </p>
        <hr>
        <div class="content" v-html="newsinfor.content"></div>
		<comment :id="this.id"></comment>
    </div>
</template>
<script>
	import Comment from '../grandson/Comment'
    export default {
        data(){
            return{
                id:this.$route.params.id,
                newsinfor:{}
            }
        },
		components: {
			Comment
		},
        created() {
            this.getnewsinfor()
        },
        methods: {
            getnewsinfor(){
                this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
                    if(result.body.status === 0){
                        this.newsinfor=result.body.message[0]
                    }
                })
            }
        }
    }
</script>
<style scoped="scoped"> 
    .newinfor{
        padding:0 4px;
    }
    .newinfor .title{
        font-size:16px;
        text-align:center;
        margin:15px 0;
        color :red;
    }
    .newinfor .subtitle{
        font-size:13px;
        color:#226aff;
        display: flex;
        justify-content: space-between
    }
</style>
