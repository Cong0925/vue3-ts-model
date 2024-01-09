<template>
  <el-button @click="downloadFile">下载</el-button>
</template>

<script setup lang="ts">

const downloadFile = () => {
  const fileUrl = 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png'
  fetch(fileUrl)
    .then(response => {
      // 获取服务器返回的 MIME 类型
      const contentType = response.headers.get('Content-Type');
      return { blobData: response.blob(), contentType };
    })
    .then(({ blobData, contentType }) => {
      const blob = new Blob([blobData], { type: contentType });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);

      // 根据文件链接动态设置下载文件名
      const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
      downloadLink.download = fileName;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
    });
};


</script>

<style scoped></style>


