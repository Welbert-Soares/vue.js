<template>
    <div class="tasks-grid">
        <template v-if="tasks.length">
            <TaskComponent v-for="task in tasks" :key="task.name" :task="task">
            </TaskComponent>
        </template>
        <p v-else class="no-task">Tudo em dia!</p>
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

<style>
    .tasks-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 20px;
    }

    

    .no-task {
        color: #aaa;
        font-size: 1.7rem;
    }
</style>