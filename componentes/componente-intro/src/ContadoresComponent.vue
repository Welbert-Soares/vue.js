<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="cont in 5" :key="cont"></app-contador>
    </div>    
</template>

<script>
import ContadorComponent from './ContadorComponent.vue'

export default {
    components: {
        'app-contador': ContadorComponent
    }
}
</script>

<style>

</style>