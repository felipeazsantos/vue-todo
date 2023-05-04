import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: []
  },
  getters: {
  },
  mutations: {
    buscaTarefas(state) {
      db.collection('tarefas').get().then(tarefas => {
        state.tarefas = tarefas
      })
    },
    adicionaTarefa(state, titulo) {
      db.collection('tarefas').add({
        id: new Date().getTime(),
        titulo, 
        concluido: false }
      ) 
    },
    mudarStatusTarefa(state, tarefa) {
      tarefa.concluido = !tarefa.concluido
    },
  },
  actions: {
    async adicionaTarefa({commit}, titulo) {
      await commit('adicionaTarefa', titulo);
      await commit('buscaTarefas');
    },
    editaTarefa({ commit }, novaTarefa) {
      db.collection('tarefas').doc({ id: novaTarefa.id }).update({
        titulo: novaTarefa.titulo
      }).then(() => {
        commit('buscaTarefas');
      })
    },
    removeTarefa({ commit }, id) {
      db.collection('tarefas').doc({ id }).delete()
        .then(() => {
          commit('buscaTarefas');
        })
    }
  },
  modules: {
  }
})
