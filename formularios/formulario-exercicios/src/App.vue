<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel">
				<div class="cabecalho">Formulário</div>
				<ComponenteRotulo nome="E-mail">
					<input type="text" v-model.lazy.trim="usuario.email">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Idade">
					<input type="number" v-model.number="usuario.idade">
				</ComponenteRotulo>
				<ComponenteRotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Características do Problema">
					<span class="mr-4">
						<input type="checkbox" value="reproduzivel" v-model="caracteristicas"> Reproduzível
					</span>
					<span>
						<input type="checkbox" value="intermitente" v-model="caracteristicas"> Intermitente
					</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Qual produto?">
					<span class="mr-4">
						<input type="radio" value="web" v-model="produto"> Web
					</span>
					<span class="mr-4">
						<input type="radio" value="mobile" v-model="produto"> Mobile
					</span>
					<span>
						<input type="radio" value="outro" v-model="produto"> Outro
					</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Prioridade">
					<select v-model="prioridade">
						<option v-for="prioridade in prioridades" 
							:value="prioridade.id"
							:key="prioridade.id"
							:selected="prioridade.id === 1">
							{{ prioridade.nome }}</option>
					</select>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Primeira Reclamação?">
					<ComponenteEscolha v-model="escolha" />
				</ComponenteRotulo>
				<hr>
				<button>Enviar</button>
			</form>
			<div class="painel">
				<div class="cabecalho">Resultado</div>
				<ComponenteRotulo nome="E-mail">
					<span>{{ usuario.email }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Senha">
					<span>{{ usuario.senha }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Idade">
					<span>{{ usuario.idade }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Mensagem">
					<span style="white-space: pre;">{{ mensagem }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Marque as Opções">
					<span>
						<ul>
							<li v-for="caracteristica in caracteristicas" :key="caracteristica">{{ caracteristica }}
							</li>
						</ul>
					</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Prioridade">
					<span>{{ prioridade }}</span>
				</ComponenteRotulo>
				<ComponenteRotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
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
	components: {
		ComponenteRotulo,
		ComponenteEscolha
	},
	data() {
		return {
			produto: 'web',
			prioridade: 1,
			prioridades: [
				{ id: 1, nome: 'Baixa' },
				{ id: 2, nome: 'Média' },
				{ id: 3, nome: 'Alta' },
			],
			mensagem: '',
			caracteristicas: [],
			usuario: {
				email: '',
				senha: '',
				idade: 20,
			},
			escolha: true,
		}
	},

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
