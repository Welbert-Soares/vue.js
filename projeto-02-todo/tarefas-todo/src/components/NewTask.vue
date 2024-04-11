<template>
  <div class="new-task">
    <input v-model="name" @keydown.enter="addTask" type="text">
    <button @click="addTask">+</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addTask() {
            this.$emit('taskAdded', {
                name: this.name,
            })
            this.name = ''
        }
    }
}
</script>

<style>

</style>