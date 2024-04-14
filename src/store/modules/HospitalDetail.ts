import { defineStore } from "pinia";

import { ref, reactive } from "vue";
import {
  getHospitalAppointmentAPI,
  getHospitalDepartmentAPI
} from "@/apis/hospital";
import type {
  HospitalContentType,
  BookingRuleType
} from "@/types/modules/home";
import type { DepartmentsType } from "@/types/modules/detail";
import { RouteRecordName } from "vue-router";

/** 医院详情仓库 */
export const useHospitalDetailStore = defineStore("hospitalDetail", () => {
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
  const activeName = ref<RouteRecordName>("Reserve");

  /** 从路由参数医院编码 */
  const hosCode = ref<string>("");

  /** 获取医院预约挂号信息 */
  let hospitalBookingRule = reactive<{
    bookingRule: BookingRuleType;
    hospital: HospitalContentType;
  }>({
    /** 预约挂号规则 */
    bookingRule: {} as BookingRuleType,
    /** 医院信息 */
    hospital: {} as HospitalContentType
  });

  /** 获取医院预约挂号信息的函数 */
  const getHospitalAppointment = async () => {
    let response = await getHospitalAppointmentAPI(hosCode.value);
    hospitalBookingRule.hospital = response.data.hospital;
    hospitalBookingRule.bookingRule = response.data.bookingRule;
  };

  /** 获取医院科室信息 */
  const departmentList = ref<DepartmentsType[]>([]);

  /** 获取医院科室信息列表的函数 */
  const getHospitalDepartment = async () => {
    let response = await getHospitalDepartmentAPI(hosCode.value);
    departmentList.value = response.data;
  };

  return {
    /** tab数组 */
    tabs,
    /** tab的选中 */
    activeName,
    /** 从路由参数医院编码 */
    hosCode,
    /** 获取医院预约挂号信息 */
    hospitalBookingRule,
    /** 获取医院预约挂号信息的函数 */
    getHospitalAppointment,
    /** 获取医院科室信息 */
    departmentList,
    /** 获取医院科室信息列表的函数 */
    getHospitalDepartment
  };
});
