<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<ComponenteRotulo nome="E-mail">
					<input type="text">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Senha">
					<input type="password">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Idade">
					<input type="number">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5"></textarea>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" value="intermitente"> Intermitente</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio"> Web</span>
					<span class="mr-4"><input type="radio"> Mobile</span>
					<span><input type="radio"> Outro</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Prioridade">
					<select name="" id="">
						<option></option>
					</select>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Primeira Reclamação?">
					<ComponenteEscolha />
				</ComponenteRotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<ComponenteRotulo nome="E-mail">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Senha">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Idade">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Mensagem">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Marque as Opções">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Qual produto?">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Prioridade">
					<span>???</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Primeira Reclamação?">
					<span>???</span>
				</ComponenteRotulo>
			</div>
		</div>
	</div>
</template>

<script>
import ComponenteRotulo from './components/ComponenteRotulo.vue'
import ComponenteEscolha from './components/ComponenteEscolha.vue'

export default {
	name: 'app',
	components: { ComponenteRotulo, ComponenteEscolha }
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
