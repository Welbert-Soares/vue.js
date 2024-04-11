<template>
	<div id="app">
		<span>
			<button class="vermelho" @click="componente = 'RedComponent'">
				Carregar Componente Vermelho
			</button>
			<button class="verde" @click="componente = 'GreenComponent'">
				Carregar Componente Verde
			</button>
			<button class="azul" @click="componente = 'BlueComponent'">
				Carregar Componente Azul
			</button>
		</span>

		<component :is="componente">
			<span slot="conteudo">Conteúdo do Componente <strong> {{ componente }} </strong></span>
		</component>
	</div>
</template>

<script>
import RedComponent from './components/RedComponent.vue';
import GreenComponent from './components/GreenComponent.vue';
import BlueComponent from './components/BlueComponent.vue';

export default {
	name: 'app',
	components: { RedComponent, GreenComponent, BlueComponent },
	data() {
		return {
			componente: 'RedComponent',
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

button {
	padding: 10px;
	color: #FFF;
	font-size: 1.3rem;
	border-radius: 10px;
	margin-right: 10px;
}

button:hover {
	opacity: 1;
	cursor: pointer;
}

.caixa {
	color: #FFF;
	font-size: 1.8rem;
	padding: 25px;
	margin: 10px 0px;
}

.vermelho {
	border: 2px solid #b60101;
	background-color: #f54235;
	opacity: 0.9;
}

.verde {
	border: 2px solid green;
	background-color: #49b057;
	opacity: 0.9;
}

.azul {
	border: 2px solid blue;
	background-color: #2594f0;
	opacity: 0.9;
}
</style>
