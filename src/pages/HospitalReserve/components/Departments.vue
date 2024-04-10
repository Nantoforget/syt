<template>
  <div class="departments">
    <el-affix :offset="70">
      <div class="title">选择科室</div>
      <el-scrollbar height="500px">
        <div class="name">
          <div
            class="my-link"
            :class="{ active: depActive === index }"
            v-for="(dep, index) in departmentList"
            :key="dep.depcode"
            @click="changeDep(index)"
          >
            {{ dep.depname }}
          </div>
        </div>
      </el-scrollbar>
    </el-affix>

    <div id="list" class="list">
      <el-affix :offset="70">
        <div class="line"></div>
      </el-affix>
      <div
        class="item"
        :class="{ checked_item: depActive === index }"
        v-for="(deps, index) in departmentList"
        :key="deps.depcode"
      >
        <div class="item_title">{{ deps.depname }}</div>
        <div class="items">
          <div class="my-link" v-for="dep in deps.children" :key="dep.depcode">
            {{ dep.depname }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { DepartmentsType } from "@/types/modules/detail";
import { ref } from "vue";

/** 从父组件接受的科室列表 */
defineProps<{
  departmentList: DepartmentsType[];
}>();

/** 选中科室，默认选中第一个 */
let depActive = ref<number>(0);
/** 选中科室,修改保存的下标 */
const changeDep = (index: number) => {
  depActive.value = index;
};
</script>

<script lang="ts">
export default {
  name: "Departments"
};
</script>

<style scoped lang="scss">
.departments {
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
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
    margin-bottom: 15px;
    margin-top: 50px;
  }

  .name {
    width: 150px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0 10px 0;
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

  .list {
    flex: 1;
    margin: 0 0 0 30px;
    height: 500px;
    .line {
      width: 100%;
      height: 80px;
      background: #fff;
    }
    .item:last-child {
      padding-bottom: 70px;
    }
    .item {
      width: 100%;
      padding: 0 0 10px 20px;
      margin-bottom: 20px;
      overflow: hidden;
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
