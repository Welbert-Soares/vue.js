<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <button class="m-3  btn bg-indigo-500 shadow-lg shadow-indigo-500/50" @click="exibir = !exibir">Mostrar
      Mensagem</button>

    <!-- <transition name="fade" appear="">
      <div class="alert" v-if="exibir">{{ msg }}</div>
    </transition>
    <transition name="slide" type="animation" appear="">
      <div class="alert" v-show="exibir">{{ msg }}</div>
    </transition>
    <transition 
    enter-active-class="animate-bounce"
    leave-active-class="animate-ping">
    <div class="alert" v-show="exibir">{{ msg }}</div>
  </transition> -->
    <hr>
    <select name="" id="" v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </select>
    <transition :name="tipoAnimacao" mode="out-in">
      <div class="alert" v-if="exibir" key="info">{{ msg }}</div>
      <div class="warning" v-else key="warn">{{ msg }}</div>
    </transition>

    <hr>
    <button class="m-3" @click="exibir2 = !exibir2">Alternar</button>
    <transition :css="false" 
      @before-enter="beforeEnter" 
      @enter="enter" 
      @berfore-leave="beforeLeave" 
      @leave="leave">
      <div v-if="exibir2" class="caixa"></div>
    </transition>


  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: 'Uma mensagem de informação para o usuário!',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
    }
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase + 
          (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    // afterEnter() {
    //   console.log('afterEnter');
    // },
    // enterCancelled() {
    //   console.log('enterCancelled');
    // },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    // afterLeave() {
    //   console.log('afterLeave');
    // },
    // leaveCancelled() {
    //   console.log('leaveCancelled');
    // },
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
  width: 250px;
  height: 50px;
  color: white;
  border-radius: 10px;
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

.warning {
  padding: 20px;
  margin-top: 20px;
  background-color: #e64343;
  color: white;
  border-radius: 5px;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 5px auto;
  border-radius: 5px;
  background-color: lightblue;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 1s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
