<template>
  <div class="common-layout">
    <div class="main-layout">
      <div class="line-first">
        <div class="line-first-one">
          <newsShow></newsShow>
        </div>
        <div class="line-first-two">
          <scoreShow></scoreShow>
        </div>
      </div>
      <!-- 测试功能按钮 -->
      <div>
        <el-button type="primary" @click="testUseStore">打印store</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import Vditor from "@/components/vditor.vue"
// import Tinymce2 from "@/components/tinymce_vue2.vue" //vue2 写法
// import Tinymce3 from "@/components/tinymce_vue3.vue"
import newsShow from './components/news.vue'
import scoreShow from './components/actions.vue'

import { useMyStore } from "@/stores/states"
import { UserInfoState } from '@/api/login/types';

const useStore = useMyStore()
const testUseStore = () => {
  let data: UserInfoState = {
    user: 'admin',
    ID: '12345',
    age: '18',
    sex: '男'
  }
  useStore.setUserInfo(data)
  console.log(useStore.userForm);
}

</script>

<style scoped>
.common-layout {
  height: 100%;
  overflow: hidden;
}

.line-first {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.line-first-one {
  width: 720px;
}

.line-first-two {
  width: 520px;
}
</style>


