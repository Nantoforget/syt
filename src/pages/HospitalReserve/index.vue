<template>
  <Info :hospitalInfo="hospitalBookingRule" />
  <Departments :departmentList="departmentList" />
</template>

<script setup lang="ts">
import Info from "@/pages/HospitalReserve/components/Info.vue";
import Departments from "@/pages/HospitalReserve/components/Departments.vue";
import { storeToRefs } from "pinia";
import { useHospitalDetailStore } from "@/store/modules/HospitalDetail";

/** 从hospitalDetailStore获取医院预约挂号信息和医院科室信息 */
const hosDetailStore = useHospitalDetailStore();
/**解构 医院code从路由参数取出 医院预约挂号信息和医院科室信息 */
const { hospitalBookingRule, departmentList } = storeToRefs(hosDetailStore);
/** 解构两个方法  获取医院预约挂号信息的函数 获取医院科室信息列表的函数 */
</script>

<script lang="ts">
export default {
  name: "HospitalReserve"
};
</script>

<style scoped lang="scss"></style>
