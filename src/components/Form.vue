<script setup lang="ts">
// const props = defineProps([""]);
</script>

<template>
  <form class="form">
    <input
      type="text"
      class="task_input"
      placeholder="What is the task today?"
    />
    <button class="task_add_button">Add Task</button>
  </form>
</template>

<style scoped>
.form {
  display: flex;
}

.task_input {
  color: white;
  border: solid 1px blueviolet;
  background-color: rgb(29, 28, 71);
  outline: none;
  width: 75%;
  padding: 10px 20px;
}

.task_input::placeholder {
  color: white;
  opacity: 0.5;
}

.task_add_button {
  width: 25%;
  background-color: blueviolet;
  color: white;
}

.task_add_button:hover {
  opacity: 0.8;
  outline: none;
}
</style>
