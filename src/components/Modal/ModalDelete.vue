<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template> -->
    <v-card>
      <v-card-title class="text-h5"> Excluir </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-2">Tem certeza que deseja excluir a tarefa?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('fechaModal')">
          Cancelar
        </v-btn>
        <v-btn color="primary darken-1" text @click="removeTarefa">
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    tarefa: Object
  },
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    removeTarefa() {
      this.$store.dispatch('removeTarefa', this.tarefa.id)
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>