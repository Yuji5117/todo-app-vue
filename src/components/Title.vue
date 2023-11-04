<script setup lang="ts">
type TitleProps = {
  title: string;
};

const props = defineProps<TitleProps>();
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
  margin: 0px;
}
</style>
