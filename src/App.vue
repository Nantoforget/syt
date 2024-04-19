<template>
  <div class="app">
    <HospitalTop></HospitalTop>
    <div class="main">
      <RouterView />
    </div>
    <HospitalBottom></HospitalBottom>
    <Login />
  </div>
</template>

<script setup lang="ts">
import Login from "@/components/Login/index.vue";
</script>

<style scoped lang="scss">
.app {
  .main {
    width: 1200px;
    margin: 70px auto;
    box-sizing: border-box !important;
  }
}
</style>
