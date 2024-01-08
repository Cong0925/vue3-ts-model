<template>
  <div class="newsShow">
    <el-card class="box-card" shadow="never">
      <div class="card-header">
        <span class="text-large">活动列表</span>
      </div>
      <div class="my-divider-black-middle"></div>

      <div class="content">
        <div class="content-list">
          <Score></Score>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Score from "./scrollbar.vue"

</script>

<style scoped>
.box-card{
  width: 100%;
  height: 540px;
}
</style>
