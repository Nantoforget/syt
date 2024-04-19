<template>
  <div class="hosTitle">
    <span>{{ scheduleDate.baseMap?.hosname }}</span>
    <span></span>
    <span>{{ scheduleDate.baseMap?.bigname }}</span>
  </div>
  <div class="depTitle">{{ scheduleDate.baseMap?.depname }}</div>
  <div class="depList">
    <div class="title">{{ scheduleDate.baseMap?.workDateString }}</div>
    <div class="list">
      <div
        class="list_item"
        :class="isActive === index ? 'active' : ''"
        v-for="(book, index) in scheduleDate.bookingScheduleList"
        :key="index"
        @click="changeItem(index, book)"
      >
        <div class="time">
          {{ book.workDate }}&nbsp;&nbsp;{{ book.dayOfWeek }}
        </div>
        <div v-if="book.status === -1" class="has">停止挂号</div>
        <div v-else-if="book.status === 0" class="has">有号</div>
        <div v-else class="has">即将放号</div>
      </div>
    </div>
    <div class="page">
      <el-pagination
        layout="prev, pager, next"
        @current-change="(value: number) => changePage(value)"
        :total="total"
        :page-size="7"
      />
    </div>
  </div>
  <div class="doctor" v-if="hasNum !== 1">
    <div class="am" v-for="docTime in docDateList" :key="docTime.id">
      <div class="title">
        <div class="line"></div>
        <div class="am_title">{{ docTime.time }}</div>
      </div>
      <div v-for="doc in docTime.docDate" class="doc_item">
        <div class="before">
          <div class="doc_name">
            {{ doc.title }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ doc.docname }}
          </div>
          <div class="doc_depName">{{ doc.skill }}</div>
        </div>
        <div class="after">
          <div class="money">￥{{ doc.amount }}</div>
          <el-button
            v-if="hasNum === -1"
            class="doc_btn btn_info"
            type="info"
            size="large"
            @click="registration_info"
          >
            剩余{{ doc.availableNumber }}
          </el-button>
          <el-button
            v-else
            class="doc_btn btn_primary"
            type="primary"
            size="large"
            @click="registration_primary"
          >
            剩余{{ doc.availableNumber }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
  <div class="count_down" v-else>
    <div class="title">
      <span
        v-if="timeData.hour > 8 || (timeData.hour === 8 && timeData.min >= 30)"
      >
        明天
      </span>
      <span v-else>今天</span>
      <div>08:30</div>
      <span>放号</span>
    </div>
    <div class="down">
      <span>倒计时</span>
      <div class="time" v-if="timeData.sec === -1">加载中。。。</div>
      <div class="time" v-else>
        {{ timeData.hour }} 时 {{ timeData.min }} 分 {{ timeData.sec }} 秒
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHospitalDetailStore } from "@/store/modules/HospitalDetail.ts";
import { onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserInfoStore } from "@/store/modules/userInfo.ts";
import { getBookingScheduleApi, getScheduleApi } from "@/apis/hospital";
import {
  BookingRuleType,
  BookingScheduleType,
  Doctor
} from "@/types/modules/detail";
import countDown from "@/utils/countDown.ts";

const route = useRoute();
const hosDetailStore = useHospitalDetailStore();
const { hosCode } = storeToRefs(hosDetailStore);
const userInfoStore = useUserInfoStore();
const { getUserInfo } = userInfoStore;
/** 保存获取到的科室预约数据 */
const scheduleDate = reactive<BookingRuleType>({} as BookingRuleType);
/**  */
const docDateList = <{ id: string; time: string; docDate: Doctor[] }[]>(
  reactive([
    {
      id: "1",
      time: "上午号源",
      docDate: []
    },
    {
      id: "2",
      time: "下午号源",
      docDate: []
    }
  ])
);

/** 当前天数是否还有存号 -1没有存号 0有存号 1没有放号 */
const hasNum = ref<number>(-1);
/** 选中的是哪一天 */
const isActive = ref<number>(0);
/**
 * 修改选中的天数
 * @param index 下标
 * @param book 选中的对象
 */
const changeItem = (index: number, book: BookingScheduleType) => {
  clearInterval(timer);
  isActive.value = index;
  hasNum.value = book.status;
  getScheduleList(book.workDate);
  if (hasNum.value === 1) {
    runCountDown(book);
  }
};
/** 总条数 */
const total = ref<number>(1);
/** 当前页数 */
const page = ref<number>(1);
/**
 * 改变页数
 * @param val 最新的页数下标
 */
const changePage = (val: number) => {
  clearInterval(timer);
  page.value = val;
  getBookingSchedule();
};
/**
 * 可预约排班的请求数据函数
 */
const getBookingSchedule = async () => {
  let res = await getBookingScheduleApi({
    page: page.value,
    limit: 7,
    hoscode: route.query.hosCode as string,
    depcode: route.query.depcode as string
  });
  console.log(res.data);
  const one: BookingScheduleType = res.data.bookingScheduleList[0];
  hasNum.value = one.status;
  await getScheduleList(one.workDate);
  total.value = res.data.total;
  Object.assign(scheduleDate, res.data);
  isActive.value = 0;
  console.log(total.value);
};
/**
 * 获取某一天的医生列表
 * @param workDate 某一天的时间
 */
const getScheduleList = async (workDate: string) => {
  docDateList.forEach((item) => {
    item.docDate = [];
  });
  let res = await getScheduleApi({
    hoscode: route.query.hosCode as string,
    depcode: route.query.depcode as string,
    workDate
  });

  res.data.forEach((item) => {
    if (item.workTime === 0) {
      docDateList[0].docDate.push(item);
    }
    if (item.workTime === 1) {
      docDateList[1].docDate.push(item);
    }
  });
};
/** 没有余号的点击按钮事件 进行提示 */
const registration_info = () => {
  ElMessage({
    type: "error",
    dangerouslyUseHTMLString: true,
    message: '<div style="width: 200px;">不能预约</div>'
  });
};

/***/
const registration_primary = () => {};

/** 时分秒 */
const timeData = reactive<{ hour: number; min: number; sec: number }>({
  /** 时 */
  hour: 0,
  /** 分 */
  min: 0,
  /** 秒 */
  sec: -1
});
/** 存储定时器 */
let timer: any = null;

/**
 * 利用工具函数获取倒计时的时分秒
 * @param book 暂未放号的对象
 */
const runCountDown = (book: BookingScheduleType) => {
  timer = setInterval(() => {
    const text = countDown({ workDate: book.workDate, data: "08:30" });
    console.log(text);
    Object.assign(timeData, text);
    console.log(timeData);
  }, 1000);
};

onMounted(async () => {
  hosCode.value = route.query.hosCode as string;
  await Promise.all([getUserInfo()]);
  await Promise.all([getBookingSchedule()]);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
<script lang="ts">
export default {
  name: "Schedule"
};
</script>

<style scoped lang="scss">
.hosTitle {
  color: #999;
  font-size: 14px;
  span:nth-child(2) {
    display: inline-block;
    width: 1px;
    height: 10px;
    background: #ccc;
    margin: 0 10px;
  }
}
.depTitle {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 10px 0;
}
.depList {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #333;
    font-size: 14px;
    margin: 10px 0 30px 0;
  }
  .list {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    .list_item {
      width: 124px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid #e8f2ff;
      border-radius: 10px;
      font-size: 14px;
      color: #4990f1;
      overflow: hidden;
      cursor: pointer;

      .time {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e8f2ff;
      }
      .has {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &.active {
        font-weight: bold;
        border: 2px solid #4990f1;
        .time {
          color: #fff;
          background: #4990f1;
        }
      }
    }
  }
  .page {
    margin-top: 40px;
  }
}
.doctor {
  .am {
    margin-bottom: 30px;
    .title {
      height: 20px;
      color: #999;
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      .line {
        width: 5px;
        height: 15px;
        background: #4990f1;
        border-radius: 10px;
        margin-right: 10px;
      }
    }
    .doc_item {
      box-sizing: border-box;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .before {
        flex: 1;
        .doc_name {
          font-weight: bold;
        }
        .doc_depName {
          margin-top: 30px;
          font-size: 14px;
          color: #999;
        }
      }
      .after {
        display: flex;
        align-items: center;
        justify-content: center;
        .money {
          color: #4990f1;
          font-weight: bold;
          margin-right: 20px;
        }
        .doc_btn {
          width: 120px;
          height: 50px;
          font-weight: bold;
        }
        .btn_info:hover {
          background-color: #909399;
        }
        .btn_primary:hover {
          background-color: #2d81f7;
        }
      }
    }
  }
}
.count_down {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title {
    display: flex;
    font-size: 16px;
    margin: 30px 0;
    div {
      margin: 0 10px;
      color: #4990f1;
    }
  }
  .down {
    display: flex;
    align-items: center;
    span {
      font-size: 16px;
      color: #999;
    }
    .time {
      margin-left: 30px;
      color: #4990f1;
      font-size: 30px;
      font-weight: bold;
    }
  }
}
</style>
