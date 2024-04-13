/** 首页请求路径 */
export enum HomeApiUrl {
  /**首页*/
  HomePagesAndHosCodeAPI = "/hosp/hospital/",
  /** home等级数据请求地址 */
  HomeLevelAPI = "/cmn/dict/findByDictCode/Hostype",
  /**
   * home地区数据请求地址
   */
  HomeDistrictAPI = "/cmn/dict/findByDictCode/Beijin",
  /** 搜索医院路径 */
  HomeHospitalAPI = "/hosp/hospital/findByHosname"
}
/**详情也请求地址 */
export enum DetailApiUrl {
  /**科室列表地址 */
  DetailDepartmentApiUrl = "/hosp/hospital/department"
}

/** 用户登录请求路径 */
export enum UserApiUrl {
  /** 验证码路径 */
  UserAuthCodeUrl = "/sms/send",
  /** 用户登录路径 */
  UserLoginUrl = "/user/login"
}
