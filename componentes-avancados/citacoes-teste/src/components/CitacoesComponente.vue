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
                fonte: 'oxigenweb',
                texto: 'Lembro que quando eu abri a primeira versão do Facebook, pensei: ‘Sabe, alguém precisa construir um serviço como esse para o mundo’. Eu só não pensei que nós seríamos as pessoas que faríamos isso.',
                autor: 'Mark Zuckerberg'
            }, {
                fonte: 'meetime',
                texto: 'A única maneira de fazer algo excelente é amar o que você faz. Se você ainda não a encontrou, continue procurando. Não se acomode.',
                autor: 'Steve Jobs'
            }]
        }
    },
    computed: {
        indice() {
            return Math.abs(this.numero % 3)
        }
    },
    created() {
        console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },
    activated() {
        console.log('activated')
    },
    desactivated() {
        console.log('desactivated')
    },
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
