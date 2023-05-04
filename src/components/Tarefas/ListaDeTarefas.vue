<template>
  <drop-list
    :items="tarefasComputadas"
    class="list"
    @insert="onInsert"
    @reorder="$event.apply(tarefasComputadas)"
  >
    <template v-slot:item="{ item }">
      <drag class="item" :key="item">
        <Tarefa :tarefa="item" />
      </drag>
      <v-divider />
    </template>
  </drop-list>
</template>

<script lang="ts">
import { Drag, DropList } from "vue-easy-dnd";
import Tarefa from './Tarefa.vue'

export default {
  components: {
    Drag,
    DropList,
    Tarefa
  },
  data: function () {
    return {
      items: ["a", "b", "c", "d", "e"],
    };
  },
  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    },
  },
  methods: {
    onInsert(event) {
      this.items.splice(event.index, 0, event.data);
    },
  },
};
</script>

<style>
</style>