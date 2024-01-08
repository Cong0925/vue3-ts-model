<template>
  <div class="newsShow">
    <el-card class="box-card" shadow="never">
      <div class="card-header">
        <span class="text-large">新闻动态</span>
      </div>
      <div class="my-divider-black-middle"></div>

      <div class="content">
        <div class="content-pics">
          <div v-for="o in 2" :key="o" class="pic-item" @click="goDetails">
            <img :src="state.pic">
          </div>
        </div>
        <div class="my-divider-black-middle"></div>

        <div class="content-list">
          <div class="list-item" v-for="o in 5" :key="o" @click="goDetails">
            <div class="text-middle">这是新闻标题或者摘要</div>
            <div class="text-middle date">2023-12-25</div>
          </div>
        </div>

        <div class="my-divider-grey-middle"></div>

        <div class="btn">
          <el-button class="button-more text-middle" text @click="loadMore">
            更多新闻
            <DArrowRight style="width: 1em; height: 1em; margin-right: 8px" />
          </el-button>
        </div>
      </div>


    </el-card>
  </div>
</template>

<script setup lang="ts">
// import router from '@/router';
import pic from "@/assets/images/pic1.jpg"
import { DArrowRight } from '@element-plus/icons-vue';
import { reactive } from "vue";

const state = reactive({
  pic: pic
})
// 加载更多
const loadMore = () => {
  console.log('加载更多');

  // router.push({
  //   name: '',
  //   query: {
  //     path: "",
  //   }
  // })
}
// 跳转详情页
const goDetails = () => {
  console.log('详情页');

  // router.push({
  //   name: '',
  //   query: {
  //     path: "",
  //   }
  // })
}
</script>

<style scoped>
.content {
  height: 540px;
}

.pic-item {
  transition: all 0.6s;
}

/* 鼠标移入 缩放 */
.pic-item:hover {
  transform: scale(1.1);
}
</style>
