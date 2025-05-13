<template>
<ul>
  <li v-for="task in tasks" :key="task.id" class="task-item">
    <label class="task-label">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }">{{ task.text }}</span>
    </label>
    <button @click="$emit('delete', task.id)" class="delete-button">✕</button>
  </li>
</ul>
</template>

<script setup>
defineProps(['tasks'])
defineEmits(['delete'])
</script>

<style scoped>
.task-item {
@apply flex items-center justify-between mb-2;
}
.task-label {
@apply flex items-center gap-2;
}
.delete-button {
@apply text-red-500;
}
.done {
@apply line-through text-gray-500;
}
</style>
