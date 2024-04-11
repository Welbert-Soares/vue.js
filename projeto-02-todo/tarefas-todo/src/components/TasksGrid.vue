<template>
    <div class="tasks-grid">
        <template>
            <TaskComponent v-for="task in tasks" :key="task.name" :task="task">
            </TaskComponent>
        </template>
    </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue'

export default {
    components: {
        TaskComponent
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style></style>