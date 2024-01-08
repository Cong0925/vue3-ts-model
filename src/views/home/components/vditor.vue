<template>
  <div>
    <div ref="vditorContainerRef"></div>
    <el-button type="primary" @click="getContent">获取内容</el-button>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Vditor from 'vditor';
import { onMounted, ref } from 'vue';
import 'vditor/dist/index.css';

const vditorContainerRef = ref(null);
let vditor: any;

const init = () => {
  vditor = new Vditor(vditorContainerRef.value, {
    height: 650,
    mode: "wysiwyg", // 显示预览内容
    placeholder: "请输入内容...",
    toolbarConfig: {
      pin: true
    },
    cache: {
      enable: false
    },
    after: () => {
      // contentEditor.value.setValue("");
    },
    // 其他 Vditor 配置选项
    upload: {
      url: 'url', // sm.ms 图床的上传接口地址
      accept: 'image/*', // 限制上传的文件类型为图片
      withCredentials: true, // 不携带跨域请求的凭据
      headers: {},
      // 自定义上传成功的回调函数
      success: (editor: { insertValue: (arg0: string) => void; }, msg: string) => {
        const data = JSON.parse(msg);
        if (data.code === 'success') {
          // 上传成功，将图片插入到编辑器中
          editor.insertValue(`![${data.data.filename}](${data.data.url})`);
        } else {
          console.error('上传失败1:', data.message);
        }
      },
      // 自定义上传失败的回调函数
      error: (msg: any) => {
        console.error('上传失败2:', msg);
      },
    },
  });
  console.log(vditor);

}

const getContent = () => {
  if (vditor) {
    const content = vditor.getValue();
    console.log('获取到的内容：', content);
  } else {
    console.error('Vditor 实例尚未初始化');
  }
}

onMounted(() => {
  init()
});

</script>

<style scoped></style>

