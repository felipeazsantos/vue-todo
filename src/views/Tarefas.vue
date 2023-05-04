<template>
  <div>
    <v-col cols="12">
      <v-text-field
        v-model="inputTarefa"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keydown.enter="adicionarTarefa"
      ></v-text-field>
    </v-col>

    <ListaDeTarefas />
  </div>
</template>

<script>
// import Tarefa from "@/components/Tarefas/Tarefa.vue";
import { mapState } from 'vuex'
import ListaDeTarefas from '../components/Tarefas/ListaDeTarefas.vue'

export default {
  name: "Home",
  components: { ListaDeTarefas },
  data() {
    return {
      inputTarefa: null,
    };
  },
  computed: {
    ...mapState(['tarefas'])
  },
  created() {
    this.$store.commit('buscaTarefas');
  },
  methods: {
    adicionarTarefa() {
      // this.$store.commit('adicionaTarefa', this.inputTarefa)
      this.$store.dispatch('adicionaTarefa', this.inputTarefa);
      this.inputTarefa = null
    }
  }
};
</script>
