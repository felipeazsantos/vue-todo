<template>
    <v-col cols="12">
        <v-text-field
        v-model="inputTarefa"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keydown.enter="adicionarTarefa"
        ></v-text-field>
    </v-col>
</template>

<script>

export default {
    data() {
        return {
            inputTarefa: null,
        };
    },
    methods: {
        adicionarTarefa() {
        // this.$store.commit('adicionaTarefa', this.inputTarefa)
        this.$store.dispatch('adicionaTarefa', this.inputTarefa);
        this.inputTarefa = null
        }
    }
}
</script>

<style>

</style>