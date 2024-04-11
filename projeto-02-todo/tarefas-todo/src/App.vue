<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @taskAdded="addTask">
		</NewTask>
		<TasksGrid @taskDeleted="deleteTask" :tasks="tasks">
		</TasksGrid>
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TasksGrid from './components/TasksGrid.vue'

export default {
	components: {
		TasksGrid,
		NewTask
	},
	data() {
		return {
			tasks: []
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
		}

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

#app h1 {
	margin-bottom: 5px;
	font-weight: 300;
	font-size: 3rem;
}
</style>