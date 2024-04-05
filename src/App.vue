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
  .main {
    width: 1200px;
    min-height: 800px;
    margin: 70px auto;
    box-sizing: content-box;
    padding-bottom: 70px;
  }
}
</style>
