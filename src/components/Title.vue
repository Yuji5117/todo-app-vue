<script setup lang="ts">
const props = defineProps(["title"]);
</script>

<template>
  <div class="title_container">
    <h1 class="title">{{ props.title }}</h1>
  </div>
</template>

<style scoped>
.title_container {
  width: 100%;
}

.title {
  color: white;
  font-size: 2rem;
}
</style>
