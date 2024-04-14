import { request } from "@/utils";
import { HomeApiUrl, HospitalApiUrl } from "@/apis";
import type { HospitalContentType } from "@/types/modules/home";

import type { DepartmentsType, BookingRuleType } from "@/types/modules/detail";
import { Doctor } from "@/types/modules/detail";

/**
 * 预约挂号接口
 * @param hoscode 医院code
 * @returns 预约信息
 */
export const getHospitalAppointmentAPI = (hoscode: string) => {
  return request.get<
    any,
    ResDataType<{ hospital: HospitalContentType; bookingRule: BookingRuleType }>
  >(`${HomeApiUrl.HomePagesAndHosCodeAPI}/${hoscode}`);
};
/**
 * 获取科室列表
 * @param hoscode 医院code
 * @returns 科室列表
 */
export const getHospitalDepartmentAPI = (hoscode: string) => {
  return request.get<any, ResDataType<DepartmentsType[]>>(
    `${HospitalApiUrl.DetailDepartmentApiUrl}/${hoscode}`
  );
};
/**
 * 获取可预约排班数据
 * @param params 请求参数，
 *    page: 页数;
 *    limit: 每页条数;
 *    hoscode: 医院code;
 *    depcode: 科室code;
 */
export const getBookingScheduleApi = (params: BookingRuleParamsType) => {
  const { page, limit, hoscode, depcode } = params;
  return request.get<any, ResDataType<BookingRuleType>>(
    `${HospitalApiUrl.HospitalBookingScheduleApiUrl}/${page}/${limit}/${hoscode}/${depcode}`
  );
};
interface BookingRuleParamsType {
  page?: number;
  limit?: number;
  hoscode: string;
  depcode: string;
  workDate?: string;
}

/**
 * 获取排班数据
 * @param params 请求参数，
 *    hoscode: 医院code;
 *    depcode: 科室code;
 *    workDate: 时间
 */
export const getScheduleApi = (params: BookingRuleParamsType) => {
  const { hoscode, depcode, workDate } = params;
  return request.get<any, ResDataType<Doctor[]>>(
    `${HospitalApiUrl.HospitalScheduleApiUrl}/${hoscode}/${depcode}/${workDate}`
  );
};
