/** 路由守卫 */
import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false });
import store from "@/store";
import { useUserInfoStore } from "@/store/modules/userInfo.ts";

const userInfoStore = useUserInfoStore(store);

/** 不进行token检查的白名单 */
const whiteList: string[] = ["Home", "Reserve", "Detail", "Notice"];

/** 路由守卫 */
router.beforeEach((to, from, next): void => {
  NProgress.start();
  const token = userInfoStore.userInfo.token;
  if (token) {
    /** 是否有用户信息 */
    const hasLogin = !!userInfoStore.userInfo.name;
    if (hasLogin) {
      next();
    } else {
      /** 没有用户信息，重新登陆 */
      userInfoStore.isDrawer = true;
    }
  } else {
    /** 没有token */
    if (whiteList.indexOf(to.name as string) !== -1) {
      next();
    } else if (!from.name) {
      next({ name: "Home" });
    } else {
      userInfoStore.isDrawer = true;
      NProgress.done();
    }
  }
});
/** 路由加载后 */
router.afterEach(() => {
  NProgress.done();
});
