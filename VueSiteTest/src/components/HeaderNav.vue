<template>
<header class="header-nav">
  <h1 class="title">Daily Planner</h1>
  <span class="date">{{ today }}</span>
</header>
</template>

<script setup>
import dayjs from 'dayjs'
const today = dayjs().format('dddd, MMMM D')
</script>

<style scoped>
.header-nav {
@apply bg-blue-600 text-white p-4 flex justify-between items-center rounded;
}
.title {
@apply text-xl font-bold;
}
.date {
@apply text-sm;
}
</style>
