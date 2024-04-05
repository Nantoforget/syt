<template>
  <el-carousel height="350px" :interval="5000" arrow="hover">
    <el-carousel-item v-for="item in 4" :key="item">
      <img
        src="http://syt.atguigu.cn/_nuxt/img/web-banner1.b91d1a1.png"
        alt=""
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: "Carousel"
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 350px;
}
</style>
