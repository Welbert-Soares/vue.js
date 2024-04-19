<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
    <hr>
    <button class="btn"
      @click="exibir = !exibir">Mostrar Mensagem</button>

    <transition name="fade">
      <div class="alert" v-if="exibir">{{ msg }}</div>
    </transition>
	</div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Uma mensagem de informação para o usuário!',
      exibir: false,
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
	font-size: 1.5rem;
}

.btn {
  width: 200px;
  height: 50px;
  padding: 10px 20px;
  background-color: #187db8;
  color: white;
  border: 1px solid #0b537c;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0b537c;
}

.alert {
  padding: 20px;
  margin-top: 20px;
  background-color: #1b8f8f;
  color: white;
  border-radius: 5px;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}

</style>
