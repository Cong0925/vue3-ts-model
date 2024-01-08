<template>
  <div class="loginCenter">
    <div class="left">
      <ImageShow></ImageShow>
    </div>

    <div class="right">
      <component :is="componentToShow"></component>
    </div>

  </div>
</template>

<script setup lang="ts">
import ImageShow from "./components/imageShow.vue"
import Login from "./components/login.vue"
import Register from "./components/register.vue"
import FindPasswaod from "./components/findPasswaod.vue"
import { useRoute } from "vue-router";
import {  ref, watch } from "vue";

const judgePath = (path: any) => {
  if (path === 'login') {
    return Login
  } else if (path === 'register') {
    return Register
  } else if (path === 'findPassword') {
    return FindPasswaod
  }
}

const route = useRoute()
const componentToShow = ref(judgePath(route.query.path)) // 使用 ref 进行响应式声明
watch(
  () => route.query.path,
  (newPath: any, old: any) => {
    // 当 route.query.path 发生变化时触发
    componentToShow.value = judgePath(newPath)
  }
);


</script>

<style scoped>
.loginCenter {
  width: 1250px;
  margin: auto;
  margin-top: 20px;
  display: flex;
}

.left,
.right {
  margin: auto;
}

.left {
  flex: 3;
  margin-right: 30px;
}

.right {
  flex: 2;
}
</style>