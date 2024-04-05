<template>
  <div class="app">
    <HospitalTop></HospitalTop>
    <div class="main">
      <RouterView />
    </div>
    <HospitalBottom></HospitalBottom>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.app {
  width: 100%;
  .main {
    width: 1200px;
    padding: 70px 0 50px 0;
    margin: 0 auto;
  }
}
</style>
