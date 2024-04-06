<template>
  <div class="hos_info">
    <div class="text">
      <div class="title">北京人民医院</div>
      <div class="level">
        <svg
          t="1712415016084"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
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
        三级甲等
      </div>
    </div>
    <div class="rule">
      <div class="img">
        <img
          src="https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/321a55a420f61d0a413cf11bd4cd6360.jpg?x-oss-process=image%2fresize%2cm_lfit%2cw_1920%2ch_1080"
          alt=""
        />
      </div>
      <div class="hos_text">
        <div class="registration">
          <span class="title">挂号规则</span>
          <div class="hosTime">
            <div>
              <span class="time_text">预约周期：</span>
              <span class="time">10天</span>
            </div>
            <div>
              <span class="time_text">放号时间：</span>
              <span class="time">08:30</span>
            </div>
            <div>
              <span class="time_text">停挂时间：</span>
              <span class="time">11:30</span>
            </div>
          </div>
          <div>
            <span class="time_text">退号时间：</span>
            <span class="time">就诊前一工作日15:30前取消</span>
          </div>
        </div>
        <div class="subscribe">
          <div class="title">医院预约规则</div>
          <ul>
            <li>西院区预约号取号地点：西院区门诊楼一层大厅挂号窗口取号</li>
            <li>
              东院区预约号取号地点：东院区老门诊楼一层大厅挂号窗口或新门诊楼各楼层挂号/收费窗口取号
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "Info"
};
</script>

<style scoped lang="scss">
.hos_info {
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
      .registration {
        margin-bottom: 20px;
        .hosTime {
          display: flex;
          margin: 10px 0;
          div {
            margin-right: 50px;
          }
        }
        .time_text {
          font-size: 12px;
          color: #999;
        }
        .time {
          font-size: 12px;
          color: #333;
        }
      }
      .subscribe {
        ul {
          margin-top: 15px;
          list-style: decimal inside;
          font-size: 12px;
          color: #999;
          li {
            margin-bottom: 10px;
          }
        }
      }
      .title {
        font-size: 16px;
        color: #333;
      }
    }
  }
}
</style>
