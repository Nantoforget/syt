import { defineStore } from "pinia";

import { ref, reactive } from "vue";
import {
  getHospitalAppointmentAPI,
  getHospitalDepartmentAPI
} from "@/apis/detail";
import type {
  HospitalContentType,
  BookingRuleType
} from "@/types/modules/home";
import type { DepartmentsType } from "@/types/modules/detail";

/** 医院详情仓库 */
export const useHospitalDetailStore = defineStore("hospitalDetail", () => {
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
