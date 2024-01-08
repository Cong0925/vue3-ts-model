<template>
  <div>
    <el-scrollbar height="420px" ref="scrollbarRef" @scroll.native="scroll">

      <el-table ref="multipleTable" :data="state.data" stripe style="width: 100%">
        <el-table-column prop="title" >
          <template #default="{ row }">
            <div class="clickable-text" @click="goDetails">{{ row.title }}</div>
          </template>
        </el-table-column>

      </el-table>
    </el-scrollbar>

    <div class="my-divider-grey-middle"></div>
    <div class="loadMore">
      <span>
        {{ state.loading ? '加载中...' : (state.data.length > state.total ? '已全部加载' : '加载更多...') }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// import router from '@/router';
import { ElScrollbar, ElTable } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';

const state = reactive({
  loading: false,
  total: 100,
  data: [{
    title: '这是标题，而且很长，非常非常非常长'
  }]
})
const list = {
  title: '这是标题，而且很长，非常非常非常长'
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

// 加载更多学生
const loadMore = () => {
  // 模拟加载更多数据的操作
  state.loading = true
  setTimeout(() => {
    if (state.data.length < state.total) {
      for (let i = 0; i < 20; i++) {
        state.data.push(list)
      }
    }
    state.loading = false
  }, 500)

};

// 滚动加载内容
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const multipleTable = ref<InstanceType<typeof ElTable>>()
const lastScrollTop = ref(0); // 记录上一次滚动条的位置
const lastLoadTime = ref(0); // 记录上一次加载更多的时间戳
const loadInterval = 500; // 规定的加载更多的时间间隔
// 滚动条监听
const scroll = (target: { scrollTop: number; }) => {
  if (scrollbarRef.value && multipleTable.value?.$el) {
    const scrollbar = scrollbarRef.value.$el;
    const table = multipleTable.value.$el;
    const isAtBottom = target.scrollTop + scrollbar.clientHeight >= table.clientHeight;

    if (isAtBottom && Date.now() - lastLoadTime.value >= loadInterval) {
      lastScrollTop.value = target.scrollTop;
      // 移动滚动条到触底之前的位置
      scrollbarRef.value.scrollTo({
        top: lastScrollTop.value - 5,
        behavior: 'auto', // 使用 'auto' 表示不使用平滑滚动效果
      });
      // 记录加载更多的时间戳
      lastLoadTime.value = Date.now();
      // 加载更多数据
      loadMore();
    }
  }
};

onMounted(() => {
  loadMore()
})
</script>

<style scoped>
.clickable-text:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
