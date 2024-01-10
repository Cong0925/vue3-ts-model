<template>
  <div class="top1">
    <div class="header">
      <!-- 头部主体 -->
      <div class="header_layout layout_width">
        <!-- logo部分 -->
        <div class="logo">
          <div class="pic">
            <!-- <img src=""> -->
          </div>
          <div class="pic_title" @click="goPage('index')">
            <div class="title1">XXXXXXXXXXX</div>
            <div class="title2">XXX系统</div>
          </div>
        </div>
        <!-- 搜索，按钮部分 -->
        <div class="options">
          <div class="options_layout">
            <div class="search_box">
              <el-row>
                <el-input v-model="search" class="w-50 m-2" placeholder="输入查找内容" :prefix-icon="Search" />
              </el-row>
            </div>
            <div class="login_box">
              <div class="user" v-if="useMyStore().isLogin">
                <el-dropdown>
                  <span>{{ Session.get('username') || useMyStore().userForm.user }}</span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item @click="goPage('personalSetting')">个人中心</el-dropdown-item>
                      <el-dropdown-item divided @click="goPage('logout')">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </div>
              <div class="login" v-else>
                <el-button type="primary" @click="goPage('login')">login</el-button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import router from '@/router';
import { Session } from '@/utils/storage';
import { useMyStore } from '@/stores/states';
import { ElMessageBox, ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';

// 搜索关键词的响应式引用
const search = ref('');

// 退出登录
const logout = (pageUrl: string) => {
  console.log('logout', pageUrl);

  // 弹出确认对话框
  ElMessageBox.confirm(
    '确认退出登录？',
    '提示',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      // 清空本地存储
      Session.clear();
      // 设置全局状态中的登录状态为 false
      useMyStore().setIsLogin(false);
      // 跳转到指定页面
      router.push({ name: pageUrl });

      // 提示退出成功
      ElMessage({
        type: 'success',
        message: '退出成功！',
      });
    })
    .catch(() => {
      // 提示取消退出
      ElMessage({
        type: 'info',
        message: '取消退出！',
      });
    });
};

// 跳转页面的方法
const goPage = (pageUrl: string) => {
  if (pageUrl === 'logout') {
    // 如果是退出登录，调用退出登录函数
    logout('index');
  } else if (pageUrl === 'login') {
    // 如果是登录页，带上额外的查询参数
    router.push({
      name: pageUrl,
      query: {
        path: 'login',
      },
    });
  } else {
    console.log(pageUrl);
    try {
      // 其他页面直接跳转
      router.push({
        name: pageUrl,
      });
    } catch (err) {
      console.log(err);
    }
  }
};
</script>


<style scoped>
/* 整体头部颜色宽度设置 */
.header {
  z-index: 9;
  background-color: rgba(17, 101, 172, 1);
  /* background: linear-gradient(rgba(17, 101, 172, 0.8), rgba(17, 101, 172, 0.5)); */
  height: 80px;
}

/* 自定义 头部内容排版样式 */
.header_layout {
  height: 80px;
  position: relative;
}

.logo,
.content,
.options {
  height: 100%;
}

.logo {
  color: rgb(255, 255, 255);
  width: 350px;
  cursor: pointer;
}

.logo .pic {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: absolute;
  left: 0;
}

.logo .pic img {
  height: 80px;
}

.logo .pic_title {
  width: 250px;
  height: 80px;
}

.title1,
.title2 {
  position: absolute;
  left: 85px;
  /* 与 .logo .pic_title 的 left 值相同 */
}

.title1 {
  font-size: 26px;
  font-weight: 100;
  height: 45px;
  line-height: 45px;
}

.title2 {
  top: 45px;
  font-size: 16px;
  font-weight: 100;
  height: 35px;
  line-height: 35px;
}

.options {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
}

.options .options_layout {
  display: flex;
  align-items: center;
  height: 100%;
}

.options .options_layout .search_box {
  flex: 3;
}

.options .options_layout .login_box {
  flex: 1;
}

.options .options_layout .login_box .login {}

.options .options_layout .login_box .user {
  border: 1px solid;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: rgb(80 188 221);
  margin: auto;
  overflow: hidden;
  cursor: pointer;
}

.options .options_layout .login_box .user span {
  line-height: 50px;
  font-size: 18px;
  border: none;
  outline: none;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
