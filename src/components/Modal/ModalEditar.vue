<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"> Open Dialog </v-btn>
    </template> -->
    <v-card>
      <v-card-title class="text-h5"> Editar </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-2">Informe o novo título.</v-card-text>
      <v-text-field
        class="px-3"
        label="Titulo"
        placeholder="Informe o novo título"
        v-model="titulo"
        outlined
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="$emit('fechaModal')">
          Cancelar
        </v-btn>
        <v-btn color="primary darken-1" text @click="editaTarefa">
          Salvar
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
      dialog: true,
      titulo: null
    };
  },
  created() {
    this.titulo = this.tarefa.titulo
  },
  methods: {
    editaTarefa() {
      const novaTarefa = { id: this.tarefa.id, titulo: this.titulo }
      this.$store.dispatch('editaTarefa', novaTarefa)
      this.dialog = false;
    }
  }
};
</script>

<style>
</style>