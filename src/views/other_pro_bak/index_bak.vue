<!-- <template>
  <div class="loginCenter">
    <div class="left">
      <LoginShow></LoginShow>
    </div>

    <div class="right" v-if="pageType === LoginPageType.LOGIN">
      <loginForm @notifyParent="showFindPawd"></loginForm>
    </div>
    <div class="right" v-if="pageType === LoginPageType.FINDPASSWORD">
      <FindPawd @notifyParent="backToLogin"></FindPawd>
    </div>
    <div class="right" v-if="pageType === LoginPageType.UPDATEPASSWORD">
      <UpdatePawd  @notifyParent="backToLogin"></UpdatePawd>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginShow from "./components/loginShow.vue"
import loginForm from "./components/loginForm.vue"
import FindPawd from "./components/findPawd.vue"
import UpdatePawd from "./components/updatePawd.vue"

import { ref } from "vue";

import { usePageTypeStore } from '@/stores/info/index' // 页面状态获取，login，findPassword,updatePassword
import {LoginPageType} from "@/enums/index.ts"

const appStore = usePageTypeStore();

const pageType = ref(appStore.type)
console.log(pageType.value);

const showFindPawd = (type:string) => {
  pageType.value = type; // 切换显示 FindPawd 页面
}
const backToLogin = (type:string) => {
  pageType.value = type; // 切换显示 Login 页面
}


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
</style> -->