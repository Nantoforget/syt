<template>
  <div class="login">
    <el-drawer
      v-model="isDrawer"
      :show-close="true"
      :lock-scroll="false"
      direction="ttb"
      :with-header="true"
      size="550"
      title="用户登录"
      @close="closeDrawer"
    >
      <div class="container">
        <div class="login-form">
          <el-card v-if="isShow === 'iphone'">
            <el-form
              ref="ruleFormRef"
              style="max-width: 600px"
              :model="ruleForm"
              status-icon
              label-width="auto"
              class="demo-ruleForm"
              :rules="rules"
            >
              <el-form-item prop="username">
                <el-icon class="my-icon"><User /></el-icon>
                <el-input
                  v-model="ruleForm.username"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入手机号"
                />
              </el-form-item>
              <el-form-item prop="pass">
                <el-icon class="my-icon"><Lock /></el-icon>
                <el-input
                  v-model="ruleForm.pass"
                  type="text"
                  autocomplete="off"
                  placeholder="请输入验证码"
                />
              </el-form-item>
              <el-form-item>
                <el-button
                  :disabled="authCode !== 0"
                  style="height: 35px; z-index: 9"
                  @click="getAuthCode"
                >
                  获取验证码
                  <el-button
                    v-if="authCode !== 0"
                    disabled
                    style="
                      height: 30px;
                      padding-right: 5px;
                      border: none;
                      margin-right: 0;
                    "
                  >
                    {{ authCode }}s
                  </el-button>
                </el-button>
              </el-form-item>
              <el-form-item>
                <el-button
                  @click="login(ruleFormRef)"
                  type="primary"
                  style="width: 100%; height: 40px"
                  v-if="isLogging"
                >
                  登录
                </el-button>
                <el-button
                  v-else
                  type="primary"
                  style="width: 100%; height: 40px"
                >
                  登录中...
                </el-button>
              </el-form-item>
            </el-form>
            <div style="margin-top: 115px" class="wechat">
              <div class="img" @click="changeLogin('wx')">
                <svg
                  t="1712751891279"
                  class="icon"
                  viewBox="0 0 1061 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="4234"
                  width="32"
                  height="32"
                >
                  <path
                    d="M516.8 335.093c25.44 0 42.72-17.28 42.72-42.72 0-25.92-17.28-42.72-42.72-42.72-25.44 0-51.36 16.8-51.36 42.72 0 25.44 25.92 42.72 51.36 42.72z m-239.04-85.44c-25.44 0-51.36 16.8-51.36 42.72 0 25.44 25.92 42.72 51.36 42.72 25.44 0 42.72-17.28 42.72-42.72 0-25.92-16.8-42.72-42.72-42.72z m749.76 358.56c0-134.88-125.28-250.08-278.88-262.08 0-1.44 0.48-3.36 0-5.28-31.2-143.52-185.76-252-360-252C192.32 88.853 32 226.133 32 394.613c0 90.72 46.08 172.32 133.92 236.64l-30.72 91.68c-1.92 5.76 0 12.48 4.8 16.8 2.88 2.4 6.72 3.84 10.08 3.84 2.4 0 4.8-0.48 6.72-1.44l114.72-57.12 13.92 2.88c35.04 7.2 65.76 13.44 103.2 13.44 11.04 0 41.28-3.84 44.16-7.2 41.28 103.2 155.04 178.08 288.96 178.08 34.08 0 69.12-8.16 100.32-15.84l88.32 48.48c2.4 1.44 4.8 1.92 7.68 1.92 3.36 0 7.2-0.96 9.6-3.36 4.8-3.84 6.72-10.56 5.28-16.32l-22.56-74.88c75.36-61.44 117.12-132.96 117.12-204z m-609.12 50.88c-9.6 0.96-19.68 1.44-29.28 1.44-33.12 0-60.96-5.76-93.6-12.48l-18.72-3.84c-3.36-0.48-6.72-0.48-9.6 1.44l-83.04 41.28 21.6-64.8c1.92-6.24 0-13.44-5.76-17.28-83.04-57.6-125.28-128.16-125.28-209.76 0-145.92 141.12-264.96 314.4-264.96 153.12 0 288.96 93.12 316.8 216.96-160.8 1.92-290.4 115.2-290.4 253.44 0 20.16 2.88 39.84 8.16 58.56h-5.28z m456.48 124.32c-4.8 3.84-7.2 10.08-5.28 15.84l13.92 46.56-57.6-31.2c-2.4-1.44-4.8-1.92-7.2-1.92-1.44 0-2.4 0-3.84 0.48-30.72 7.68-62.88 15.84-93.6 15.84-144 0-261.12-98.88-261.12-220.8s117.12-220.8 261.12-220.8c141.12 0 260.64 101.28 260.64 220.8 0.96 60.96-37.44 123.36-107.04 175.2z m-247.2-286.08c-17.28 0-34.08 17.28-34.08 34.08 0 17.28 17.28 34.08 34.08 34.08 25.44 0 42.72-16.8 42.72-34.08 0-17.28-16.8-34.08-42.72-34.08z m187.68 0c-16.8 0-34.08 17.28-34.08 34.08 0 17.28 17.28 34.08 34.08 34.08 25.44 0 42.72-16.8 42.72-34.08 0-17.28-17.28-34.08-42.72-34.08z"
                    p-id="4235"
                    fill="#1afa29"
                  ></path>
                </svg>
              </div>
              <div class="text">微信扫码登录</div>
            </div>
          </el-card>
          <el-card v-if="isShow === 'wx'">
            <div class="login-wx">
              <div class="text">微信登陆</div>
              <div class="img">
                <img
                  src="https://open.weixin.qq.com/connect/qrcode/091GTAAy1HAhGa1n"
                  alt=""
                />
              </div>
              <div class="info">使用微信扫一扫登录</div>
            </div>
            <div class="wechat">
              <div class="img" @click="changeLogin('iphone')">
                <svg
                  t="1712753970870"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6229"
                  width="32"
                  height="32"
                >
                  <path
                    d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z"
                    fill="#d81e06"
                    p-id="6230"
                  ></path>
                  <path
                    d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z"
                    fill="#d81e06"
                    p-id="6231"
                  ></path>
                </svg>
              </div>
              <div class="text">手机短信验证码登录</div>
            </div>
          </el-card>
        </div>
        <div class="login-qrcode">
          <div class="qrcode">
            <div class="wx-qr" v-for="item in qrCodeList" :key="item.imgUrl">
              <div class="qr">
                <img :src="item.imgUrl" alt="" />
              </div>
              <div class="info">
                <div>
                  <svg
                    t="1712755052552"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="8523"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M595.77552 510.579651c-14.478759 0-29.04143 14.562671-29.04143 29.016871 0 14.6957 14.560624 29.068036 29.04143 29.068036 21.951965 0 36.3243-14.372336 36.3243-29.068036C632.09982 525.143345 617.727485 510.579651 595.77552 510.579651z"
                      fill="#0DD116"
                      p-id="8524"
                    ></path>
                    <path
                      d="M755.467569 510.579651c-14.369266 0-28.851095 14.562671-28.851095 29.016871 0 14.6957 14.481829 29.068036 28.851095 29.068036 21.76163 0 36.322254-14.372336 36.322254-29.068036C791.789823 525.143345 777.229199 510.579651 755.467569 510.579651z"
                      fill="#0DD116"
                      p-id="8525"
                    ></path>
                    <path
                      d="M298.153052 300.001655c-21.734 0-43.714617 14.344706-43.714617 36.214806 0 21.762653 21.980617 36.322254 43.714617 36.322254 21.760606 0 36.213783-14.559601 36.213783-36.322254C334.366835 314.346361 319.912635 300.001655 298.153052 300.001655z"
                      fill="#0DD116"
                      p-id="8526"
                    ></path>
                    <path
                      d="M501.367337 372.539738c21.844517 0 36.325323-14.560624 36.325323-36.322254 0-21.8701-14.480806-36.213783-36.325323-36.213783-21.760606 0-43.630706 14.343683-43.630706 36.213783C457.736631 357.979114 479.606731 372.539738 501.367337 372.539738z"
                      fill="#0DD116"
                      p-id="8527"
                    ></path>
                    <path
                      d="M512.330016 1.7519c-280.878109 0-508.827751 227.839125-508.827751 508.827751 0 280.987602 227.949642 508.827751 508.827751 508.827751 280.908808 0 508.74691-227.840148 508.74691-508.827751C1021.076926 229.591025 793.237801 1.7519 512.330016 1.7519zM392.479371 670.464081c-36.241412 0-65.36573-7.392364-101.69003-14.560624l-101.498672 50.91153 29.015847-87.372953C145.658939 568.666604 102.13568 503.164774 102.13568 423.454338c0-138.149407 130.73146-246.928902 290.342668-246.928902 142.730749 0 267.790022 86.880743 292.931632 203.870224-9.217942-1.037632-18.543332-1.691525-27.948539-1.691525-137.932466 0-246.819408 102.916974-246.819408 229.77829 0 21.078061 3.27151 41.421388 8.943696 60.8376C410.61338 670.028153 401.586796 670.464081 392.479371 670.464081zM820.726875 772.153088l21.869077 72.591295-79.627549-43.630706c-29.0445 7.2798-58.221006 14.560624-87.12736 14.560624-138.148383 0-246.927879-94.40716-246.927879-210.683397 0-116.089995 108.779496-210.689536 246.927879-210.689536 130.405025 0 246.600421 94.598518 246.600421 210.689536C922.441465 670.464081 879.028723 728.4661 820.726875 772.153088z"
                      fill="#0DD116"
                      p-id="8528"
                    ></path>
                  </svg>
                </div>
                <span>{{ item.text[0] }}</span>
                <span>{{ item.text[1] }}</span>
              </div>
            </div>
          </div>
          <div class="span-text">
            <span>xxxxxx官方推荐指定平台</span>
            <span>快速挂号 安全放心</span>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { Lock, User } from "@element-plus/icons-vue";

import { useUserInfoStore } from "@/store/modules/userInfo.ts";
import { storeToRefs } from "pinia";
/** 是否显示drawer */
const { isDrawer } = storeToRefs(useUserInfoStore());
/** 验证码倒计时 */
const authCode = ref<number>(0);
/** 保存定时器函数 */
let timer = null;
/** 获取验证码 */
const getAuthCode = () => {
  /** 修改倒计时，30秒 */
  authCode.value = 30;
  /** 倒计时开始 */
  timer = setInterval(() => {
    authCode.value--;
    if (authCode.value === 0) {
      clearInterval(timer);
    }
  }, 1000);
};

/** el-form的ref，用来获取dom元素 */
const ruleFormRef = ref<FormInstance>();
/** form表单的字段 */
const ruleForm = reactive({
  /** 用户手机号 */
  username: "",
  /** 验证码 */
  pass: ""
});
/** form表单用户手机号，验证码的验证函数 */
const validatePass = (rule: any, value: any, callback: any) => {
  let str = "";
  if (rule.field === "username") {
    str = "请输入手机号";
  }
  if (rule.field === "pass") {
    str = "请输入验证码";
  }
  if (value === "") {
    callback(new Error(str));
  } else {
    callback();
  }
};
/** form表单的验证的规则 */
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [
    {
      pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      message: "请输入正确的手机号",
      trigger: "change"
    },
    { validator: validatePass, trigger: "blur" }
  ],
  pass: [
    {
      pattern: /^\d{6}$/,
      message: "验证码必须是6位数数字",
      trigger: "change"
    },
    { validator: validatePass, trigger: "blur" }
  ]
});

/** 显示那种登录方式的关键字 */
const isShow = ref<string>("iphone");
/** 改变登录方式，从iphone和wx两种方式切换 */
const changeLogin = (val: string) => {
  isShow.value = val;
};
/** 正在登录中... */
const isLogging = ref<boolean>(true);
/** 登录 */
const login = (formEl: FormInstance | undefined) => {
  /** 验证form表单是否全部符合 */
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      /** 显示正在登录中 */
      isLogging.value = false;
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

/** 关闭drawer的回调 */
const closeDrawer = () => {
  /** 关闭drawer */
  isDrawer.value = false;
  /** 清除输入框数据 */
  ruleForm.pass = "";
  ruleForm.username = "";
  /** 恢复默认的登录方式 */
  isShow.value = "iphone";
  /** 清除定时器 */
  clearInterval(timer);
  /** 将验证码倒计时归0 */
  authCode.value = 0;
  /** 显示登录按钮 */
  isLogging.value = true;
  if (!ruleFormRef.value) return;
  ruleFormRef.value.resetFields();
};

/** qrCode的数据类型 */
const qrCodeList = <
  {
    imgUrl: string;
    text: string[];
  }[]
>[
  {
    imgUrl: "http://img.114yygh.com/static/web/code_login_wechat.png",
    text: ["微信扫一扫关注", '"快速预约挂号"']
  },
  {
    imgUrl: "http://img.114yygh.com/static/web/code_app.png",
    text: ["扫一扫下载", '"预约挂号”APP"']
  }
];
</script>

<script lang="ts">
export default {
  name: "Login"
};
</script>

<style scoped lang="scss">
.login {
  :deep(.el-drawer) {
    width: 960px;
    margin: 50px auto;
    height: 100%;
  }
  :deep(.el-drawer__header) {
    width: 100%;
    height: 40px;
    padding: 0;
    margin: 0;
    background: rgb(232, 242, 255);
    span {
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
      color: skyblue;
    }
  }
  :deep(.el-drawer__body) {
    width: 100%;
    padding: 0 0 30px 0;
    margin: 0;
    background: rgb(247, 251, 255);
  }
  .container {
    display: flex;
    .login-form {
      width: 440px;
      height: 480px;
      margin-left: 30px;
      :deep(.el-card) {
        width: 100%;
        height: 100%;
      }
      :deep(.el-form-item) {
        margin: 20px 0;
      }
      :deep(.my-icon) {
        position: relative;
        top: 28px;
        left: 7px;
        z-index: 10;
      }
      :deep(.el-input__inner) {
        padding-left: 12px;
        height: 40px;
      }
      .wechat {
        //margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .img {
          width: 40px;
          height: 40px;
          background-color: rgb(0, 177, 87);
          text-align: center;
          line-height: 60px;
          border-radius: 50%;
        }
        .text {
          margin-top: 10px;
          color: #666;
          font-weight: bold;
        }
      }
      .login-wx {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        div {
          margin: 5px 0;
        }
        .text {
          font-size: 16px;
          font-weight: bold;
        }
        .img {
          width: 300px;
          height: 300px;
          border: 2px solid #eee;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .login-qrcode {
      width: 440px;
      margin: 70px 0 0 30px;
      .qrcode {
        display: flex;
        justify-content: space-evenly;
        .wx-qr {
          display: flex;
          flex-direction: column;
          align-items: center;
          .qr {
            width: 140px;
            height: 140px;
            text-align: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
            span {
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
      .span-text {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 500;
        line-height: 44px;
        letter-spacing: 4px;
        font-style: italic;
      }
    }
  }
}
</style>
