//尚医通首页请求

import { request } from "@/utils";
import { LevelAndDistrictType, ResHospitalType } from "@/types/modules/home";

enum HomeAPI {
  /**首页*/
  HomePagesAndHosCodeAPI = "/hosp/hospital/",
  /** home等级数据请求地址 */
  HomeLevelAPI = "/cmn/dict/findByDictCode/Hostype",
  /**
   * home地区数据请求地址
   */
  HomeDistrictAPI = "/cmn/dict/findByDictCode/Beijin"
}

/**
 * 首页home的分页展示
 * @param page 当前页数
 * @param limit 几条数据
 */
export const getHomepagesAPI = (page, limit) => {
  return request.get<any, ResDataType<ResHospitalType>>(
    `${HomeAPI.HomePagesAndHosCodeAPI}${page}/${limit}`
  );
};

/**
 * 获取首页home的等级列表，等级这里取Hostype
 *
 */
export const getHomeLevelAPI = () => {
  return request.get<any, ResDataType<LevelAndDistrictType[]>>(
    `${HomeAPI.HomeLevelAPI}`
  );
};
/**
 * 获取首页home的地区列表，等级这里取Beijin
 */
export const getHomeDistrictAPI = () => {
  return request.get<any, ResDataType<LevelAndDistrictType[]>>(
    `${HomeAPI.HomeDistrictAPI}`
  );
};
