<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="useStore().collapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <!-- 首页 -->

    <el-sub-menu index="2">
      <template #title>
        <el-icon><GoodsFilled /></el-icon>
        商品</template
      >
      <el-menu-item index="2-1">
        <el-icon><List /></el-icon>商品列表
      </el-menu-item>
      <el-menu-item index="2-2">
        <el-icon><CirclePlusFilled /></el-icon>
        添加商品
      </el-menu-item>
    </el-sub-menu>

    <!-- 商品 -->

    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
  <!-- 设置 -->
</template>

<script lang="ts" setup>
import { useStore } from "../pinia/index";
import {
  HomeFilled,
  Setting,
  GoodsFilled,
  List,
  CirclePlusFilled,
} from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
