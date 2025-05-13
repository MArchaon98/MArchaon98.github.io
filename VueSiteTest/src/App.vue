<template>
<div class="container">
  <HeaderNav />
  <CalendarView @select="changeDate" />
  <h2 class="date-title">Tasks for {{ selectedDate }}</h2>
  <TaskForm @add="addTask" />
  <TaskList :tasks="tasksForSelectedDate" @delete="deleteTask" />
  <Footer />
</div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import CalendarView from './components/CalendarView.vue'
import Footer from './components/Footer.vue'

import { ref, computed } from 'vue'

const selectedDate = ref(getToday())
const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '{}'))

function getToday() {
return new Date().toISOString().split('T')[0]
}

function changeDate(date) {
selectedDate.value = date
}

const tasksForSelectedDate = computed(() => tasks.value[selectedDate.value] || [])

function addTask(task) {
if (!tasks.value[selectedDate.value]) {
  tasks.value[selectedDate.value] = []
}
tasks.value[selectedDate.value].push(task)
saveTasks()
}

function deleteTask(id) {
tasks.value[selectedDate.value] = tasks.value[selectedDate.value].filter(t => t.id !== id)
saveTasks()
}

function saveTasks() {
localStorage.setItem('tasks', JSON.stringify(tasks.value))
}
</script>

<style scoped>
.container {
@apply max-w-2xl mx-auto p-4;
}
.date-title {
@apply text-lg font-semibold mb-2;
}
</style>
