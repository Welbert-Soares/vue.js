<template>
    <div>
        {{ titulo }}
        <button @click="titulo += '#'">Alterar</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                titulo: 'Teste Data usando Vue.js'
            }
        }
    }
</script>

<style>
    #app {
        background-color: #ddd;
        color: #000;
    }
</style>