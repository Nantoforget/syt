//尚医通首页请求

import { request } from "@/utils";
import {
  HospitalContentType,
  LevelAndDistrictType,
  ResHospitalType
} from "@/types/modules/home";

//引入首页请求的路径
import { HomeApiUrl } from "@/apis";

/**
 * 首页home的分页展示
 * @param page 当前页数
 * @param limit 几条数据
 * @param hostype 等级
 * @param districtCode 地区
 */
export const getHomepagesAPI = (
  page: number,
  limit: number,
  hostype: string = "",
  districtCode: string = ""
) => {
  const hostypeAndDistrictCode = hostype && districtCode;
  if (hostypeAndDistrictCode) {
    return request.get<any, ResDataType<ResHospitalType>>(
      `${HomeApiUrl.HomePagesAndHosCodeAPI}${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
    );
  }
  if (hostype !== "")
    return request.get<any, ResDataType<ResHospitalType>>(
      `${HomeApiUrl.HomePagesAndHosCodeAPI}${page}/${limit}?hostype=${hostype}`
    );
  if (districtCode !== "")
    return request.get<any, ResDataType<ResHospitalType>>(
      `${HomeApiUrl.HomePagesAndHosCodeAPI}${page}/${limit}?districtCode=${districtCode}`
    );
  return request.get<any, ResDataType<ResHospitalType>>(
    `${HomeApiUrl.HomePagesAndHosCodeAPI}${page}/${limit}`
  );
};

/**
 * 获取首页home的等级列表，等级这里取Hostype
 *
 */
export const getHomeLevelAPI = () => {
  return request.get<any, ResDataType<LevelAndDistrictType[]>>(
    `${HomeApiUrl.HomeLevelAPI}`
  );
};
/**
 * 获取首页home的地区列表，等级这里取Beijin
 */
export const getHomeDistrictAPI = () => {
  return request.get<any, ResDataType<LevelAndDistrictType[]>>(
    `${HomeApiUrl.HomeDistrictAPI}`
  );
};
/**
 * home搜索医院
 * @param searchText 搜索关键词
 */
export const searchHospitalAPI = (searchText: string) => {
  return request.get<any, ResDataType<HospitalContentType[]>>(
    `${HomeApiUrl.HomeHospitalAPI}/${searchText}`
  );
};
