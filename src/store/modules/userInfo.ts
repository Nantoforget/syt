import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import {
  getUserInfoApi,
  type userInfoType,
  userLoginApi,
  VipUserInfoType
} from "@/apis/user";
import { removeToken, setToken } from "@/utils";

export const useUserInfoStore = defineStore("userInfo", () => {
  /** 是否显示login页面 */
  const isDrawer = ref<boolean>(false);
  /** 用户信息 */
  const userInfo = reactive<userInfoType>(
    localStorage.getItem("USERINFO")
      ? JSON.parse(localStorage.getItem("USERINFO") as string)
      : { token: "", name: "" }
  );
  /** 用户登录 */
  const userLogin = async (user: {
    username: string;
    pass: string;
  }): Promise<number> => {
    let res = await userLoginApi(user);
    Object.assign(userInfo, res.data);
    setToken(JSON.stringify(res.data.token));
    localStorage.setItem("USERINFO", JSON.stringify(res.data));
    return res.code;
  };
  const vipUserInfo = ref<VipUserInfoType>();
  /** 获取会员信息 */
  const getUserInfo = async () => {
    let res = await getUserInfoApi();
    vipUserInfo.value = res.data;
  };

  /**登出*/
  const logout = () => {
    removeToken();
    localStorage.removeItem("USERINFO");
  };
  return {
    /** 是否显示login页面,默认false */
    isDrawer,
    /** 用户登录函数 */
    userLogin,
    /** 用户信息 */
    userInfo,
    /** 用户登出 */
    logout,
    /** 获取会员信息 */
    getUserInfo,
    /** 会员信息 */
    vipUserInfo
  };
});
