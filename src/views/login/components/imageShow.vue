<template>
  <div class="logo">
    <img :src="loginbg" />
  </div>
</template>

<script setup lang="ts">
import loginbg from "@/assets/images/sport3.jpg";
</script>

<style scoped>
img {
max-width: 100%;
height: 500px;
border-radius: 40px;
}

.loginCenter .logo {
margin: auto;
}
</style>