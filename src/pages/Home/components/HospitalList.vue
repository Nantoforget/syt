<template>
  <div class="top">
    <div class="text">医院</div>
    <div class="check">
      <div class="title">等级:</div>
      <div class="list">
        <el-link class="checked" :underline="false">全部</el-link>
        <el-link v-for="level in levelList" :key="level.id" :underline="false">
          {{ level.name }}
        </el-link>
      </div>
    </div>
    <div class="check">
      <div class="title">地区:</div>
      <div class="list">
        <el-link class="checked" :underline="false">全部</el-link>
        <el-link
          v-for="district in districtList"
          :key="district.id"
          :underline="false"
        >
          {{ district.name }}
        </el-link>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="card" v-for="hos in hospitalList" :key="hos.id">
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
      :page-sizes="[pageSize, total]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout=" prev, pager, next, jumper,sizes,total"
      :total="total"
    />
    <!--    @size-change="handleSizeChange"-->
    <!--    @current-change="handleCurrentChange"-->
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

const currentPage = ref<number>(1);
const pageSize = ref<number>(10);
const small = ref<boolean>(false);
const background = ref<boolear>(false);
const disabled = ref<boolear>(false);
const total = ref<number>(1);
const totalPages = ref<number>(1);
const pageSizes = ref<number[]>([pageSize.value]);

const calculatePageSize = () => {
  let count = totalPages.value;
  if (count > 1) {
  }
};

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

const hospitalList = ref<HospitalContentType[]>([]);
/**获取home首页的医院信息*/
const getHomeHospital = async () => {
  let res = await getHomepagesAPI(2, 10);
  console.log(res);
  hospitalList.value = res.data.content;
  total.value = res.data.totalElements;
  pageSize.value = res.data.pageable.pageSize;
  totalPages.value = res.data.totalPages;
  currentPage.value = res.data.pageable.pageNumber + 1;
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
