<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        outlined
        v-model="pessoa"
        label="Seu nome"
        hint="digite seu nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <pre>{{ pessoa }}</pre>
      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your age',
          (val) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />
      <pre>{{ age }}</pre>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
const pessoa = ref("");
const age = ref(null);
function onSubmit() {
  alert("Olá Mundo");
}
</script>
  
  <style>
</style>