<script setup lang="ts">
import { Form, Title, TaskItem } from "./components";
import "normalize.css";
import { Task } from "./types";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
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

const addTask = async (title: string) => {
  const res = await createTask({ title });
  tasks.unshift({ id: res.data, title, done: false });
};

const changeTaskStatus = async (id: string, done: boolean) => {
  await updateTask(id, { done });
};

const updateTaskTitle = async (id: string, title: string) => {
  await updateTask(id, { title });
};

const removeTask = async (id: string) => {
  await deleteTask(id);
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
            <TaskItem
              @changeTaskStatus="changeTaskStatus"
              @updateTaskTitle="updateTaskTitle"
              @removeTask="removeTask"
              :task="task"
            />
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
