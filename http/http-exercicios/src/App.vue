<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<div class="ballonMensage" v-if="fecharMensagem">
			<div class="alert alert-dismissible fade show" :class="`alert-${mensagem.tipo}`" role="alert"
				v-for="mensagem in mensagens" :key="mensagem.texto">
				{{ mensagem.texto }}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
					@click="fecharMensagem = !fecharMensagem"></button>
			</div>
		</div>

		<div class="form">
			<div class="mb-3">
				<label for="nomeInput" class="form-label ">Nome:</label>
				<input type="text" class="form-control fs-5" id="nomeInput" placeholder="Informe seu Nome"
					v-model="usuario.nome">
			</div>
			<div class="mb-3">
				<label for="emailInput" class="form-label fs-3">E-mail:</label>
				<input type="email" class="form-control fs-5" id="emailInput" placeholder="Informe seu E-mal"
					v-model="usuario.email">
			</div>
			<button @click.prevent="salvar" class="btn btn-primary ">Enviar</button>
			<button @click.prevent="obterUsuarios" class="btn btn-success">Obter Usuários</button>
		</div>
		<hr>
		<div class="lista">
			<ul class="list-group ">
				<li v-for="(usuario, id) in usuarios" :key="id" class="list-group-item">
					<strong>Nome: </strong> {{ usuario.nome }}<br>
					<strong>E-mail: </strong>{{ usuario.email }}<br>
					<strong> ID: </strong> {{ id }}<br>
					<button type="button" class="btn btn-warning" @click="carregar(id)">Carregar</button>
					<button type="button" class="btn btn-danger" @click="excluir(id)">Excluir</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			fecharMensagem: true,
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario = {
				nome: '',
				email: '',
			},
				this.id = null
			this.mensagens = []
		},
		carregar(id) {
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`).then(() => this.limpar())
			.catch(() => {
				this.mensagens.push({
					texto: 'Erro ao excluir usuário',
					tipo: 'danger'
				})
			})
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Usuário salvo com sucesso!',
						tipo: 'success'
					})
					this.fecharMensagem = true
				})
		},
		obterUsuarios() {
			this.$http.get('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data
					console.log(resp.data);
				})
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Welbert',
	// 		email: 'welbertsoares@test.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
