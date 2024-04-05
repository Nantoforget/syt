<template>
  <div class="search">
    <el-autocomplete
      class="autocomplete"
      popper-class="my-autocomplete"
      placeholder="点击搜索医院"
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
