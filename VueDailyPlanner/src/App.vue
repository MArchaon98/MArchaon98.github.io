<template>
<div id="app" class="planner-container" :style="containerStyle">
  <!-- Header -->
  <header :style="headerStyle">
    <h1 :style="titleStyle">Daily Planner</h1>
    <p :style="dateStyle">{{ currentDate }}</p>
  </header>

  <!-- Task Input -->
  <section :style="taskInputStyle">
    <form @submit.prevent="handleSubmit">
      <input
        v-model="newTask"
        type="text"
        placeholder="What do you need to do today?"
        :style="inputStyle"
      />
      <button type="submit" :style="buttonStyle">Add Task</button>
    </form>
  </section>

  <!-- Task List -->
  <section :style="taskListStyle">
    <h2 :style="sectionTitleStyle">Today's Tasks</h2>
    <ul v-if="tasks.length > 0" :style="taskListItemsStyle">
      <li v-for="task in tasks" :key="task.id" :style="taskItemStyle">
        <span :style="taskTextStyle(task)">{{ task.title }}</span>
        <button @click="toggleCompletion(task.id)" :style="completeButtonStyle">
          {{ task.completed ? 'Undo' : 'Complete' }}
        </button>
        <button @click="removeTask(task.id)" :style="removeButtonStyle">❌</button>
      </li>
    </ul>
    <p v-else :style="noTasksStyle">You have no tasks today. 🎉</p>
    <button 
      class="clear-button" 
      @click="clearCompleted" 
      v-if="tasks.some(t => t.completed)" 
      :style="clearButtonStyle"
    >
      Clear Completed Tasks
    </button>
  </section>

  <!-- Footer -->
  <footer :style="footerStyle">
    <p>&copy; 2025 Daily Planner. All rights reserved.</p>
  </footer>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State for tasks
const tasks = ref([]); // Store tasks as an array
const newTask = ref(''); // For binding input field

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

// Remove a task by its id
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

// Inline Styles
const containerStyle = {
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
padding: '20px',
backgroundColor: '#f4f4f9',
color: '#333',
fontFamily: 'Arial, sans-serif'
};

const headerStyle = {
textAlign: 'center',
marginBottom: '20px'
};

const titleStyle = {
fontSize: '2.5rem',
fontWeight: 'bold'
};

const dateStyle = {
fontSize: '1.2rem',
color: '#666'
};

const taskInputStyle = {
marginTop: '20px'
};

const inputStyle = {
padding: '10px',
width: '300px',
marginRight: '10px',
fontSize: '1rem',
border: '1px solid #ccc',
borderRadius: '5px'
};

const buttonStyle = {
padding: '10px',
fontSize: '1rem',
cursor: 'pointer',
backgroundColor: '#4caf50',
color: 'white',
border: 'none',
borderRadius: '5px'
};

const taskListStyle = {
width: '100%',
maxWidth: '600px',
marginTop: '30px'
};

const sectionTitleStyle = {
fontSize: '1.5rem',
fontWeight: 'bold',
marginBottom: '10px'
};

const taskListItemsStyle = {
listStyle: 'none'
};

const taskItemStyle = {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
padding: '10px',
backgroundColor: 'white',
borderRadius: '5px',
marginBottom: '10px',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const taskTextStyle = (task) => ({
textDecoration: task.completed ? 'line-through' : 'none',
color: task.completed ? '#888' : '#333'
});

const completeButtonStyle = {
padding: '5px 10px',
fontSize: '1rem',
cursor: 'pointer',
backgroundColor: '#3498db',
color: 'white',
border: 'none',
borderRadius: '5px'
};

const removeButtonStyle = {
background: 'none',
border: 'none',
color: '#e74c3c',
fontSize: '1.2rem',
cursor: 'pointer'
};

const noTasksStyle = {
textAlign: 'center',
fontSize: '1.2rem',
color: '#888'
};

const clearButtonStyle = {
marginTop: '20px',
padding: '10px',
fontSize: '1rem',
cursor: 'pointer',
backgroundColor: '#f39c12',
color: 'white',
border: 'none',
borderRadius: '5px'
};

const footerStyle = {
marginTop: '30px',
textAlign: 'center',
fontSize: '0.9rem',
color: '#666'
};
</script>
