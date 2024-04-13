import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { type userInfoType, userLoginApi } from "@/apis/user";
import { setToken } from "@/utils";

export const useUserInfoStore = defineStore("userInfo", () => {
  /** 是否显示login页面 */
  const isDrawer = ref<boolean>(false);
  /** 用户信息 */
  const userInfo = reactive<userInfoType>(
    localStorage.getItem("USERINFO")
      ? JSON.parse(localStorage.getItem("USERINFO"))
      : { token: "", name: "" }
  );
  /** 用户登录 */
  const userLogin = async (user: {
    username: string;
    pass: string;
  }): number => {
    let res = await userLoginApi(user);
    Object.assign(userInfo, res.data);
    setToken(JSON.stringify(res.data.token));
    localStorage.setItem("USERINFO", JSON.stringify(res.data));
    return res.code;
  };

  return {
    /** 是否显示login页面,默认false */
    isDrawer,
    /** 用户登录函数 */
    userLogin,
    /** 用户信息 */
    userInfo
  };
});
