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
      <el-form-item>
        <div class="formInput codeLine">
          <el-input class="codeInput" @input="checkCodeFun" v-model="checkCode.code" placeholder="输入验证码" clearable
            maxlength="4" />
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
        <el-button :loading="state.loading" :disabled="!checkCode.isTrue" type="primary" class="loginButton" round
          @click="handleSubmita(formRef)">登录</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const state = reactive({
  loading: false,
  formData: {
    username: "admin",
    password: "admin"
  }
})
const formRef = ref<FormInstance>(); // 创建一个 ref 来引用表单
const formRules = reactive<FormRules<typeof state.formData>>({
  username: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
})

// 记住密码，true 或 false
const rem_pswd = ref(localStorage.getItem('rem_pswd'))

const go_page = (path:string) => {
  router.push({
    name: 'login', // 替换为目标路由的名称或路径
    query: {
      path: path
    }
  })
}

const handleSubmita = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log('login');

    } else {
      console.log('error submit!', fields)
    }
  })
}


// 生成验证码以及检测
import slideVerify from "@/components/slideVerify.vue"
import { FormInstance, FormRules } from 'element-plus';
import router from '@/router';
interface CheckCodeType {
  code: string;
  isTrue: boolean;
}
const checkCode = reactive<CheckCodeType>({
  code: "",
  isTrue: false
})

// 生成随机验证码
const generateCode = () => {
  const code = ref('');
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  for (let i = 0; i < 4; i++) {
    code.value += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code.value;
}
// 传递 验证码给子组件
const identifyCode = ref(generateCode())
// 刷新验证码
const refresh = () => {
  identifyCode.value = generateCode()
}
// 检测输入的验证码，控制提交按钮是否可用
const checkCodeFun = (newValue: string) => {
  if ((newValue as string).toUpperCase() === identifyCode.value) {
    checkCode.isTrue = true
  } else {
    checkCode.isTrue = false
  }
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
