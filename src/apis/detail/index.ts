import { request } from "@/utils";
import { HomeApiUrl, DetailApiUrl } from "@/apis";
import type {
  HospitalContentType,
  BookingRuleType
} from "@/types/modules/home";
import type { DepartmentsType } from "@/types/modules/detail";

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
    `${DetailApiUrl.DetailDepartmentApiUrl}/${hoscode}`
  );
};
