<template>
  <div class="home">
    <div class="carousel">
      <Carousel />
    </div>
    <Search />
    <div class="hospital">
      <div class="left">
        <HospitalList />
      </div>
      <div class="right">
        <HospitalRight />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "@/pages/Home/components/Search.vue";
import HospitalList from "@/pages/Home/components/HospitalList.vue";
import HospitalRight from "@/pages/Home/components/HospitalRight.vue";
import Carousel from "@/pages/Home/components/Carousel.vue";
</script>

<script lang="ts">
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.home {
  width: 1200px;
  padding-bottom: 60px;
  box-sizing: border-box;
  .carousel {
    width: 100%;
  }
  .hospital {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    .left {
      width: 77%;
      margin-right: 5%;
    }
    .right {
      width: 18%;
    }
  }
}
</style>
