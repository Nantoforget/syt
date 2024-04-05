<template>
  <div class="bottom-main">
    <div class="bottom">
      <div class="bottom-left">
        <span class="record">京ICP备13018369号</span>
        <span class="phone">电话挂号010-56253825</span>
      </div>
      <div class="bottom-right">
        <span class="link">联系我们</span>
        <span class="link">合作伙伴</span>
        <span class="link">用户协议</span>
        <span class="link">隐私协议</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "HospitalBottom"
};
</script>

<style scoped lang="scss">
.bottom-main {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #fafafa;
  .bottom {
    width: 1200px;
    min-width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    .bottom-left {
      .record {
        color: #bbb;
        margin-right: 50px;
      }
    }
    .bottom-right {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      width: 341px;
      color: #666;
      .link {
        display: inline-block;
      }
      .link:hover {
        color: skyblue;
      }
    }
  }
}
</style>
