export default {
    data() {
        return {
            fruta: '',
            frutas: ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}