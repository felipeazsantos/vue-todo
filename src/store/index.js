import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  getters: {
  },
  mutations: {
    adicionarTarefa(state, titulo) {
      if (titulo) {
        const tarefa = {
          id : new Date().getDate(), 
          titulo, 
          concluido: false }
        state.tarefas.push(tarefa)
      }
    },
    mudarStatusTarefa(state, tarefa) {
      tarefa.concluido = !tarefa.concluido
    },
    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
    }

  },
  actions: {
  },
  modules: {
  }
})
