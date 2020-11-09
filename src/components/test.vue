<!-- 待维护数据 -->
<template>
  <div class="unhandle-data">
    <div class="unhandle-data__breadcrumb">
      <el-breadcrumb>
        <el-breadcrumb-item>运营管理</el-breadcrumb-item>
        <el-breadcrumb-item>DMP</el-breadcrumb-item>
        <el-breadcrumb-item><b>待维护数据</b></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-container style="height: 550px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>个人属性</template
            >
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>工作收入</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div class="unhandle-data__main__top-left">
            <el-button type="primary" size="small">添加到已有标签</el-button>
            <el-button size="small" @click="create">创建新标签</el-button>
            <el-button size="small" @click="del">删除</el-button>
          </div>
          <div class="unhandle-data__main__top-right">
            <el-input
              placeholder="请输入搜索项目名称"
              v-model="keyword"
              prefix-icon="el-icon-search"
              size="small"
              style="width: 260px"
            ></el-input>
          </div>
        </el-header>
        <el-main>
          <el-table
            ref="multipleTable"
            :data="tableData"
            @selection-change="handleSelectionChange"
            tooltip-effect="dark"
          >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="name" label="选项名称" width="594">
            </el-table-column>
            <el-table-column prop="num" label="样本数量" width="405">
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import DMPApi from '@/allApi/DMP'
// import debounce from 'lodash/debounce'

export default {
  name: "test",
  data() {
    return {
      tableDta: [],
    };
  },
};
</script>
<style lang="less" scoped>

</style>
