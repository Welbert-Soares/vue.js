<template>
    <div class="new-task">
        <input v-model="name" @keydown.enter="addTask" type="text" class="form-element" placeholder="Nova tarefa?">
        <button class="form-element btn-class-name" @click="addTask">
            <span class="back"></span>
            <span class="front"></span>

        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: ''
        }
    },
    methods: {
        addTask() {
            this.$emit('taskAdded', {
                name: this.name,
            })
            this.name = ''
        }
    }
}
</script>

<style>
.new-task {
    margin: 35px;
    display: flex;
    align-items: center;
    position: relative;
}

.form-element {
    outline: none;
    font-size: 2rem;
    border: 1px solid #fff;
    padding: 5px 10px 8px;
    color: #fff;

}

input.form-element {
    width: 500px;
    height: 50px;
    background-color: #fff2;
    border-radius: 8px;
}

.btn-class-name {
    --primary: 255, 90, 120;
    --secondary: 150, 50, 60;
    width: 50px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    outline: 6px solid rgb(var(--primary), .5);
    border-radius: 100%;
    position: relative;
    transition: .3s;
    position: absolute;
    right: 18px;
}

.btn-class-name .back {
  background: rgb(var(--secondary));
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.btn-class-name .back {
  background: rgb(var(--secondary));
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.btn-class-name .front {
  background: linear-gradient(0deg, rgba(var(--primary), .6) 20%, rgba(var(--primary)) 50%);
  box-shadow: 0 .5em 1em -0.2em rgba(var(--secondary), .5);
  border-radius: 100%;
  position: absolute;
  border: 1px solid rgb(var(--secondary));
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: inherit;
  transform: translateY(-15%);
  transition: .15s;
  color: rgb(var(--secondary));
}

.btn-class-name:active .front {
  transform: translateY(0%);
  box-shadow: 0 0;
}

</style>