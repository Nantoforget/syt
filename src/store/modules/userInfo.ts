import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfoStore = defineStore("userInfo", () => {
  /** 是否显示login页面 */
  const isDrawer = ref<boolean>(false);

  return {
    /** 是否显示login页面,默认false */
    isDrawer
  };
});
