<script setup lang="ts">
import { Form, Title, TaskItem } from "./components";
import "normalize.css";
import { Task } from "./types";
import { getTasks } from "./api";
import { onMounted, reactive } from "vue";

const tasks: Task[] = reactive([]);

onMounted(() => {
  getTasks()
    .then((res) => {
      console.log("res", res.data);
      return tasks.push(...res.data);
    })
    .catch((error) => console.error(error));
});

const addTask = (title: string, done: boolean) => {
  const id = tasks.length.toString();
  console.log("id");
  tasks.push({ id, title, done });
};

const deleteTask = (id: string) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
};
</script>

<template>
  <div class="main">
    <div class="container">
      <Title title="Get Things Done!" />
      <Form @addTask="addTask" />
      <div class="task_section">
        <ul class="task_list_container">
          <li v-for="task in tasks">
            <TaskItem @deleteTask="deleteTask" :task="task" />
          </li>
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

.task_section {
  height: 100%;
  overflow: scroll;
}

.task_list_container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 360px;
}
</style>
