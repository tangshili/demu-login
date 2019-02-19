<template>
    <div class="flex_justify_stretch container">
        <div class="">
            <ul class="layui-nav layui-nav-tree" lay-filter="test">
                <li class="layui-nav-item" v-for="(item, index) in nav">
                    <!-- <router-link to="/">Home</router-link> -->
                    <a href="javascript:;">{{ item.label }}</a>
                    <dl class="layui-nav-child" v-if="item.hasOwnProperty('sub') && item.sub.length > 0">
                        <dd v-for="(sub, i) in item.sub">
                            <router-link :to="sub.url">{{sub.label}}</router-link>
                        </dd>
                    </dl>
                </li>

                <!-- <li class="layui-nav-item layui-nav-itemed">
                    <a href="javascript:;">默认展开</a>
                    <dl class="layui-nav-child">
                        <dd><a href="javascript:;">选项1</a></dd>
                        <dd><a href="javascript:;">选项2</a></dd>
                        <dd><a href="">跳转</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item">
                    <a href="javascript:;">解决方案</a>
                    <dl class="layui-nav-child">
                        <dd><a href="">移动模块</a></dd>
                        <dd><a href="">后台模版</a></dd>
                        <dd><a href="">电商平台</a></dd>
                    </dl>
                </li>
                <li class="layui-nav-item"><a href="">产品</a></li>
                <li class="layui-nav-item"><a href="">大数据</a></li> -->
            </ul>
        </div>
        <div class="flex_1">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .layui-nav{ height: 100%; overflow: auto; }
    .layui-nav-tree .layui-this,
    .layui-nav-tree .layui-this>a{ background-color: unset !important; color: unset !important; }
    .layui-nav-tree .layui-this > .router-link-active{ background-color: #009688 !important; color: #fff !important; }
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
                    label : "仓库",
                    sub : [
                        {
                            label : "数据表",
                            url : "repository"
                        }
                    ]
                }
            ]
        }
    },
    created(){
    },
    mounted(){
        layui.use('element', function(){
          var element = layui.element;

          //…
        });
    },
    computed:{
    },
    methods:{
    },
    watch:{
    }
}
</script>
