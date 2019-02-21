<template>
	<div class="container flex_col">
		<div class="flex_justify_stretch flex_1">
			<div class="">
				<ul class="layui-nav layui-nav-tree" lay-filter="test">
					<li class="layui-nav-item" v-for="(item, index) in nav">
						<router-link v-if="item.hasOwnProperty('url')" :to="item.url">{{  item.label }}</router-link>
						<a href="javascript:;" v-else>{{ item.label }}</a>
						<dl class="layui-nav-child" v-if="item.hasOwnProperty('sub') && item.sub.length > 0">
							<dd v-for="(sub, i) in item.sub">
								<router-link :to="sub.url">{{sub.label}}</router-link>
							</dd>
						</dl>
					</li>
					<li class="layui-nav-item">
						<a href="javascript:;" @click="loginOut">退出</a>
					</li>
				</ul>
			</div>
			<div class="flex_1">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<style scoped>
    .layui-nav{ height: 100%; overflow: auto; }
    .layui-nav-tree .layui-this,
    .layui-nav-tree .layui-this>a{ background-color: unset !important; color: unset !important; }
    .router-link-active,
	.layui-nav-tree .layui-this .router-link-active{ background-color: #009688 !important; color: #fff !important; }
    .flex_1{ width: 100%; overflow: auto;}
</style>

<script>
export default {
    components: {
    },
    data(){
        return {
            nav :[
				{
                    label : "用户列表",
                    url : "/console/user/list"
                },
                {
                    label : "仓库",
                    sub : [
						{
                            label : "管理",
                            url : "/console/repository"
                        },
                        {
                            label : "库存",
                            url : "/console/inventory"
                        },
						{
							label : "废弃数据",
							url : "/console/inventoryrecycle"
						},

                    ]
                },

            ]
        }
    },
    created(){
    },
    mounted(){
        layui.use('element', function(){
          var element = layui.element;
        });
		if (layui.hasOwnProperty('element')) {
			layui.element.render();
		}
    },
    computed:{
    },
    methods:{
		loginOut(){
			localStorage.removeItem("wdoa_username");
			localStorage.removeItem("wdoa_mobile");
			localStorage.removeItem("wdoa_group_id");
			localStorage.removeItem("wdoa_token");
			this.$router.replace('/');
		},
    },
    watch:{
    }
}
</script>
