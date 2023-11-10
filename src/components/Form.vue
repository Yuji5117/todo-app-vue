<script setup lang="ts">
import { computed, ref } from "vue";

type TaskItemEmits = {
  (e: "addTask", title: string): void;
};

const emit = defineEmits<TaskItemEmits>();

const onAddItemSubmit = (event: Event) => {
  event.preventDefault();
  emit("addTask", taskName.value);
};

const taskName = ref("");
const isDisabled = computed(() => taskName.value === "");
</script>

<template>
  <form @submit="onAddItemSubmit" class="form">
    <input
      type="text"
      class="task_input"
      placeholder="What is the task today?"
      v-model="taskName"
    />
    <button :disabled="isDisabled" type="submit" class="task_add_button">
      Add Task
    </button>
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

.task_add_button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
