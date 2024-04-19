<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<!-- <p v-nome:argumento.mod1.mod2.mod3 ="..."></p> -->
		<p v-destaque:fundo.atrasar="'red'">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>
		<p v-destaque-local:fundo.atrasar.alternar="'red'">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
	</div>
</template>

<script>

export default {
	component: {},
	directives: {
		'destaque-local': {
			bind(el, binding) {
				const aplicarCor = cor => {
					if (binding.arg === "fundo") {
						el.style.backgroundColor = cor;
					} else {
						el.style.color = cor;
					}
				};

				let atraso = 0;
				if (binding.modifiers["atrasar"]) atraso = 3000;

				const cor1 = binding.value;
				const cor2 = "yellow";
				let corAtual = cor1;

				setTimeout(() => {
					if (binding.modifiers["alternar"]) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1;
							aplicarCor(corAtual);
						}, 1000);
					} else {
						aplicarCor(binding.value)
					}
				}, atraso);
			},
		}
	},
	data() {
		return {
			cor: 'blue'
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
	font-size: 2.5rem;
}
</style>
