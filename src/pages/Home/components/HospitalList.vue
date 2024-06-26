<template>
  <div class="top">
    <div class="text">医院</div>
    <div class="check">
      <div class="title">等级:</div>
      <div class="list">
        <el-link
          :class="levelValue === '' && 'checked'"
          @click="changeLevel('')"
          :underline="false"
        >
          全部
        </el-link>
        <el-link
          @click="changeLevel(level.value)"
          v-for="level in levelList"
          :key="level.id"
          :underline="false"
          :class="levelValue === level.value && 'checked'"
        >
          {{ level.name }}
        </el-link>
      </div>
    </div>
    <div class="check">
      <div class="title">地区:</div>
      <div class="list">
        <el-link
          :class="districtValue === '' && 'checked'"
          @click="changeDistrict('')"
          :underline="false"
        >
          全部
        </el-link>
        <el-link
          v-for="district in districtList"
          :key="district.id"
          :underline="false"
          @click="changeDistrict(district.value)"
          :class="districtValue === district.value && 'checked'"
        >
          {{ district.name }}
        </el-link>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div
      class="card"
      @click="goToHospital(hos.hoscode)"
      v-for="hos in hospitalList"
      :key="hos.id"
    >
      <div class="info">
        <div class="hospital-title">{{ hos.hosname }}</div>
        <div class="bottom-container">
          <div class="icon-wrapper">
            <el-icon><Histogram /></el-icon>
            {{ hos.param.hostypeString }}
          </div>
          <div class="icon-wrapper">
            <el-icon><Clock /></el-icon>
            每天{{ hos.bookingRule?.releaseTime }}放号
          </div>
        </div>
      </div>
      <div class="img">
        <img :src="'data:image/jpeg;base64,' + hos.logoData" alt="" />
      </div>
    </div>
  </div>
  <div class="pages">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 15, 20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout=" prev, pager, next, jumper,sizes,total"
      :total="total"
      @size-change="handlePageChange({ name: 'pageSize', data: pageSize })"
      @current-change="handlePageChange({ name: 'current', data: currentPage })"
    />
  </div>
</template>

<script setup lang="ts">
import { Clock, Histogram } from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import {
  getHomeDistrictAPI,
  getHomeLevelAPI,
  getHomepagesAPI
} from "@/apis/home";
import type {
  HospitalContentType,
  LevelAndDistrictType
} from "@/types/modules/home";
import { useRouter } from "vue-router";

/** 路由 */
const router = useRouter();

/** 当前页 */
const currentPage = ref<number>(1);
/** 每页条数 */
const pageSize = ref<number>(10);
/** 是否显示分页器 */
const small = ref<boolean>(false);
/** 是否显示背景色 */
const background = ref<boolean>(true);
/** 是否禁用分页器 */
const disabled = ref<boolean>(false);
/** 总条数 */
const total = ref<number>(1);
/**总页数*/
const totalPages = ref<number>(1);

/**等级*/
const levelList = ref<LevelAndDistrictType[]>([]);
/**地区*/
const districtList = ref<LevelAndDistrictType[]>([]);

/**获取home首页的等级列表*/
const getHomeLevel = async () => {
  let res = await getHomeLevelAPI();
  levelList.value = res.data;
};
/**获取home首页的地区列表*/
const getHomeDistrict = async () => {
  let res = await getHomeDistrictAPI();
  districtList.value = res.data;
};

/** 首页医院信息列表  */
const hospitalList = ref<HospitalContentType[]>([]);
/**获取home首页的医院信息*/
const getHomeHospital = async () => {
  const hostype = levelValue.value;
  const districtCode = districtValue.value;
  let res = await getHomepagesAPI(
    currentPage.value,
    pageSize.value,
    hostype,
    districtCode
  );
  hospitalList.value = res.data.content;
  total.value = res.data.totalElements;
  pageSize.value = res.data.pageable.pageSize;
  totalPages.value = res.data.totalPages;
  currentPage.value = res.data.pageable.pageNumber + 1;
};
/** 切换页数或每页条数 */
const handlePageChange = (param: { name: string; data: number }) => {
  if (param.name === "current") {
    currentPage.value = param.data;
  }
  if (param.name === "pageSize") {
    pageSize.value = param.data;
  }
  getHomeHospital();
};

/** 等级id */
const levelValue = ref<string>("");
/** 选中等级 */
const changeLevel = (value: string) => {
  levelValue.value = value;
  getHomeHospital();
};
/** 地区id */
const districtValue = ref<string>("");
/** 选中地区 */
const changeDistrict = (value: string) => {
  districtValue.value = value;
  getHomeHospital();
};
/** 跳转医院详情页 */
const goToHospital = (hoscode: string) => {
  router.push(`/hospital/${hoscode}`);
};

onMounted(() => {
  Promise.all([getHomeLevel(), getHomeDistrict(), getHomeHospital()]);
});
</script>

<script lang="ts">
export default {
  name: "HospitalList"
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  box-sizing: border-box;
  .text {
    font-size: 16px;
    font-weight: bold;
    margin: 30px 0;
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
  }
  .check {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    color: #999;
    .title {
      margin-right: 20px;
    }
    .list {
      flex: 1;
      color: #666 !important;
      flex-wrap: wrap;
      margin-right: -26px;
      :deep(.el-link) {
        margin: 0 26px 10px 0;
      }
      .checked {
        color: #4490f1;
        font-weight: bold;
      }
    }
  }
}
.bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  .card {
    width: 440px;
    height: 98px;
    display: grid;
    grid-template-columns: auto 100px;
    align-items: center;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.04);
    margin-top: 20px;
    border-radius: 4px;
    transition: all 0.3s ease;
    .info {
      display: grid;
      grid-template-rows: 60px 40px;
      align-items: center;
      margin-left: 20px;
      .hospital-title {
        color: #333;
        font-size: 16px;
      }
      .bottom-container {
        display: grid;
        grid-template-columns: auto auto;
        font-size: 14px;
        color: #999;
        .icon-wrapper {
          display: flex;
          align-items: center;
          :deep(.el-icon) {
            margin-right: 4px;
          }
        }
      }
    }
    .img {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .card:hover {
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
    .hospital-title {
      font-weight: bold;
    }
    .img {
      width: 85px;
      height: 85px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
.pages {
  margin: 20px 0 20px 20px;
}
</style>
