import db from '../services/localbase'

export default {
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
    }
}