<template>
  <div class="departments">
    <el-affix :offset="120">
      <div class="title">选择科室</div>
      <div class="name">
        <div class="my-link active">国际医疗不</div>
        <div class="my-link" v-for="inte in 8">妇产科</div>
      </div>
    </el-affix>
    <div class="list">
      <div class="item checked_item">
        <div class="item_title">专科</div>
        <div class="items">
          <div class="my-link" v-for="item in 21">多发性硬性专科门诊</div>
        </div>
      </div>
      <div class="item" v-for="inte in 6">
        <div class="item_title">专科</div>
        <div class="items">
          <div class="my-link" v-for="item in 21">多发性硬性专科门诊</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "Departments"
};
</script>

<style scoped lang="scss">
.departments {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
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
  .title {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .name {
    width: 150px;
    height: 370px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 0;
    margin-right: 30px;
    background: #f4f9ff;

    div {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      color: #333;
      &.active {
        background: #fff;
        font-weight: bold;
        font-size: 16px;
      }
    }
    div:hover {
      background: #fff;
    }
  }
  .name:hover {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 10px;
    }
  }
  .list {
    flex: 1;
    margin-top: 50px;
    .item {
      width: 100%;
      padding: 0 0 10px 20px;
      margin-bottom: 20px;
      .item_title {
        color: #333;
        font-size: 14px;
        font-weight: bold;
        position: relative;
        margin: 0 0 20px 6px;
        padding-top: 15px;
      }
      .item_title:before {
        content: "";
        width: 4px;
        height: 14px;
        background: #4990f1;
        border-radius: 5px;
        position: absolute;
        top: 15px;
        left: -8px;
      }
      .items {
        font-size: 14px;
        color: #666;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        div {
          margin: 10px 0;
        }
      }
      &.checked_item {
        background: #fafafa;
      }
    }
  }
}
</style>
