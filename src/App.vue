<script setup lang="ts">
import { Form, Title } from "./components";
import "normalize.css";
</script>

<template>
  <div class="main">
    <div class="container"><Title title="Get Things Done!" /><Form /></div>
  </div>
</template>

<style scoped>
.main {
  width: 500px;
  height: 600px;
  background-color: rgb(29, 28, 71);
}

.container {
  width: 85%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
