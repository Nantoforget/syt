<template>
  <div class="hos_info">
    <div class="text">
      <div class="title">北京大学国际医院</div>
      <div class="level">
        <svg
          t="1712415016084"
          class="icon"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4294"
          width="16"
          height="16"
        >
          <path
            d="M192.07 447.3m63.63 0l0 0q63.63 0 63.63 63.63l0 192.14q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-192.14q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="4295"
          ></path>
          <path
            d="M449.43 320.29m63.63 0l0 0q63.63 0 63.63 63.63l0 319.16q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-319.16q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="4296"
          ></path>
          <path
            d="M703.34 193.2m63.63 0l0 0q63.63 0 63.63 63.63l0 446.24q0 63.63-63.63 63.63l0 0q-63.63 0-63.63-63.63l0-446.24q0-63.63 63.63-63.63Z"
            fill="#999999"
            p-id="4297"
          ></path>
        </svg>
        二级乙等
      </div>
    </div>
    <div class="rule">
      <div class="img">
        <img
          :src="
            hospitalBookingRule.hospital.logoData
              ? `data:image/jpeg;base64, ${hospitalBookingRule.hospital.logoData} `
              : 'https://pic3.zhimg.com/v2-580f56de9cd8175a3304bfc5aa9228f2_r.jpg?source=1940ef5c'
          "
          alt=""
        />
      </div>
      <div class="hos_text">
        <svg
          t="1712724697138"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4259"
          width="32"
          height="32"
        >
          <path
            d="M946.1 329.4c-23.6-55.9-57.4-106-100.5-149.1-43.1-43.1-93.2-76.9-149.1-100.5C638.7 55.4 577.3 43 514 43S389.3 55.4 331.4 79.9c-55.9 23.6-106 57.4-149.1 100.5-43.1 43.1-76.9 93.2-100.5 149.1C57.4 387.3 45 448.7 45 512s12.4 124.7 36.9 182.6c23.6 55.9 57.4 106 100.5 149.1 43.1 43.1 93.2 76.9 149.1 100.5C389.3 968.6 450.7 981 514 981s124.7-12.4 182.6-36.9c55.9-23.6 106-57.4 149.1-100.5 43.1-43.1 76.9-93.2 100.5-149.1C970.6 636.7 983 575.3 983 512s-12.4-124.7-36.9-182.6zM514 931C283 931 95 743 95 512S283 93 514 93s419 188 419 419-188 419-419 419z"
            fill=""
            p-id="4260"
          ></path>
          <path
            d="M674.7 242.2c-10.6-6-23.6-5.4-33.9 1.6L202.6 539.2c-9.8 6.6-15.7 18.1-15.2 29.9 0.4 11.3 6.4 21.3 16.1 26.8l4.1 2.3 245.1 35.7 156.6 191.9 4.1 2.3c4.8 2.7 10.2 4.1 15.5 4.1 5.3 0 10.7-1.4 15.7-4.1 10.4-5.7 17.2-16.6 17.8-28.4L690.8 272c0.6-12.3-5.6-23.8-16.1-29.8z m-59.9 511.3L487 597c-5.1-6.3-12.3-10.4-20.4-11.5l-199.9-29.2 372.1-250.9-24 448.1z"
            fill=""
            p-id="4261"
          ></path>
        </svg>
        <div>{{ hospitalBookingRule.hospital.route }}</div>
      </div>
    </div>
    <div class="referral">
      <div class="title">医院介绍</div>
      <div class="content">
        {{ hospitalBookingRule.hospital.intro }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHospitalDetailStore } from "@/store/modules/HospitalDetail.ts";
import { storeToRefs } from "pinia";

/** 从hospitalDetailStore获取医院预约挂号信息和医院科室信息 */
const hosDetailStore = useHospitalDetailStore();
/**解构 医院code从路由参数取出 医院预约挂号信息和医院科室信息 */
const { hospitalBookingRule } = storeToRefs(hosDetailStore);
</script>

<script lang="ts">
export default {
  name: "HospitalDetail"
};
</script>

<style scoped lang="scss">
.hos_info {
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    PingFang SC,
    Hiragino Sans GB,
    Heiti SC,
    Microsoft YaHei,
    WenQuanYi Micro Hei,
    sans-serif;
  width: 100%;
  .text {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-right: 20px;
    }
    .level {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #999;
    }
  }
  .rule {
    width: 100%;
    display: flex;

    .img {
      width: 70px;
      height: 70px;
      margin-right: 30px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50px;
      }
    }
    .hos_text {
      flex: 1;
      height: 100%;
      margin-top: 5px;
      display: flex;
      align-items: flex-start;
      .icon {
        margin: -3px 20px 0 0;
      }
      div {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .referral {
    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      margin: 40px 0;
    }
    .content {
      font-size: 12px;
      color: #666;
      text-indent: 2em;
      letter-spacing: 0.1em;
      line-height: 1.5em;
    }
  }
}
</style>
