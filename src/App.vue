<script setup lang="ts">
import { Form, Title, TaskItem } from "./components";
import "normalize.css";
import { Task } from "./types";

const tasks: Task[] = [
  { id: "1", title: "散歩", done: false },
  { id: "2", title: "宿題", done: false },
  { id: "3", title: "掃除", done: true },
];
</script>

<template>
  <div class="main">
    <div class="container">
      <Title title="Get Things Done!" /><Form />
      <div>
        <ul class="task_list_container">
          <li v-for="task in tasks"><TaskItem :task="task" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 500px;
  height: 600px;
  background-color: rgb(29, 28, 71);
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 85%;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
}

.task_list_container {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
</style>
