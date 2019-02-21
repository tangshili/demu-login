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
    .page_container{ height:100%; padding:5px; box-sizing: border-box; }

	.flex_col{ display: flex; flex-direction: column;}
	.layui-table-header th{ background: #f2f2f2 !important; }
	.el-table--border{ border-color: #e6e6e6 !important;}
	.el-table td,
	.el-table th{ border-color: #e6e6e6 !important; padding: 9px 0 !important;}
	.el-table--border .hover-row td{ background-color: #f2f2f2 !important; }

	.layui-row{ position: relative;}

	.flex_justify{ display: flex; justify-content: space-between; align-items: center; }
	.text-right{ text-align: right !important;}

	.block_list_box{ display: flex; justify-content: center; overflow: auto; flex: 1; }
	.block_list{ display: inline-block;  }
	.block_list .item{ display: inline-block; background: #fff; padding: 10px; min-width: 250px; width: 100%; max-width: calc(25% - 10px); border: 1px solid #ccc; margin: 5px; }
	.block_list .item h3{ color: #333;}
	.block_list .item .add{ color: darkorange;}
	.block_list .item .update{ color: crimson;}
	.block_list .item .desc{ color: #ccc; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp : 2; -webkit-box-orient : vertical;}

	.wd_pagination, .page{ display: flex; align-items: center; justify-content: center; margin-top: 5px; }
	.page a{ cursor: pointer;}
    .page a[disabled='disabled']{ cursor: default; color: #ccc; }


	.wd_pagination.el-pagination button{ padding: 0 4px; font-weight: normal; min-width: 15px; border: 1px solid #E2E2E2; line-height: 38px; height: 38px; width: 38px; }
	.wd_pagination .el-pager li{ font-weight: normal; min-width: 15px; border: 1px solid #E2E2E2; line-height: 38px !important; height: 38px; width: 38px; margin-left: -1px; }
	.wd_pagination .el-pager li.number.active{ background: #009688 url() 0 0 no-repeat; color: #fff; border: 1px solid #009688; }
	.wd_pagination.el-pagination button:disabled{ cursor: default; }
	.wd_pagination.el-pagination .btn-next{ margin-left: -1px; }

	.x-red{ color: red; }
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
