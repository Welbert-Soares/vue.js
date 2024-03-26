new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Você clicou!')
        },
        storageKeydown(event) {
           this.valor = event.target.value
        }
    }
})