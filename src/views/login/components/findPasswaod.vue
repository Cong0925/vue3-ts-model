<template>
  <div class="loginForm">
    <div class="rloginTitle">找回密码</div>

    <!-- 各个输入框 -->
    <el-form :model="state.formData" :rules="formRules" ref="formRef" label-width="50px">

      <el-form-item prop="phone">
        <div class="formInput">
          <el-input v-model="state.formData.phone" placeholder="username" clearable autocomplete="off"
            prefix-icon="User"></el-input>

        </div>
      </el-form-item>
      <el-form-item prop="code">
        <div class="formInput">
          <el-input v-model="state.formData.code" placeholder="username" clearable autocomplete="off"
            prefix-icon="User"></el-input>

        </div>
      </el-form-item>


      <!-- 找回密码界面 -->
      <el-form-item >
        <div class="formInput settings">
          <label></label>
          <label class="labelText">
            <span @click.stop="go_page()">去登录</span>
          </label>
        </div>
      </el-form-item>

      <!-- 提交按钮 -->
      <el-form-item label-width="0">
        <el-button :loading="state.loading" :disabled="!state.isCode" type="primary" class="loginButton" round
          @click="handleSubmita(formRef)">确认</el-button>
      </el-form-item>


    </el-form>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';

const state = reactive({
  loading: false,
  formData: {
    phone: "",
    code: ""
  },
  isCode:false
})
const formRef = ref<FormInstance>(); // 创建一个 ref 来引用表单
const formRules = reactive<FormRules<typeof state.formData>>({
  phone: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
  code: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
})


const go_page = () => {
  router.push({
    name: 'login', // 替换为目标路由的名称或路径
    query: {
      path: 'login'
    }
  })
}

const handleSubmita = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any, fields: any) => {
    if (valid) {
      console.log('findPassword');

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
