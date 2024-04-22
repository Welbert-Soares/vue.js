<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
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
					<strong> ID: </strong> {{ id }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		salvar() {
			this.$http.post('usuarios.json', this.usuario)
				.then(resp => {
					console.log(resp)
					this.usuario = {
						nome: '',
						email: ''
					}
				})
		},
		obterUsuarios() {
			this.$http.get('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data
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
