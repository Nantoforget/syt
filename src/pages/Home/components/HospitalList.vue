<template>
  <div class="top">
    <div class="text">医院</div>
    <div class="check">
      <div class="title">等级:</div>
      <div class="list">
        <el-link class="checked" :underline="false">全部</el-link>
        <el-link v-for="item in 50" :underline="false">全部不</el-link>
      </div>
    </div>
    <div class="check">
      <div class="title">地区:</div>
      <div class="list">
        <el-link class="checked" :underline="false">全部</el-link>
        <el-link v-for="item in 50" :underline="false">全部不</el-link>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="card">
      <div class="info">
        <div class="hospital-title">北京人民医院</div>
        <div class="bottom-container">
          <div class="icon-wrapper">三级甲等</div>
          <div class="icon-wrapper">
            <el-icon><Clock /></el-icon>
            每天08:30放号
          </div>
        </div>
      </div>
      <div class="img">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock } from "@element-plus/icons-vue";
</script>

<script lang="ts">
export default {
  name: "HospitalList"
};
</script>

<style scoped lang="scss">
.top {
  .text {
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
  }
  .check {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #999;
    .list {
      flex: 1;
      color: #666 !important;
      :deep(.el-link) {
        margin: 0 0 10px 26px;
      }
      .checked {
        color: #4490f1;
        font-weight: bold;
      }
    }
  }
}
.bottom {
  .card {
    .img {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
</style>
