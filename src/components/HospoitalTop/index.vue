<template>
  <div class="top-main">
    <div class="top">
      <div class="top-left">
        <div class="img">
          <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div class="text">尚医通 预约挂号统一平台</div>
      </div>
      <div class="top-search">
        <el-input :prefix-icon="Search" placeholder="点击搜索医院">
          <template #append>搜索</template>
        </el-input>
      </div>
      <div class="top-right">
        <div class="help my-link">帮助中心</div>
        <div class="login my-link">登录/注册</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>

<script lang="ts">
export default {
  name: "HospitalTop"
};
</script>

<style scoped lang="scss">
.top-main {
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: fixed;
  top: 0;
  .top {
    width: 1200px;
    min-width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    .top-left {
      display: flex;
      align-items: center;
      font-size: 22px;
      color: #4490f1;
      .img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .top-search {
      width: 301px;
      height: 61px;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #eee;
      :deep(.el-input) {
        width: 100%;
        height: 100%;
      }
      :deep(.el-input) input::-webkit-input-placeholder {
        font-size: 16px;
      }
      :deep(.el-input__wrapper) {
        box-shadow: none;
      }
      :deep(.el-input-group__append) {
        font-size: 16px;
        background-color: #fff;
        box-shadow: none;
        color: #4490f1;
        font-weight: bold;
      }
    }
    .top-right {
      display: flex;
      color: #666;
      font-size: 14px;
      .login {
        margin-left: 50px;
      }
    }
  }
}
</style>
