<template>
    <div class="page_container">
        <form class="layui-form">
            <div class="layui-form-item">
                <div class="layui-inline">
                    <label class="layui-form-label">仓库</label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <input type="password" name="name" autocomplete="off" class="layui-input" v-model="params.name">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">年度</label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="year" lay-verify="year">
                            <option value=""></option>
                            <option :value="item" v-for="item in year">{{item}}</option>
                        </select>
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">月份</label>
                    <div class="layui-input-inline" style="width: 100px;">
                        <select name="month" lay-verify="month">
                            <option value=""></option>
                            <option :value="item" v-for="item in 12">{{item}}</option>
                        </select>
                    </div>
                </div>

                <div class="layui-inline">
                    <button class="layui-btn layui-btn-normal" type="button" name="button">搜索</button>
                </div>
            </div>
        </form>
        <table id="table" lay-filter="table"></table>
        <!-- <div class="flex_1">
            <el-table :data="list" border style="width: 100%" height="100%" header-row-class-name="layui-table-header" size="small">
                <el-table-column prop="name" label="仓库" fixed></el-table-column>
                <el-table-column prop="data" label="年月" fixed></el-table-column>
                <el-table-column v-for="day in daysInMonth" prop="address" :label="day"></el-table-column>
            </el-table>
        </div> -->
    </div>
</template>

<style scoped>
    .layui-form-item{ margin-bottom: 5px;}
    .layui-inline{ margin: 0; }
    .layui-form-label{ width:auto; padding-left:10px; padding-right: 10px;}
    .page_container{ display: flex; flex-direction: column; }
</style>

<script>
export default {
    components: {
    },
    data(){
        return {
            year : [1991,1992],
            params : {
                year : 1991,
                month : 1,
                name : "",
            },
            list : [],
        }
    },
    created(){
    },
    mounted(){
        const self = this;
        layui.use('form', function(){
            var form = layui.form;
            form.on('select(year)', function(data){
                self.params.year = data.value;
            });
            form.on('select(month)', function(data){
                self.params.month = data.value;
            });
        });
        this.renderTable();
    },
    computed:{
        daysInMonth(){
            return moment(`${this.params.year}-${this.params.month}`, "YYYY-MM").daysInMonth();
        }
    },
    methods:{
        renderTable(){
            let cols = [[]];
            let days = moment(`${this.params.year}-${this.params.month}`, "YYYY-MM").daysInMonth();
            cols[0].push({field: "name", title: "仓库"});
            cols[0].push({field: "month", title: "年月", width:80, sort: false});
            for (var i = 1; i <days; i++) {
                cols[0].push({field: i, title: i, width:80, sort: false});
            }
            layui.use('table', function(){
                var table = layui.table;
                //第一个实例
                table.render({
                    elem: '#table',
                    height: $("#table").closest("div").height() - 70,
                    url: 'https://www.layui.com/demo/table/user/', //数据接口
                    page: false, //开启分页
                    cols: cols
                });
            });
        }
    },
    watch:{
    }
}
</script>
