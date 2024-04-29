/**科室数据类型 */
export interface DepartmentsType {
  depname: string;
  depcode: string;
  children: ChildrenType[];
}
interface ChildrenType {
  depname: string;
  depcode: string;
  children: null;
}

/** 可预约排班数据类型 */
export interface BookingRuleTrueType {
  total: number;
  bookingScheduleList: BookingScheduleType[];
  baseMap: BaseMap;
}
/** 科室门诊表 */
export interface BookingScheduleType {
  workDate: string;
  workDateMd: string;
  dayOfWeek: string;
  docCount: number;
  reservedNumber: number;
  availableNumber: number;
  status: number;
}
/** 医院专科信息 */
export interface BaseMap {
  workDateString: string;
  releaseTime: string;
  bigname: string;
  stopTime: string;
  depname: string;
  hosname: string;
}
/** 医生号源信息 */
export interface Doctor {
  id: string;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {
    dayOfWeek: string;
    depname: string;
    hosname: string;
  };
  hoscode: string;
  depcode: string;
  title: string;
  docname: string;
  skill: string;
  workDate: string;
  workTime: number;
  reservedNumber: number;
  availableNumber: number;
  amount: number;
  status: number;
  hosScheduleId: string;
}
