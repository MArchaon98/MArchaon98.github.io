<template>
  <div id="app" class="planner-container">
    <!-- Header -->
    <header class="header">
      <h1 class="app-title">Daily Planner</h1>
      <p class="current-date">{{ currentDate }}</p>
    </header>

    <!-- Task Input -->
    <section class="task-input">
      <form @submit.prevent="handleSubmit">
        <input
          v-model="newTask"
          type="text"
          placeholder="What do you need to do today?"
          class="task-input-field"
        />
        <button type="submit" class="add-task-button">Add Task</button>
      </form>
    </section>

    <!-- Task List -->
    <section class="task-list">
      <h2 class="section-title">Today's Tasks</h2>
      <ul v-if="tasks.length > 0" class="task-items">
        <li v-for="task in tasks" :key="task.id" class="task-item">
          <input
            type="checkbox"
            v-model="task.completed"
            @change="toggleCompletion(task.id)"
            class="task-checkbox"
          />
          <span :class="{ 'task-completed': task.completed }">{{ task.title }}</span>
          <button @click="removeTask(task.id)" class="remove-task-button">❌</button>
        </li>
      </ul>
      <p v-else class="no-tasks">You have no tasks today. 🎉</p>
      <button class="clear-button" @click="clearCompleted" v-if="tasks.some(t => t.completed)">
        Clear Completed Tasks
      </button>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 Daily Planner. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State for tasks
const tasks = ref([]);
const newTask = ref('');

// Get the current date for the header
const currentDate = ref('');
onMounted(() => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = date.toLocaleDateString(undefined, options);
});

// Add a new task
function handleSubmit() {
  if (newTask.value.trim()) {
    tasks.value.push({
      id: Date.now(),
      title: newTask.value,
      completed: false,
    });
    newTask.value = '';
  }
}

// Remove a task
function removeTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id);
}

// Toggle task completion
function toggleCompletion(id) {
  const task = tasks.value.find(task => task.id === id);
  if (task) {
    task.completed = !task.completed;
  }
}

// Clear completed tasks
function clearCompleted() {
  tasks.value = tasks.value.filter(task => !task.completed);
}
</script>
