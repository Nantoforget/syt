/**等级地区数据类型*/
export interface LevelAndDistrictType {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: {};
  parentId: number;
  name: string;
  value: string;
  dictCode: null;
  hasChildren: false;
}

/**home医院列表数据类型*/
export interface HospitalContentType {
  address: string;
  bookingRule: BookingRuleType;
  cityCode: string;
  createTime: string;
  districtCode: string;
  hoscode: string;
  hosname: string;
  hostype: string;
  id: string;
  intro: null;
  isDeleted: number;
  logoData: string;
  param: {
    fullAddress: string;
    hostypeString: string;
  };
  provinceCode: string;
  route: string;
  status: number;
  updateTime: string;
}
/**bookingRule，rule数组是预约取号地点*/
interface BookingRuleType {
  cycle: number;
  quitDay: number;
  quitTime: string;
  releaseTime: string;
  rule: string[];
  stopTime: string;
}

/**home医院列表返回的data数据类型*/
export interface ResHospitalType {
  content: HospitalContentType[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    sort: sort;
    unpaged: number;
  };
  size: number;
  sort: sort;
  totalElements: number;
  totalPages: number;
}
interface sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
