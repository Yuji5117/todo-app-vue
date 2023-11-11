<script setup lang="ts">
import { ref } from "vue";
import { Task } from "../types";
import { IconEdit, IconTrash, IconDeviceFloppy } from "@tabler/icons-vue";

type TaskProps = {
  task: Task;
};

type TaskEmits = {
  (e: "removeTask", id: string): void;
  (e: "changeTaskStatus", id: string, done: boolean): void;
  (e: "updateTaskTitle", id: string, title: string): void;
};

const props = defineProps<TaskProps>();
const emit = defineEmits<TaskEmits>();

const isEditMode = ref(false);

const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
};

const onStatusChange = (event: any) => {
  emit("changeTaskStatus", props.task.id, event.target.checked);
};

const onUpdateClick = () => {
  emit("updateTaskTitle", props.task.id, props.task.title);
  toggleEditMode();
};

const onDeleteClick = () => {
  emit("removeTask", props.task.id);
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
      <div v-if="!isEditMode" class="task_title">
        <p class="task_title_text">{{ props.task.title }}</p>
      </div>
      <div v-if="isEditMode" class="task_title">
        <input
          class="task_title_input"
          type="text"
          v-model="props.task.title"
        />
      </div>
    </div>
    <div class="task_icons">
      <IconEdit
        v-if="!isEditMode"
        @click="toggleEditMode"
        class="task_icon"
        :size="20"
      />
      <IconTrash
        v-if="!isEditMode"
        @click="onDeleteClick"
        class="task_icon"
        :size="20"
      />
      <IconDeviceFloppy
        v-if="isEditMode"
        @click="onUpdateClick"
        class="task_icon"
        :size="20"
      />
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

.task_title_input {
  color: white;
  border: solid 1px blueviolet;
  background-color: rgb(29, 28, 71);
  outline: none;
  padding: 3px 5px;
}

.task_input::placeholder {
  color: white;
  opacity: 0.5;
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
