<template>
  <div class="new-task">
    <input v-model="name" @keydown.enter="addTask" type="text"
        class="form-element" placeholder="Nova tarefa?">
    <button class="form-element"  @click="addTask">+</button>
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
    .new-task {
        margin: 35px;

    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;

    }

    input.form-element {
        width: 500px;
        background-color: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196f3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        cursor: pointer;
    }

    button.form-element:hover {
        background-color: #178fff;
    }
</style>