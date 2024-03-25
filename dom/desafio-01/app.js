new Vue({
    el: '#desafio',
    data: {
        nome: "Welbert Soares",
        idade: 25,
        linkImg: "https://s2.static.brasilescola.uol.com.br/be/2020/08/neve.jpg",
    },
    methods: {
        numAleatorio() {
            return Math.random()
        }
    }
})