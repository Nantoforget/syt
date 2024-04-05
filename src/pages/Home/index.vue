<template>
  <div class="home">
    <el-carousel height="350px" :interval="5000" arrow="hover">
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          src="http://syt.atguigu.cn/_nuxt/img/web-banner1.b91d1a1.png"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <Search></Search>
    <div class="hospital">
      <div class="left">
        <HospitalList />
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/pages/Home/components/Search.vue";
import HospitalList from "@/pages/Home/components/HospitalList.vue";
</script>

<script lang="ts">
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.home {
  img {
    width: 100%;
    height: 350px;
  }
  .hospital {
    width: 100%;
    height: 650px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .left {
      width: 800px;
      height: 100%;
      //background: #000;
    }
    .right {
      width: 400px;
      height: 100%;
      background: yellow;
    }
  }
}
</style>
