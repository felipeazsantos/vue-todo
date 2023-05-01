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
    <v-list flat subheader>
      <v-list-item-group multiple active-class="">
        <div v-for="(tarefa, index) in $store.state.tarefas" :key="index">
          <Tarefa :tarefa="tarefa" @tarefaConcluida="tarefa.concluido = $event" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "@/components/Tarefas/Tarefa.vue";

export default {
  name: "Home",
  components: { Tarefa },
  data() {
    return {
      inputTarefa: null,
      tarefas: [],
    };
  },
  methods: {
    adicionarTarefa() {
      this.$store.commit('adicionarTarefa', this.inputTarefa)
      this.inputTarefa = null
    }
  }
};
</script>
