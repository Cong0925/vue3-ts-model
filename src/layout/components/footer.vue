<template>
  <div class="bottom">
      <div class="bottom_layout layout_width">
          <div class="logo border_left" >
              <a href="#" target="_blank">
                  <img src="https://th.bing.com/th/id/OIP.eTqRaFtreoqlJTcC8aX5hgHaHI?rs=1&pid=ImgDetMain" alt="NCEPU">
              </a>
          </div>
          <div class="content border_left border_right">
              <p><a target="_blank" href="https://blog.csdn.net/xhc6666/category_12547285.html?spm=1001.2014.3001.5482">版权所有 © 程序猿online</a></p>
              <p>地址：XXXXXXXXXXXXXX 邮编 XXXXXX</p>
              <p>管理员信箱：2207156200@qq.com</p>
              <p>京公网安备：XXXXXXXXXXXXXXX | 京ICP备：XXXXXXX</p>
          </div>
          <div class="share border_right">
              <ul>
                  <li><a href="#"></a></li>
                  <li><a href="#" style="background-position: -35px 0;"></a></li>
                  <li><a href="#" style="background-position: -70px 0;"></a></li>
                  <li><a href="#" style="background-position: 0 -35px;"></a></li>
                  <li><a href="#" style="background-position: -35px -35px;"></a></li>
                  <li><a href="#" style="background-position: -70px -35px;"></a></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p a{
  color: white;
}
img{
  width: 150px;
  height: 100px;
}

.bottom {
  color: rgb(255, 255, 255);
  margin-top: 20px;
  height: 130px;
  padding: 15px 0;
  background-image: linear-gradient(to bottom, rgb(20, 90, 155), rgb(15, 105, 180), rgb(17, 116, 200));
}
.bottom_layout{
  display: flex;
}
.logo{
  flex: 1;
  padding: 10px 80px;
}
.content{
  flex: 4;
  width: 500px;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
}
.share{
  flex: 2;
  width: 240px;
}
.share ul{
  display: flex;
  flex-wrap: wrap;

  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  list-style: none;
}
.share li{
  flex: 0 0 33%;
  width: 80px;
  height: 60px;
  text-align: center;
}
.share a{
  display: inline-block;
  width: 30px;
  height: 30px;
  background: #ffffff url(@/assets/images/share_icon.png) no-repeat;
  background-size:100px 135px;
  border-radius:20px;
  margin: 15px 0 0 0;
}
</style>
