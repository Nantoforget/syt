<template>
  <div class="hos_content">
    <div class="left_list">
      <div class="list text my-link active">预约挂号</div>
      <div v-for="item in 4" class="list text my-link">预约挂号</div>
    </div>
    <div class="right_info">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "Hospital"
};
</script>

<style scoped lang="scss">
.hos_content {
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 100px;
  .left_list {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
      font-size: 14px;

      &.active {
        color: #4490f1;
        font-size: 16px;
        font-weight: bold;
        position: relative;
      }
      &.active::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background: blue;
        position: absolute;
        top: 2px;
        left: -20px;
      }
    }
  }
  .right_info {
    flex: 1;
  }
}
</style>
