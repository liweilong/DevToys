<script setup lang="ts">
import JsonFormatter from './components/JsonFormatter.vue';

</script>

<template>
  <n-tabs id="main-tabs" type="line" animated size="medium" justify-content="center">
    <n-tab-pane name="Json">
      <json-formatter/>
    </n-tab-pane>
    <n-tab-pane name="Unix时间戳">
      Unix时间戳
    </n-tab-pane>
    <n-tab-pane name="Base64编码">
      Base64编码
    </n-tab-pane>
  </n-tabs>
</template>

<style scoped>
</style>
