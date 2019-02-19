<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<style>
    .flex_justify_stretch{ display: flex; justify-content: space-between; align-items: stretch;}
    .flex_1{ flex: 1;}
    #app{ width: 100%; position: fixed; top: 0; left: 0; right: 0; bottom: 0; overflow: auto; }
    .container{ width: 100%; min-width: 1024px; height: 100%; overflow: hidden; }
    .page_container{ height:100%; padding-top:5px; box-sizing: border-box; }
    .layui-table-header th{ background: #f2f2f2 !important; }
	.el-table--border{ border-color: #e6e6e6 !important;}
	.el-table td,
	.el-table th{ border-color: #e6e6e6 !important; padding: 9px 0 !important;}
	.el-table--border .hover-row td{ background-color: #f2f2f2 !important; }
</style>

<script>
export default {
    components: {
    },
    data(){
        return {
        }
    },
    created(){
    },
    mounted(){

    },
    computed:{
    },
    methods:{
    },
    watch:{
    }
}
</script>
