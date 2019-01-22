<template>
  <div class="page">
    <img class="page_img" width="500px" height="500px" src="./image/404.png" alt="404 page not found">
    <div class="page_title">
      <h3>抱歉，你访问的页面不存在</h3>
      <p class="page_title_description">你要找的页面没有找到，请<el-button type="text" @click="$router.replace({ path: '/' })">返回首页</el-button>继续浏览</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background: #f8f8f8;
  background-blend-mode: multiply,multiply;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .page_img {
    max-width: 360px;
    max-height: 360px;
  }
  .page_title {
    margin-left: 50px;
    h3 {
      color: #333;
    }
    .page_title_description {
      color: #b7b7b7;
    }
  }
}
</style>
