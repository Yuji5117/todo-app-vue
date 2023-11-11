<script setup lang="ts">
import { Task } from "../types";
import { IconEdit, IconTrash } from "@tabler/icons-vue";

type TaskProps = {
  task: Task;
};

type TaskEmits = {
  (e: "removeTask", id: string): void;
  (e: "changeTaskStatus", id: string, done: boolean): void;
};

const props = defineProps<TaskProps>();
const emit = defineEmits<TaskEmits>();

const onDeleteClick = () => {
  emit("removeTask", props.task.id);
};

const onStatusChange = (event: any) => {
  emit("changeTaskStatus", props.task.id, event.target.checked);
};
</script>

<template>
  <div class="task_container">
    <div class="task_main">
      <div class="task_checkbox">
        <input
          v-on:change="onStatusChange"
          type="checkbox"
          v-model="task.done"
        />
      </div>
      <div class="task_title">
        <p class="task_title_text">{{ props.task.title }}</p>
      </div>
    </div>
    <div class="task_icons">
      <IconEdit class="task_icon" :size="20" />
      <IconTrash @click="onDeleteClick" class="task_icon" :size="20" />
    </div>
  </div>
</template>

<style scoped>
.task_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: blueviolet;
}

.task_main {
  display: flex;
  width: 100%;
}

.task_checkbox {
  width: 10%;
  display: flex;
  flex-direction: row;
}

.task_title_text {
  color: white;
}

.task_icons {
  display: flex;
  align-items: center;
  gap: 5px;
}

.task_icon {
  cursor: pointer;
}

.task_icon:hover {
  opacity: 0.6;
}
</style>
