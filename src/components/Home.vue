<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        class="ScrollBarHidden"
        transition-width
        :width="!useStore().collapse ? '200px' : '64px'"
      >
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header cc class="unline">
          <Header />
        </el-header>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "../pinia";
import Aside from "./Aside.vue";
import Header from "./Header.vue";
import Main from "./Main.vue";
</script>

<style scoped></style>
