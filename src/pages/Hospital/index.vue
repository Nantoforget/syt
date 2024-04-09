<template>
  <div class="hos_content">
    <div class="left_list">
      <div
        v-for="tab in tabs"
        class="list text my-link"
        :class="{ active: activeName === tab.name }"
        @click="goTo(tab.name)"
      >
        {{ tab.title }}
      </div>
    </div>
    <div class="right_info">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface TabsType {
  title: string;
  name: string;
}
const tabs: TabsType[] = [
  {
    title: "预约挂号",
    name: "Reserve"
  },
  {
    title: "医院详情",
    name: "Detail"
  },
  {
    title: "预约须知",
    name: "Notice"
  },
  {
    title: "停诊信息",
    name: "Stop"
  },
  {
    title: "查询/取消",
    name: "Query"
  }
];

/** 选中tab，默认为第一项 */
const activeName = ref<string>(tabs[0].name);
/** 跳转页面 */
const goTo = (name: string) => {
  if (name === "Stop") return;
  if (name === "Query") return;
  /** 切换tab */
  activeName.value = name;
  /** 跳转页面 */
  router.push({ name });
};
</script>

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
        background: #4490f1;
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
