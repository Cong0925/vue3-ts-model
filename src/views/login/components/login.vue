<template>
  <div class="loginForm">
    <div class="rloginTitle">登录</div>

    <!-- 各个输入框 -->
    <el-form :model="state.formData" :rules="formRules" ref="formRef" label-width="50px">
      <el-form-item prop="username">
        <div class="formInput">
          <el-input v-model="state.formData.username" placeholder="username" clearable autocomplete="off"
            prefix-icon="User"></el-input>

        </div>
      </el-form-item>
      <el-form-item prop="password">
        <div class="formInput">

          <el-input v-model="state.formData.password" placeholder="password" type="password" show-password
            autocomplete="off" prefix-icon="Lock"></el-input>
        </div>
      </el-form-item>

      <!-- 验证码 -->
      <el-form-item prop="code">
        <div class="formInput codeLine">
          <el-input class="codeInput" v-model="state.formData.code" placeholder="输入验证码" clearable maxlength="4" />
          <slideVerify class="codeShow" v-model:identifyCode="identifyCode" @click="refresh()"></slideVerify>
        </div>
      </el-form-item>

      <!-- 登陆界面 -->
      <el-form-item>
        <div class="formInput settings">
          <label class="labelText">
            <input type="checkbox" v-model="rem_pswd" /> 记住密码
          </label>
          <label class="labelText">
            <span @click.stop="go_page('findPassword')">忘记密码？</span>
            <span @click.stop="go_page('register')">注册</span>
          </label>

        </div>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item label-width="0">
        <el-button :loading="state.loading" type="primary" class="loginButton" round
          @click="handleSubmita(formRef)">登录</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import router from '@/router';

// 导入生成验证码组件
import slideVerify from "@/components/slideVerify.vue"

// 导入登录 API 方法
import { UseLoginApi } from "@/api/login/index"
// 导入登录状态的类型
import { LoginState } from "@/api/login/types";

// 导入本地存储工具类
import { Session } from '@/utils/storage';
// 导入全局状态管理
import { useMyStore } from '@/stores/states';

// 生成随机验证码
const generateCode = () => {
  const code = ref('');
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  for (let i = 0; i < 4; i++) {
    code.value += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code.value;
}
// 传递验证码给子组件
const identifyCode = ref(generateCode())
// 刷新验证码
const refresh = () => {
  identifyCode.value = generateCode()
}
// 检测输入的验证码，
const checkCodeFun = (rule: any, value: any, callback: any) => {
  if ((value as string).toUpperCase() === identifyCode.value) {
    return true
  } else {
    return false
  }
}

// 使用登录 API 方法
const useLoginApi = UseLoginApi()
// 使用全局状态管理
const useUserInfoStore = useMyStore()
// 定义组件的响应式状态
interface State {
  loading: boolean;
  formData: LoginState;
}

const state: State = reactive({
  loading: false,
  formData: {
    username: "admin",
    password: "admin",
    code: identifyCode.value,
  },
})

// 定义登录逻辑
const login = () => {
  let data: LoginState = {
    username: state.formData.username,
    password: state.formData.password,
    code: state.formData.code
  }
  useLoginApi.login(data)
    .then((res) => {
      console.log(res);
      // 登录成功后的处理逻辑
      Session.set('token', res.data.token)
      Session.set('username', res.data.userInfo.user)
      useUserInfoStore.setUserInfo(res.data.userInfo)
      useUserInfoStore.setIsLogin(true)

      router.push({
        name: 'index'
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

// 创建表单的引用
const formRef = ref<FormInstance>();
// 定义表单验证规则
const formRules = reactive<FormRules<typeof state.formData>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, validator: checkCodeFun, message: '请输入验证码', trigger: 'blur' }],
})

// 记住密码，true 或 false
const rem_pswd = ref(localStorage.getItem('rem_pswd'))

// 跳转页面的方法
const go_page = (path: string) => {
  router.push({
    name: 'login', // 替换为目标路由的名称或路径
  })
}

// 处理表单提交的方法
const handleSubmita = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any, fields: any) => {
    if (valid) {
      // 表单验证通过，执行登录逻辑
      login()
      console.log('login');
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>


<style scoped>
/* 可以添加一些样式 */
.loginForm {
  height: 400px;
  border: 1px solid;
  border-radius: 10px;
  text-align: center;
  background-color: #f3f3f3;
}

.loginForm .rloginTitle {
  font-size: 23px;
  margin: 5%;
}

.loginButton {
  width: 250px;
  margin: auto;
  margin-top: 20px;
}

.formInput {
  width: 80%;
  min-width: 50px;
}

.codeLine {
  display: flex;
}

.codeLine .codeInput {
  flex: 2;

}

.codeLine .codeShow {
  flex: 1;

}

.settings {
  display: flex;
  justify-content: space-between;
}

.settings label {
  flex: 1;
  font-size: 16px;
}

.settings .labelText {
  cursor: pointer;
}

.btn-base {
  width: 100%;
}

.btn-flex {
  display: flex;
  justify-content: center;
}
</style>
