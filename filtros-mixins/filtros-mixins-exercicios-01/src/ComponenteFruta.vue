<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import FrutasMixin from './FrutasMixin'

export default {
    mixins: [FrutasMixin],
    created() {
        console.log('created no Frutas.vue')
    }
}
</script>

<style></style>