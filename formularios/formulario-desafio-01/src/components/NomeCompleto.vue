<template>
    <div>
        <componente-rotulo nome="Nome">
            <input type="text" @input="alterarNome" :value="value.nome">
        </componente-rotulo>
        <componente-rotulo nome="Sobrenome">
            <input type="text" @input="alterarSobrenome" :value="value.sobrenome">
        </componente-rotulo>
    </div>
</template>

<script>
import ComponenteRotulo from './ComponenteRotulo.vue'

export default {
    props: {
        value: {
            type: Object,
            required: true,
        }
    },
    components: {
        ComponenteRotulo,
    },
    methods: {
        alterarNome(event) {
            this.$emit('input', {
                nome: event.target.value,
                sobrenome: this.value.sobrenome
            })
        },
        alterarSobrenome(event) {
            this.$emit('input', {
                nome: this.value.nome,
                sobrenome: event.target.value
            })
        }
    }
}
</script>

<style></style>