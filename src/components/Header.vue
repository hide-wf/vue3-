<template>
  <el-icon @click="() => (useStore().collapse = !useStore().collapse)" :size="20"
    ><Operation
  /></el-icon>
  <!--  -->
  <el-breadcrumb m-l>
    <el-breadcrumb-item> 首页 </el-breadcrumb-item>
    <el-breadcrumb-item> 管理 </el-breadcrumb-item>
  </el-breadcrumb>
  <!--  -->
  <div absolute right-1>
    <el-dropdown>
      <span>
        <el-avatar
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F20%2F20210720124217_bcec9.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670251509&t=f4b53da919b0948ea8554aec1db90f37"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>主页</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <!--  -->
</template>

<script setup lang="ts">
import { Operation } from "@element-plus/icons-vue";
import { useStore } from "../pinia";
</script>

<style scoped></style>
