<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksGrid :tasks="tasks"></TasksGrid>
	</div>
</template>

<script>
import TasksGrid from './components/TasksGrid.vue'

export default {
	components: {
		TasksGrid
	},
	data() {
		return {
			tasks: [
				{name: 'Estudar Vue.js', pending: true},
				{name: 'Estudar JavaScript', pending: false},
			]
		}
	},
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