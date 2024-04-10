<template>
	<div id="app">
		<span>
			<button @click="componente = 'CitacoesComponente'">Citações</button><br>
			<button @click="componente = 'SobreNos'">Sobre Nós</button>
		</span>
		<keep-alive>
			<component :is="componente"></component>
		</keep-alive>
		
	</div>
</template>

<script>
import CitacoesComponente from '@/components/CitacoesComponente'
import SobreNos from '@/components/SobreNos'

export default {
	components: { CitacoesComponente, SobreNos },
	data(){
		return {
			componente: 'SobreNos'
		}
	}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
		width: 190px;
	
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 13px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }

	button:hover {
		background-color: rgba(0, 0, 0, .6);
		cursor: pointer;
	}
</style>