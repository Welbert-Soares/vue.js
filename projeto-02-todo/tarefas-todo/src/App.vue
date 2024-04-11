<template>
	<div id="app">
		<h1 class="button" data-text="Awesome">
			<span class="actual-text">&nbsp;Tarefas&nbsp;</span>
			<span aria-hidden="true" class="hover-text">&nbsp;Tarefas&nbsp;</span>
		</h1>
		<TaskProgress :progress="progress"></TaskProgress>
		<NewTask @taskAdded="addTask">
		</NewTask>
		<TasksGrid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState">
		</TasksGrid>
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TasksGrid from './components/TasksGrid.vue'
import TaskProgress from './components/TaskProgress.vue'

export default {
	components: {
		TasksGrid,
		NewTask,
		TaskProgress,
	},
	data() {
		return {
			tasks: []
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			if (!task.name.trim()) {
				alert('O nome da tarefa não pode estar vazio.');
				return;
			}
			if (task.name.length > 25) {
				alert('O nome da tarefa não pode ter mais de 25 caracteres.');
				return;
			}
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0
			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		toggleTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		},
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
body {
	font-family: 'Lato', sans-serif;
	background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
	color: #FFF;
}

#app {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

#app .button {
	--border-right: 6px;
	--text-stroke-color: rgba(255, 255, 255, 0.6);
	--animation-color: #37FF8B;
	--fs-size: 3em;
	letter-spacing: 3px;
	text-decoration: none;
	font-size: var(--fs-size);
	font-family: "Arial";
	position: relative;
	text-transform: uppercase;
	color: transparent;
	-webkit-text-stroke: 1px var(--text-stroke-color);
}

.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}

.button:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 23px var(--animation-color))
}

</style>