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
