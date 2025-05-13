<template>
<div class="calendar-grid">
  <div
    v-for="offset in 30"
    :key="offset"
    class="calendar-cell"
    :class="{ today: isToday(offset) }"
    @click="selectDate(offset)"
  >
    {{ getDate(offset) }}
  </div>
</div>
</template>

<script setup>
import { defineEmits } from 'vue'
import dayjs from 'dayjs'
const emit = defineEmits(['select'])

function getDate(offset) {
return dayjs().add(offset - 1, 'day').format('D MMM')
}
function isToday(offset) {
return offset === 1
}
function selectDate(offset) {
const date = dayjs().add(offset - 1, 'day').format('YYYY-MM-DD')
emit('select', date)
}
</script>

<style scoped>
.calendar-grid {
@apply grid grid-cols-7 gap-2 text-center text-sm mt-4 mb-6;
}
.calendar-cell {
@apply p-2 border rounded cursor-pointer hover:bg-blue-100;
}
.today {
@apply bg-blue-200;
}
</style>
