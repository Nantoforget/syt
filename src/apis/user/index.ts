import { request } from "@/utils";
import { UserApiUrl } from "@/apis";

/**
 * 获取登录验证码
 * @param authCode 手机号
 */
export const getAuthCodeApi = (authCode: string) => {
  return request.get<any, ResDataType<string>>(
    `${UserApiUrl.UserAuthCodeUrl}/${authCode}`
  );
};
/**
 * 用户登录
 * @param user username:手机号 pass:验证码
 */
export const userLoginApi = (user: { username: string; pass: string }) => {
  return request.post<any, ResDataType<userInfoType>>(UserApiUrl.UserLoginUrl, {
    code: user.pass,
    phone: user.username
  });
};
export interface userInfoType {
  name: string;
  token: string;
}
/** 获取会员信息 */
export const getUserInfoApi = () => {
  return request.get<any, ResDataType<VipUserInfoType>>(UserApiUrl.UserInfoUrl);
};
/** 会员信息数据类型 */
export interface VipUserInfoType {
  authStatus: number;
  certificatesNo: string;
  certificatesType: string;
  certificatesUrl: string;
  createTime: string;
  id: number;
  isDeleted: number;
  name: string;
  nickName: string | null;
  openid: null | number;
  param: {};
  phone: string;
  status: number;
  updateTime: string;
}
