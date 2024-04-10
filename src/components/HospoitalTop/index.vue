<template>
  <div class="top-main">
    <div class="top">
      <div class="top-left" @click="goToHome">
        <div class="img">
          <img src="../../assets/images/logo.png" alt="" />
        </div>
        <div class="text my-link">尚医通 预约挂号统一平台</div>
      </div>
      <div class="top-search">
        <el-input :prefix-icon="Search" placeholder="点击搜索医院">
          <template #append>搜索</template>
        </el-input>
      </div>
      <div class="top-right">
        <div class="help my-link">帮助中心</div>
        <div v-if="!isLogin" class="login my-link" @click="goLogin">
          登录/注册
        </div>
        <el-menu v-else :ellipsis="false" mode="horizontal">
          <el-sub-menu index="1">
            <template #title>13412345678</template>
            <el-menu-item index="1-1">实名认证</el-menu-item>
            <el-menu-item index="1-2">挂号订单</el-menu-item>
            <el-menu-item index="1-3">就诊人管理</el-menu-item>
            <el-menu-item index="1-4">退出登录</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { useUserInfoStore } from "@/store/modules/userInfo.ts";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const { isDrawer } = storeToRefs(useUserInfoStore());

const router = useRouter();
/** 点击图标返回首页 */
const goToHome = () => {
  router.push("/home");
};
/** 点击登录显示登录页面 */
const goLogin = () => {
  isDrawer.value = true;
};
/** 是否登录的标识 */
const isLogin = ref<boolean>(false);
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
      align-items: center;
      .login {
        margin-left: 50px;
      }
      :deep(.el-menu) {
        border: none;
      }
    }
  }
}
</style>
