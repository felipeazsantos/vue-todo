<template>
  <div>
    <v-list-item
      :class="{ 'light-blue lighten-5': tarefa.concluido }"
      @click="$store.commit('mudarStatusTarefa', tarefa)"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox 
            :input-value="tarefa.concluido"
            ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through': tarefa.concluido}">
            {{ tarefa.titulo }}
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn 
            icon
            @click.stop="removeTarefa(tarefa.id)">
            <v-icon color="red lighten-1">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    tarefa: Object,
  },
  methods: {
    removeTarefa(id) {
      this.$store.commit('removeTarefa', id)
    }
  }
};
</script>

<style>
</style>