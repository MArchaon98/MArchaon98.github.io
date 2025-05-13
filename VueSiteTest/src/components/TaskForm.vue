<template>
<form @submit.prevent="addTask" class="task-form">
  <input v-model="taskText" type="text" placeholder="New task" class="task-input" />
  <button class="task-button" type="submit">Add Task</button>
</form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const taskText = ref('')
const emit = defineEmits(['add'])

function addTask() {
if (taskText.value.trim()) {
  emit('add', {
    text: taskText.value,
    done: false,
    id: Date.now()
  })
  taskText.value = ''
}
}
</script>

<style scoped>
.task-form {
@apply my-4;
}
.task-input {
@apply border p-2 w-full mb-2 rounded;
}
.task-button {
@apply bg-blue-500 text-white px-4 py-2 rounded w-full;
}
</style>
