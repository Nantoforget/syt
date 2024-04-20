<template>
  <div class="search">
    <el-autocomplete
      v-model="searchText"
      :fetch-suggestions="querySearchAsync"
      :trigger-on-focus="false"
      class="autocomplete"
      popper-class="my-autocomplete"
      placeholder="点击搜索医院"
      @select="handleSelect"
    >
      <template #prefix>
        <el-icon class="el-input__icon">
          <Search />
        </el-icon>
      </template>
    </el-autocomplete>
    <el-button>搜索</el-button>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { HospitalContentType } from "@/types/modules/home";
import { searchHospitalAPI } from "@/apis/home";
import router from "@/router";

/** 搜索关键字 */
const searchText = ref<string>("");
/** 医院列表 */
const searchHospitalList = ref<HospitalContentType[]>([]);
/** 获取搜索联想列表 */
const getSearchHospital = async () => {
  if (!searchText.value) return;
  let response = await searchHospitalAPI(searchText.value);
  searchHospitalList.value = response.data;
};

let timeout: ReturnType<typeof setTimeout>;

const querySearchAsync = async (
  queryString: string,
  cb: (arg: any) => void
) => {
  await getSearchHospital();
  const results = queryString
    ? searchHospitalList.value.filter(createFilter(queryString))
    : searchHospitalList.value;

  results.forEach((result) => {
    result["value"] = result.hosname;
  });
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cb(results);
  }, 300 * Math.random());
};
const createFilter = (queryString: string) => {
  return (restaurant: HospitalContentType) => {
    return restaurant.hosname.indexOf(queryString) === 0;
  };
};
/** 选择搜索结果 */
const handleSelect = () => {
  /*从searchHospitalList中找到与 searchText.value 匹配的医院*/
  const hospital = searchHospitalList.value.find(
    (hospital) => hospital.hosname === searchText.value
  );
  /*跳转到该医院的详情页面*/
  router.push({
    name: "Reserve",
    params: { hoscode: hospital?.hoscode }
  });
};
</script>

<script lang="ts">
export default {
  name: "Search"
};
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  height: 60px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-input__icon {
    height: 100%;
  }
  :deep(.el-autocomplete) {
    border-bottom: 2px solid #eee;
  }
  :deep(.el-input--prefix) {
    width: 800px;
    height: 45px;
  }
  :deep(.el-input__wrapper) {
    box-shadow: none;
    border: none;
  }
  :deep(.el-button) {
    height: 47px;
    color: #4490f1;
    border: none;
    border-bottom: 2px solid #eee;
  }
}
</style>
