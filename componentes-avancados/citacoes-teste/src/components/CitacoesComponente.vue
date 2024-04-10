<template>
    <div class="citacoes">
        <span>
            <button @click="numero--">&lt;</button>
            <button @click="numero++">&gt;</button>
        </span>
        <CitacaoComponente>
            <h2 slot="autor"> {{ citacoes[indice].autor }}</h2>
            <p> {{ citacoes[indice].texto }} </p>
            <h6 slot="fonte"> {{ citacoes[indice].fonte }}</h6>
        </CitacaoComponente>
    </div>
</template>

<script>
import CitacaoComponente from '@/components/CitacaoComponente.vue'

export default {
    components: {
        CitacaoComponente,
    },
    data() {
        return {
            numero: 0,
            citacoes: [{
                fonte: 'Jornal do Empreendedor',
                texto: 'Lembre-se sempre que você é absolutamente único. Assim como todos os outros.',
                autor: 'Margaret Mead'
            }, {
                fonte: 'Frases de Mãe',
                texto: 'Isso não é um quarto, é um chiqueiro.',
                autor: 'Roberta'
            }, {
                fonte: 'Frases de Pai',
                texto: 'Vou contar até 3! 1, 2, 2...',
                autor: 'Gustavo'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    }
}
</script>

<style scoped>
.citacoes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2{
    color: #0f0;
    margin: 0;
    font-size: 1.5em;
}

p{
    font-size: 0.9em;
    font-style: italic;
    margin: 0;
    padding: 12px 0 0 0 ;
}
</style>
