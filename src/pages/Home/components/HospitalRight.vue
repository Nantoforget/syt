<template>
  <el-affix target=".right" :offset="100">
    <div class="common-dept">
      <div class="title">
        <div class="text">常见科室</div>

        <div class="all">
          全部
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </div>
      <div class="dept-list">
        <div class="dept-list__item" v-for="item in 12">神经内科</div>
      </div>
    </div>
    <div class="space">
      <div class="title">
        <div class="text">平台公告</div>
        <div class="all">
          全部
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </div>
      <div class="space-list">
        <div class="notice-wrapper" v-for="item in 3">
          <div class="point"></div>
          <span>关于延长北京大学国关于延长北京大学国</span>
        </div>
      </div>
    </div>
    <div class="space suspend-notice-list">
      <div class="title">
        <div class="text">平台公告</div>
        <div class="all">
          全部
          <el-icon><ArrowRightBold /></el-icon>
        </div>
      </div>
      <div class="space-list">
        <div class="notice-wrapper" v-for="item in 3">
          <div class="point"></div>
          <span>关于延长北京大学国关于延长北京大学国</span>
        </div>
      </div>
    </div>
  </el-affix>
</template>

<script setup lang="ts">
import { ArrowRightBold } from "@element-plus/icons-vue";
</script>

<script lang="ts">
export default {
  name: "HospitalRight"
};
</script>

<style scoped lang="scss">
:deep(.el-affix) {
  transition: all 0.3s ease;
}
$myBg: #7eabff;
.common-dept {
  max-width: 100%;
  overflow: hidden;
  .dept-list {
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    .dept-list__item {
      margin-top: 10px;
      color: #333;
      font-size: 14px;
      cursor: pointer;
    }
    .dept-list__item:hover {
      color: #7eabff;
    }
  }
}
.space {
  margin: 50px 0 0 30px;
  max-width: 100%;
  overflow: hidden;
  .space-list {
    color: #333;
    font-size: 14px;
    margin-top: 20px;
    .notice-wrapper {
      display: flex;
      align-items: center;
      .point {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: $myBg;
        margin-right: 7px;
      }
      span {
        display: block;
        user-select: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all;
        width: 100%;
        margin: 10px 0;
      }
      span:hover {
        color: #7eabff;
      }
    }
  }
}
.suspend-notice-list {
  $myBg: #ffaa51;
  .point {
    background: $myBg !important;
  }
}
//公用的title样式
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 0 0;
  .text {
    color: #333;
    font-size: 16px;
    font-weight: bold;
    font-family:
      Helvetica Neue,
      Helvetica,
      Arial,
      PingFang SC,
      Hiragino Sans GB,
      Heiti SC,
      Microsoft YaHei,
      WenQuanYi Micro Hei,
      sans-serif;
  }
  .all {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    :deep(.el-icon) {
      color: #4490f1;
      margin-left: 3px;
    }
  }
}
</style>
