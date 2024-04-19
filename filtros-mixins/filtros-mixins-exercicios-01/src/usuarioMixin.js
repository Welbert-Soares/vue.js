export default {
    computed: {
        usuarioLogado() {
            return 'Maria Silva'
        }
    },
    created() {
        console.log('Criado a partir do mixin de usuário')
    }
}