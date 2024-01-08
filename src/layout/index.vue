<template>
  <div class="layout">
    <el-affix :offset="0" class="top">
      <Header></Header>
    </el-affix>

    <router-view class="layout-main"></router-view>

    <Footer></Footer>
  </div>
</template>
  
<script setup lang="ts">
// 导入Vue组件
import Header from "./components/header.vue"
import Footer from "./components/footer.vue"


</script>

<style scoped>
.layout-main {
  margin: auto;
  min-height: calc(100vh - 30vh);
}
</style>