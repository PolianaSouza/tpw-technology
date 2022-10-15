<template>
  <div class="q-pa-md">
    <q-input
      v-model="pesquisar"
      debounce="500"
      filled
      dense
      class="bg-white"
      placeholder="Pesquisar"
    >
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
const pesquisar = ref("");
</script>

<style>
</style>